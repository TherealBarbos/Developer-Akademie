class Bottle extends CollectableObject {

  height = 90;
  width = 75;

  constructor() {
    super().loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");

    this.x = 300 + Math.random() * 1850;
    this.y = Math.max(175, Math.min(300, 175 + Math.random() * 125));

    this.float();
  }
  onCollect(world) {
    // Logik für das Sammeln einer Flasche
    // Zum Beispiel: Erhöhe den Flaschenzähler, aktualisiere die Anzeige usw.
    world.remainingThrows += 2; // Hier musst du die Logik anpassen1
    console.log(`Verbleibende Würfe: ${world.remainingThrows}`);

    // Aktualisiere die Flaschenladungsanzeige
    world.bottleBar.setPercentage((world.remainingThrows / world.maxThrows) * 100);

    // Entferne die Flasche
    const index = world.collectableObjects.indexOf(this);
    if (index !== -1) {
      world.collectableObjects.splice(index, 1);
    }
  }

}
