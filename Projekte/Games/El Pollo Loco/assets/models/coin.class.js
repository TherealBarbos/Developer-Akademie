class Coin extends CollectableObject {

  height = 100;
  width = 100;

  constructor() {
    super().loadImage("assets/img/8_coin/coin_1.png");

    this.x = 300 + Math.random() * 1850;
    this.y = Math.max(175, Math.min(300, 175 + Math.random() * 125));


  }
}