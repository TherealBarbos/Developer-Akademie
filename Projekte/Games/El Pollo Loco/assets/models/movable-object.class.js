class MovableObject {
  x = 120;
  y = 280;
  height = 150;
  width = 100;
  img;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;

  
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 155;
  }


  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  /**
   *
   * @param {Array} array - ['img/1.png', 'img/2.png', 'img/3.png']
   */
  loadImages(array) {
    this.img = [];
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    if (
      this.img instanceof HTMLImageElement ||
      this.img instanceof SVGImageElement
    ) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "purple";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
  // Bessere Formel zur Kollisionsberechnung (Genauer)
isColliding (mo) {
  return  (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) && 
          (this.y + this.offsetY + this.height) >= mo.y &&
          (this.y + this.offsetY) <= (mo.y + mo.height) && 
          mo.onCollisionCourse; 
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


