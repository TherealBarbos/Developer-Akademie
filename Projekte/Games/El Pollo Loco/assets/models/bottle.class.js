class Bottle extends CollectableObject {
  y = 350;
  height = 90;
  width = 75;

  BOTTLE_GROUND = [
    "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png"
  ]


  constructor() {
    super();

    const randomImage = this.BOTTLE_GROUND[Math.floor(Math.random() * this.BOTTLE_GROUND.length)];

    this.loadImage(randomImage);

    this.x = 300 + Math.random() * 1850;

  }

}
