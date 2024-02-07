class coins extends movableObject {

    height = 40;
    width = 40;

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 40;
    FrameHeight = 40;

    IMAGES_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];


    constructor() {
        super().loadImg('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COINS);
        this.animate();

        this.x = 300 + Math.random() * 2500;
        this.y = 0 + Math.random() * 350;
    }

/**
* Function that animates the coins. It changes the image of the coin every 200 milliseconds.
* 
*/
animate() {
    setInterval(() =>{ 
        this.playAnimation(this.IMAGES_COINS);
    }, 200)
};

}