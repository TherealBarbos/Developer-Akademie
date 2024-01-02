class World {
  character = new Character();
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  throwableObjects = [];
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  collectBottle = 0;
  coinCounter = 0;
  characterNotVulnerable = false;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.newThrow();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
    this.checkEnemyCollisions();
    this.checkBottleCollisions();
    this.checkCoinCollisions();
  }, 150 / 60);
  }

  checkEnemyCollisions() {

      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          if (this.character.isAboveGround() && !this.character.isHurt()) {
            this.killEnemy(enemy);
            this.characterInvulnerable();
          } else if (enemy.energy > 0) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
          }
        }
      });

  }

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.collectBottle(bottle);
      }
    });
  }

  checkCoinCollisions() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.collectCoin(coin);
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
      this.level.enemies.splice(index, 1);
    }
  }

  collectBottle(bottle) {
    const index = this.level.bottles.indexOf(bottle);
    if (index !== -1 && this.character.isColliding(bottle)) {
        console.log("Bottle collected!");

        this.level.bottles.splice(index, 1);
        this.remainingThrows += 2;

        // Annahme: maxBottlesInLevel ist die maximale Anzahl der Flaschen im Level (z.B., 10)
        const maxBottlesInLevel = 10;

        // Berechne den Prozentsatz
        const percentage = (this.remainingThrows / maxBottlesInLevel) * 100;

        // Aktualisiere die Bottle-Bar mit dem berechneten Prozentsatz
        this.bottleBar.setPercentage(percentage);

        console.log(this.remainingThrows, percentage);
    }
}


  collectCoin(coin) {
    const index = this.level.coins.indexOf(coin);
    if (index !== -1 && this.character.isColliding(coin)) {
      this.level.coins.splice(index, 1);
      this.coinCounter++;

      const maxCoinsInLevel = 10;
  

      const percentage = (this.coinCounter / maxCoinsInLevel) * 100;
  

      this.coinBar.setPercentage(percentage);
  
      console.log(this.coinCounter, percentage);
    }
  }

  newThrow() {
    setInterval(() => {
      if (
        (this.keyboard.CONTROL || this.keyboard.E) &&
        this.remainingThrows > 0
      ) {
        if (this.remainingThrows <= this.level.maxThrows) {
          let bottle = new ThrowableObject(this.character.x, this.character.y);
          this.throwableObjects.push(bottle);
          this.remainingThrows--;

          let percentage = (this.remainingThrows / this.level.maxThrows) * 100;
          this.bottleBar.setPercentage(percentage);

          console.log(`Verbleibende Würfe: ${this.remainingThrows}`);
        }
      }
    }, 250);
  }

  gameOver() {
    // Entferne alle Charaktere
    setTimeout(() => {
      this.level.enemies = [];
      this.character = null;
    }, 1000);

    // Zeige "Game Over"-Text an
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
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
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
    mo.drawFrame(this.ctx);

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
