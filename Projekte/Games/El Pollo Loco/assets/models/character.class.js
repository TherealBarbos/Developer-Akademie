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
  currentImage = 0;

  constructor() {
    super().loadImage("assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.PEPE_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.PEPE_WALKING.length;
      let path = this.PEPE_WALKING[this.currentImage];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000);
  }

  jump() {}
}
