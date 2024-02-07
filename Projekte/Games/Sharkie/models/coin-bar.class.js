class coinBar extends drawableObjects {

    IMAGES_COINBAR = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 150;
        this.y = -5;
        this.height = 50;
        this.width = 140;
        this.setPercantage(0);
    };

/**
 * Function that sets the percentage of the coin bar. It sets the image of the coin bar depending on the percentage.
 * 
 * @param {number} - This is the percentage of the coin bar. The number is the amount of coins the player has collected.
 */
setPercantage(percent){
    this.percentage = percent;
    let path = this.IMAGES_COINBAR[this.setPercentIndex()];
    this.img = this.imageCache[path];
};

/**
 * Checks how many coins the player has collected and returns the index of the image that will be set to the coin bar.
 * 
 * @returns {number} - This is the index of the image that will be set to the coin bar. It depends on the percentage.
 */
setPercentIndex(){
    if (this.percentage == 8) {
        return 5;
    }
    else if (this.percentage >= 6) {
        return 4;
    }
    else if (this.percentage >= 4){
        return 3;
    }
    else if (this.percentage >= 2){
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