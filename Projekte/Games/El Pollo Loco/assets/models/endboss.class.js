class Endboss extends MovableObject {

    height = 500;
    width = 500;
    y = -40;

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
    ]

    constructor() {
        super().loadImage(this.BOSS_ALERT[0]);
        this.loadImages(this.BOSS_ALERT);
        this.loadImages(this.BOSS_WALK);
        this.x = 950;
        this.alert();
    }

    
  alert() {
    setInterval(() => {}, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.BOSS_ALERT);
    }, 200);
  }

}