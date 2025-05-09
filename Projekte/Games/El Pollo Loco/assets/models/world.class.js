class World {
  startScreen = new StartScreen();
  character = new Character();
  endboss = new Endboss();
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  bossBar = new BossBar();
  throwableObjects = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  remainingThrows = 0;
  bottleCounter = 0;
  coinCounter = 0;
  characterNotVulnerable = false;

  coin_sound = new Audio("assets/sounds/coin.mp3");
  bottle_sound = new Audio("assets/sounds/bottle.mp3");
  dead_chicken_sound = new Audio("assets/sounds/chicken_dead.mp3");
  background_sound = new Audio("assets/sounds/background.mp3");
  throw_sound = new Audio("assets/sounds/throw.mp3");
  splash_sound = new Audio("assets/sounds/splash.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.newThrow();
    this.background_sound.loop = true;
    this.background_sound.play();

  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.checkEnemyCollisions();
      this.checkBossCollisions();
      this.checkBottleCollisions();
      this.checkCoinCollisions();
      this.checkEndbossCollisions();
      this.checkGroundCollision();
    }, 150 / 60);
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround()) {
          this.killEnemy(enemy);
          this.dead_chicken_sound.play();
          this.characterInvulnerable();
          setTimeout(() => {
            this.enemyDisappear(enemy);
          }, 75);
        } else if (!this.character.isHurt()) {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }
  checkBossCollisions() {

      if (this.character.isColliding(this.endboss)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        } 
      }
  

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.collectBottle(bottle);
        this.bottle_sound.play();
      }
    });
  }

  checkCoinCollisions() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.collectCoin(coin);
        this.coin_sound.play();
      }
    });
  }

  checkEndbossCollisions() {
    this.throwableObjects.forEach((bottle) => {
      this.level.endboss.forEach((endboss) => {
        if (bottle.isColliding(endboss)) {
          bottle.splash();
          setTimeout(() => {
            this.bottleDisapear(bottle);
          }, 100);
        } else if (!this.endboss.bossisHurt()) {

          console.log("Endboss HIT!");
          this.splash_sound.play();
          this.endboss.endbosshit();
        }
      });
    });
  }

  checkGroundCollision() {
    const groundY = 450;
    this.throwableObjects.forEach((bottle) => {
      if (bottle.y + bottle.height >= groundY) {
        bottle.splash();
        setTimeout(() => {
          this.bottleDisapear(bottle);
        }, 75);
        this.splash_sound.play();
      }
    });
  }

  characterInvulnerable() {
    this.characterNotVulnerable = true;
    setTimeout(() => {
      this.characterNotVulnerable = false;
    }, 1500);
  }

  killEnemy(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index !== -1) {
      console.log("Gegner getötet!");
      enemy.die();
    }
  }

  
  enemyDisappear(enemy) {
    const index = this.level.enemies.indexOf(enemy);
    if (index !== -1) {
    this.level.enemies.splice(index, 1);
  }
  }

  bottleDisapear(bottle) {
    const index = this.throwableObjects.indexOf(bottle);
    if (index !== -1) {
      this.throwableObjects.splice(index, 1);
    }
  }

  collectBottle(bottle) {
    const index = this.level.bottles.indexOf(bottle);
    if (index !== -1 && this.character.isColliding(bottle)) {
      this.level.bottles.splice(index, 1);
      this.bottleCounter++;

      const maxBottlesInLevel = 10;
      const percentage = (this.bottleCounter / maxBottlesInLevel) * 100;

      this.bottleBar.setPercentage(percentage);
    }
  }

  collectCoin(coin) {
    const index = this.level.coins.indexOf(coin);
    if (index !== -1 && this.character.isColliding(coin)) {
      this.level.coins.splice(index, 1);
      this.coinCounter++;
      this.remainingThrows++;

      const maxCoinsInLevel = 10;
      const percentage = (this.coinCounter / maxCoinsInLevel) * 100;

      this.coinBar.setPercentage(percentage);
    }
  }

  newThrow() {
    setInterval(() => {
      if (
        (this.keyboard.CONTROL || this.keyboard.E) &&
        this.remainingThrows > 0
      ) {
        let bottle = new ThrowableObject(this.character.x, this.character.y);
        this.throwableObjects.push(bottle);
        this.remainingThrows--;
        this.bottleCounter--;
        const maxBottlesInLevel = 10;
        const percentage = (this.bottleCounter / maxBottlesInLevel) * 100;
        this.throw_sound.play();
        this.bottleBar.setPercentage(percentage);
      }
    }, 333);
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);

    this.ctx.translate(-this.camera_x, 0);
    // -----------Fixed Objects--------------

    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.bossBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(Objects) {
    Objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.changeDirection(mo);
    }

    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.changeDirectionReturn(mo);
    }
  }

  changeDirection(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  changeDirectionReturn(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
