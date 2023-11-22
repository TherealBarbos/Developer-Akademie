class Character extends MoveableObject {
  height = 280;
  y = 155;
  speed = 2.5;

  PEPE_STAND = [
    "assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];
  PEPE_SLEEP = [
    "assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];
  PEPE_WALK = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];
  PEPE_JUMP = [
    "assets/img/2_character_pepe/3_jump/J-31.png",
    "assets/img/2_character_pepe/3_jump/J-32.png",
    "assets/img/2_character_pepe/3_jump/J-33.png",
    "assets/img/2_character_pepe/3_jump/J-34.png",
    "assets/img/2_character_pepe/3_jump/J-35.png",
    "assets/img/2_character_pepe/3_jump/J-36.png",
    "assets/img/2_character_pepe/3_jump/J-37.png",
    "assets/img/2_character_pepe/3_jump/J-38.png",
    "assets/img/2_character_pepe/3_jump/J-39.png",
  ];
  PEPE_HURT = [
    "assets/img/2_character_pepe/4_hurt/H-41.png",
    "assets/img/2_character_pepe/4_hurt/H-42.png",
    "assets/img/2_character_pepe/4_hurt/H-43.png",
  ];
  PEPE_DEAD = [
    "assets/img/2_character_pepe/5_dead/D-51.png",
    "assets/img/2_character_pepe/5_dead/D-52.png",
    "assets/img/2_character_pepe/5_dead/D-53.png",
    "assets/img/2_character_pepe/5_dead/D-54.png",
    "assets/img/2_character_pepe/5_dead/D-55.png",
    "assets/img/2_character_pepe/5_dead/D-56.png",
    "assets/img/2_character_pepe/5_dead/D-57.png",
  ];

  world;
  walking_sound = new Audio("assets/sounds/pepe_walk.mp3");

  constructor() {
    super().loadImage(this.PEPE_STAND[0]);
    this.loadImages(this.PEPE_STAND);
    this.loadImages(this.PEPE_WALK);
    this.loadImages(this.PEPE_JUMP);
    this.loadImages(this.PEPE_HURT);
    this.loadImages(this.PEPE_DEAD);
    this.applyGravity();
    this.pepe_stand();
    this.pepe_walk();
    this.pepe_jump();
    this.pepe_hurt();
    this.pepe_dead();

  }

    pepe_stand() {
      setInterval(() => {}, 1000 / 60);

      setInterval(() => {
        this.playAnimation(this.PEPE_STAND);
      }, 120);
    }

    pepe_walk() {
      setInterval(() => {
        this.walking_sound.pause();
        if ((this.world.keyboard.RIGHT || this.world.keyboard.D )&& this.x < this.world.level.levelEndX) {
          this.moveRight();
          this.otherDirection = false;
          this.walking_sound.play();
        }
        if ((this.world.keyboard.LEFT || this.world.keyboard.A) && this.x > 0) {
          this.moveLeft();
          this.otherDirection = true;
          this.walking_sound.play();
        }

        this.world.camera_x = -this.x + 100;
      }, 1000 / 60);

      setInterval(() => {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT  || this.world.keyboard.D  || this.world.keyboard.A ) {
          this.playAnimation(this.PEPE_WALK);
        }
      }, 120);
    }

    pepe_jump() {
      setInterval(() => {
        if ((this.world.keyboard.UP || this.world.keyboard.SPACE) && !this.isAboveGround()) {
          this.jump();
        }
      }, 1000 / 60);

      setInterval(() => {
        if ((this.world.keyboard.UP || this.world.keyboard.SPACE) && this.isAboveGround()) {
          this.playAnimation(this.PEPE_JUMP);
        }
      }, 120);
    }

    pepe_hurt() {
      setInterval(() => {
        if (this.isHurt()) {
          this.playAnimation(this.PEPE_HURT);
        }
      }, 120);
    }

    pepe_dead (){
      setInterval(() => {
        if (this.isDead()) {
          this.playAnimation(this.PEPE_DEAD);
        }
      }, 120);
    }


}
