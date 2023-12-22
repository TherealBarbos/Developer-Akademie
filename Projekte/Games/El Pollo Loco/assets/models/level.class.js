class Level {
  enemies; 
  clouds;
  coins;
  bottles;
  backgroundObjects;
  levelEndX;
  maxThrows;

  constructor(enemies, clouds, coins, bottles, backgroundObjects, levelEndX) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottles;
    this.backgroundObjects = backgroundObjects;
    this.levelEndX = levelEndX;
  }


}
