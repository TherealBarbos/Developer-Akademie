class CollectableObject extends DrawableObject {

  constructor(x, y, imagePath) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
  }


}

