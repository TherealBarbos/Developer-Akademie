class poisonBar extends drawableObjects {

    IMAGES_POISONBAR = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_POISONBAR);
        this.x = 5;
        this.y = 45;
        this.height = 50;
        this.width = 140;
        this.setPercantage(0);
    };

/**
*  
* Function that sets the percentage of the poison bar. It sets the image of the poison bar depending on the percentage.
* 
* @param {number} - percent is the percentage of the poison bar. The number is the amount of poison the player has collected.
*/
setPercantage(percent){
    this.percentage = percent;
    let path = this.IMAGES_POISONBAR[this.setPercentIndex()];
    this.img = this.imageCache[path];
};

/**
* Checks how many poison the player has collected and returns the index of the image that will be set to the poison bar.
* 
* @returns {number} - This is the index of the image that will be set to the poison bar. It depends on the percentage.
*/
setPercentIndex(){
    if (this.percentage >= 8) {
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