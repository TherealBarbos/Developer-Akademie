class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


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
}