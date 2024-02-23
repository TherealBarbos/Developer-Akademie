class Chicken_Small extends MoveableObject {
  y = 390;
  height = 45;
  width = 45;
  CHICKEN_SMALL_WALKING = [
    "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];
  CHICKEN_SMALL_DEAD = [
    "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png",
  ];

  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png"
    );
    this.loadImages(this.CHICKEN_SMALL_WALKING);

    this.x = 300 + Math.random() * 1850;
    this.speed = 0.15 + Math.random() * 0.5;

    this.walk();
    this.die();
  }

  walk() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.CHICKEN_SMALL_WALKING);
    }, 120);
  }

  
  die() {
    this.loadImages(this.CHICKEN_SMALL_DEAD);
    this.playAnimation(this.CHICKEN_SMALL_DEAD);

  }

}