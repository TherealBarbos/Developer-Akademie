class ThrowableObject extends MoveableObject {
    BOTTLE_ROTATION = [
      "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
      "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
      "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
      "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    BOTTLE_ROTATION_SPLASH = [
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
      "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];
  
    rotationIndex = 0;
  
    constructor(x, y) {
      super().loadImage(this.BOTTLE_ROTATION[0]);
      this.x = x + 25;
      this.y = y + 155;
      this.height = 90;
      this.width = 75;
      this.throw();
      this.splash()
    }
  
    throw() {
      this.speedY = 30;
      this.applyGravityBottle();
  
      setInterval(() => {
        this.rotateBottle();
        this.x += 10;
      }, 30);
    }
  
    rotateBottle() {
      this.rotationIndex = (this.rotationIndex + 1) % this.BOTTLE_ROTATION.length;
      this.loadImage(this.BOTTLE_ROTATION[this.rotationIndex]);
    }

    splash() {
      this.splashIndex = (this.rotationIndex + 1) % this.BOTTLE_ROTATION_SPLASH.length;
      this.loadImage(this.BOTTLE_ROTATION_SPLASH[this.splashIndex]);
    }

  }
  