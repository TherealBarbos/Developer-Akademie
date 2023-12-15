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
  remainingThrows;
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
          if (this.character.isJumping && this.character.y < enemy.y) {
            // Charakter springt auf den Feind, töte den Feind
            this.killEnemy(enemy);
          } else {
            // Charakter wurde getroffen
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);

            if (this.character.energy <= 0) {
              // Der Charakter hat kein Leben mehr, rufe die Game-Over-Funktion auf
              this.gameOver();
            }
          }
        }
      });
      this.collectableObjects.forEach((collectableObject) => {
        if (this.character.isintouch(collectableObject)) {
          // Das sammelbare Objekt wurde berührt, führe die Sammel-Logik aus
          collectableObject.onCollect(this);
        }
      });
    }, 500);
  }

  killEnemy(enemy) {
    // Entferne den Feind aus dem Array
    const index = this.level.enemies.indexOf(enemy);
    if (index !== -1) {
      this.level.enemies.splice(index, 1);
      console.log("Gegner getötet!");
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
  

          let percentage = (this.remainingThrows / this.level.maxThrows*2) * 100;
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
