class MoveableObject extends DrawableObject {
  speed = 1;
  otherDirection = false;
  speedX = 0;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  bossEnergy = 100;
  lastHit = 0;
  lastBossHit = 0;
  


  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }
  applyGravityBottle() {
    setInterval(() => {
      if (this.isAboveGroundBottle() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGroundBottle() {
      return this.y < 345;
  }
  isAboveGround() {
    return this.y < 150;
}

  isColliding(obj) {
    return (
      this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y
    );
  }



  hit() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
  endbosshit() {
    this.bossEnergy -= 20;
    if (this.bossEnergy < 0) {
      this.bossEnergy = 0;
    } else {
      this.lastBossHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1.2;
  }
  

  bossisHurt() {
    let timepassed = new Date().getTime() - this.lastbossHit;
    timepassed = timepassed / 1000;
    return timepassed < 1.2;
  }
  
  isDead() {
    return this.energy == 0;
  }

  bosskill() {
    return this.bossEnergy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }
  
  jump() {
    this.speedY = 25;
  }
}
