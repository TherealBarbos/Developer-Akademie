class Level {
  enemies; 
  clouds;
  coins;
  bottles;
  backgroundObjects;
  levelEndX;

  constructor(enemies, clouds, coins, bottle, backgroundObjects, levelEndX) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottle;
    this.backgroundObjects = backgroundObjects;
    this.levelEndX = levelEndX;
  }
}
