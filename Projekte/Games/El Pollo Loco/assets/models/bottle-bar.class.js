class BottleBar extends DrawableObject {
  
    BOTTLE_BAR = [
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
      "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
    ];
  
    constructor() {
      super();
      this.loadImages(this.BOTTLE_BAR);
      this.x = 25;
      this.y = -5;
      this.width = 150;
      this.height = 50;
      this.setPercentage();
    }
  
    setPercentage(persentage) {
      this.percentage = persentage;
      let path = this.BOTTLE_BAR[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    resolveImageIndex() {
      if (this.percentage == 100) {
        return 5;
      } else if (this.percentage >= 80) {
        return 4;
      } else if (this.percentage >= 60) {
        return 3;
      } else if (this.percentage >= 40) {
        return 2;
      } else if (this.percentage >= 20) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  