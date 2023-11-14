class ThrowableObject extends MovableObject {

    BOTTLE_ROTATION = [
        "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
      ];



    constructor(){
        super().loadImage();
        this.x = 100;
        this.y = 100;
        

    }

}