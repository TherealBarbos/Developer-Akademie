class Chicken extends MovableObject {
  y = 365;
  height = 60;
  width = 80;
  CHICKEN_WALKING = [
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.CHICKEN_WALKING);

    this.x = 300 + Math.random() * 850;
    this.speed = 0.15 + Math.random() * 0.25;

    this.walk();
  }


  walk() {
    setInterval(() => {
    this.moveLeft();
    }, 1000 / 60 );

    setInterval(() => {
      this.playAnimation(this.CHICKEN_WALKING);
    }, 200);
  }
}