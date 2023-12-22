class CoinBar extends DrawableObject {

    COIN_BAR = [
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
      "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
    ];

    constructor() {
      super();
      this.loadImages(this.COIN_BAR);
      this.x = 25;
      this.y = 30;
      this.width = 150;
      this.height = 50;
      this.setPercentage(0);
    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.COIN_BAR[this.resolveImageIndex()];
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
  