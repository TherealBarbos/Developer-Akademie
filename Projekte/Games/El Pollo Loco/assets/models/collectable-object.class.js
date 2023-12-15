class CollectableObject extends DrawableObject {

  constructor(x, y, imagePath) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
  }

  // Neue Eigenschaften für den Floating-Effekt
  floatingOffset = 0;
  floatingDirection = 1; // 1 für Aufwärtsbewegung, -1 für Abwärtsbewegung
  floatingSpeed = 0.5; // Geschwindigkeit des Floating-Effekts

  // Floating-Effekt anwenden
  applyFloatingEffect() {
    // Führe den Floating-Effekt durch
    this.floatingOffset += this.floatingDirection * this.floatingSpeed;

    // Kehre die Richtung um, wenn das Limit erreicht ist
    if (Math.abs(this.floatingOffset) > 5) {
      this.floatingDirection *= -1;
    }
  }

  float() {
    setInterval(() => {
      this.applyFloatingEffect(); // Hier wird der Floating-Effekt aufgerufen
    }, 120);
  }

}

