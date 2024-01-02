class Bottle extends CollectableObject {
  y = 350;
  height = 90;
  width = 75;

  BOTTLE_GROUND = [
    "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png"
  ];

  constructor() {
    super();

    // Das erste Bild wird geladen
    this.currentImageIndex = 0;
    this.loadImage(this.BOTTLE_GROUND[this.currentImageIndex]);

    this.x = 300 + Math.random() * 1850;
    this.startBottleAnimation();
  }

  startBottleAnimation() {
    this.animationInterval = setInterval(() => {
      this.currentImageIndex = 1 - this.currentImageIndex;
      const nextImage = this.BOTTLE_GROUND[this.currentImageIndex];

      this.loadImage(nextImage);
    }, 550);
  }

  stopBottleAnimation() {
    clearInterval(this.animationInterval);
  }
}
