class Chicken extends MoveableObject {
  y = 355;
  height = 80;
  width = 100;
  CHICKEN_WALKING = [
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  CHICKEN_DEAD = [
    "assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ]

  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.CHICKEN_WALKING);

    this.x = 300 + Math.random() * 1850;
    this.speed = 0.15 + Math.random() * 0.25;

    this.walk();
    this.die();
  }


  walk() {
    setInterval(() => {
    this.moveLeft();
    }, 1000 / 60 );

    setInterval(() => {
      this.playAnimation(this.CHICKEN_WALKING);
    }, 120);
  }

  die() {
    this.loadImages(this.CHICKEN_DEAD);
    this.playAnimation(this.CHICKEN_DEAD);

  }
}
