class Endboss extends MoveableObject {

    height = 500;
    width = 500;
    y = -40;
    isalert = false;

    BOSS_WALK = [
        "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
        "assets/img/4_enemie_boss_chicken/1_walk/G1.png",
    ];
    BOSS_ALERT = [
        "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
        "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    BOSS_ATTACK =[
      "assets/img/4_enemie_boss_chicken/3_attack/G13.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G14.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G15.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G16.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G17.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G18.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G19.png",
      "assets/img/4_enemie_boss_chicken/3_attack/G20.png",

    ];
    BOSS_HURT =[
      "assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
      "assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
      "assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];
    BOSS_DEAD =[
      "assets/img/4_enemie_boss_chicken/5_dead/G24.png",
      "assets/img/4_enemie_boss_chicken/5_dead/G25.png",
      "assets/img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    constructor() {
        super().loadImage(this.BOSS_ALERT[0]);
        this.loadImages(this.BOSS_WALK);
        this.loadImages(this.BOSS_ALERT);
        this.loadImages(this.BOSS_ATTACK);
        this.loadImages(this.BOSS_HURT);
        this.loadImages(this.BOSS_DEAD);
        this.x = 2250;

        this.boss_alert();
        this.boss_walk();
        this.boss_hurt();
        this.boss_died();
    }

    boss_walk() {
      setInterval(() => {
      this.moveLeft();
      }, 1000 / 60 );
  
      setInterval(() => {
        this.playAnimation(this.BOSS_WALK);
      }, 120);
    }

  boss_alert() {
    let i = 0
    setInterval(() => {

      if (i < 10 ) {
      this.playAnimation(this.BOSS_ALERT);
      } else{
        this.boss_walk
      }
      i++;
      if(world.character.x > 1950 && !this.isalert){
        i = 0;
        this.isalert = true;
      }

    }, 150);

    setInterval(() => {
      this.playAnimation(this.BOSS_ALERT);
    }, 200);
  }

  
  boss_hurt() {
    setInterval(() => {
      if (this.bossisHurt()) {
        this.playAnimation(this.BOSS_HURT);
      }
    }, 120);
  }

  
  boss_died() {
    setInterval(() => {
      if (this.bosskill()) {
        this.playAnimation(this.BOSS_DEAD);
      }
    }, 120);
  }

}