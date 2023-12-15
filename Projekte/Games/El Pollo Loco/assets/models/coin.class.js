class Coin extends CollectableObject {

  height = 100;
  width = 100;

  constructor() {
    super().loadImage("assets/img/8_coin/coin_1.png");

    this.x = 300 + Math.random() * 1850;
    this.y = Math.max(175, Math.min(300, 175 + Math.random() * 125));

    this.float();
  }
    // onCollect(world) {
    //   // Logik für das Sammeln einer Münze
    //   // Zum Beispiel: Erhöhe den Münzzähler, aktualisiere die Anzeige usw.
    //   world.coinCounter++; // Hier musst du die Logik anpassen
    //   console.log(`Münzen gesammelt: ${world.coinCounter}`);
  
    //   // Entferne die Münze
    //   const index = world.collectibleObjects.indexOf(this);
    //   if (index !== -1) {
    //     world.collectibleObjects.splice(index, 1);
    //   }
    // }
  }