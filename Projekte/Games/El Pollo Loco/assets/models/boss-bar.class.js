class BossBar extends DrawableObject {

    BOSS_BAR = [
      "assets/img/7_statusbars/2_statusbar_endboss/blue.png",
    ];
  
  
    constructor() {
      super();
      this.loadImages(this.BOSS_BAR);
      this.x = 150;
      this.y = 65;
      this.width = 150;
      this.height = 50;
    //   this.setPercentage(100);
    }
  
    // setPercentage(persentage) {
    //   this.percentage = persentage;
    //   let path = this.BOSS_BAR[this.resolveImageIndex()];
    //   this.img = this.imageCache[path];
    // }
  
    // resolveImageIndex() {
    //   if (this.percentage == 100) {
    //     return 5;
    //   } else if (this.percentage >= 80) {
    //     return 4;
    //   } else if (this.percentage >= 60) {
    //     return 3;
    //   } else if (this.percentage >= 40) {
    //     return 2;
    //   } else if (this.percentage >= 20) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // }
  }
  