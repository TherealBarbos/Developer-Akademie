class World {
  character = new Character();
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  throwableObjects = [new ThrowableObject()];
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  remainingThrows = 0;
  coinCounter = 0;

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
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          if (this.character.y < 150 && this.character.y < enemy.y) {
            this.killEnemy(enemy);
          } else {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);

            if (this.character.energy <= 0) {
              this.gameOver();
            }
          }
        }
      });
    }, 500);
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.collectCoin(coin);
        }
      });
    }, 500);
    setInterval(() => {
      this.level.bottles.forEach((bottle) => { 
        if (this.character.isColliding(bottle)) {
          console.log("Bottle collected!");
          this.collectBottle(bottle);
        }
      });
    }, 500);
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
    if (index !== -1) {
      console.log("Bottle collected!");
      console.log(this.bottleBar.percentage);

      const newPercentage = (this.remainingThrows / this.level.maxThrows) * 100;

      this.level.bottles.splice(index, 1);
      this.remainingThrows += 2;
      this.bottleBar.setPercentage(newPercentage);
    }
  }
  collectCoin(coin) {
    const index = this.level.coins.indexOf(coin);
    if (index !== -1) {
      this.level.coins.splice(index, 1);
      this.coinCounter++;
      this.coinBar.setPercentage(this.coinCounter);

    }
  }

  newThrow() {
    setInterval(() => {
      if (
        (this.keyboard.CONTROL || this.keyboard.E) 
        && this.remainingThrows > 0
      ) {
        if (this.remainingThrows <= this.level.maxThrows) {
          let bottle = new ThrowableObject(this.character.x, this.character.y);
          this.throwableObjects.push(bottle);
          this.remainingThrows--;

          let percentage =
            (this.remainingThrows / this.level.maxThrows)  * 100;
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
