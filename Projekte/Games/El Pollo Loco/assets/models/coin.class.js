class Coin extends CollectableObject {
  y = 350;
  height = 90;
  width = 75;

  COIN_AIR = [
    "assets/img/8_coin/coin_1.png",
    "assets/img/8_coin/coin_2.png"
  ];

  constructor() {
    super();

    // Das erste Bild wird geladen
    this.currentImageIndex = 0;
    this.loadImage(this.COIN_AIR[this.currentImageIndex]);

    this.x = 300 + Math.random() * 1850;
    this.y = Math.max(175, Math.min(300, 175 + Math.random() * 125));

    this.startCoinAnimation();
  }

  startCoinAnimation() {
    this.animationInterval = setInterval(() => {
      // Die Animation wechselt zwischen den beiden festen Bildern
      this.currentImageIndex = 1 - this.currentImageIndex;
      const nextImage = this.COIN_AIR[this.currentImageIndex];

      this.loadImage(nextImage);
    }, 250);
  }

  stopCoinAnimation() {
    clearInterval(this.animationInterval);
  }
}
