class healthBar extends drawableObjects {

    HEALTH_IMAGES = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.HEALTH_IMAGES);
        this.x = 5;
        this.y = -5;
        this.height = 50;
        this.width = 140;
        this.setPercantage(100);
    };

/**
 * Function that sets the percentage of the health bar. It sets the image of the health bar depending on the percentage.
 * 
 * @param {number} - This is the percentage of the health bar. The number is the amount of energy the player has left.
 */
setPercantage(percent){
    this.percentage = percent;
    let path = this.HEALTH_IMAGES[this.setPercentIndex()];
    this.img = this.imageCache[path];
};

/**
 * Checks the percentage of the health bar and returns the index of the image that should be displayed.
 * 
 */
setPercentIndex(){
    if (this.percentage == 100) {
        return 5;
    }
    else if (this.percentage >= 80) {
        return 4;
    }
    else if (this.percentage >= 60){
        return 3;
    }
    else if (this.percentage >= 40){
        return 2;
    }
    else if (this.percentage >= 1){
        return 1;
    }
    else {
        return 0;
    }
};

}