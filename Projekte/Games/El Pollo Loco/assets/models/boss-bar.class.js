class BossBar extends DrawableObject {

    BOSS_BAR = [
      "assets/img/7_statusbars/2_statusbar_endboss/blue.png",
      "assets/img/7_statusbars/2_statusbar_endboss/orange.png",
      "assets/img/7_statusbars/2_statusbar_endboss/green.png",
    ];
  
  
    constructor() {
      super();
      this.loadImages(this.BOSS_BAR);
      this.x = 550;
      this.y = -5;
      this.width = 150;
      this.height = 50;
      this.setPercentage(100);
    }
  
    setPercentage(persentage) {
      this.percentage = persentage;
      let path = this.BOSS_BAR[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    resolveImageIndex() {
      if (this.percentage == 100) {
        return 2;
      } else if (this.percentage >= 60) {
        return 1;
      } else if (this.percentage >= 20) {
        return 0;
      } else {
        return 0;
      }
    }
  }
  