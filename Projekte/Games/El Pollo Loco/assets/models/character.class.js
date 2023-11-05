class Character extends MovableObject {
  height = 280;
  y = 155;

  PEPE_WALKING = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];
  world;

  constructor() {
    super().loadImage("assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.PEPE_WALKING);

    this.animate();
  }

  animate() {



    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        let i = this.currentImage % this.PEPE_WALKING.length;
        let path = this.PEPE_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 120);

  }

  jump() {}
}
