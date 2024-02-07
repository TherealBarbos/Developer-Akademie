class poison extends movableObject {
    height = 60;
    width = 60;

    FrameX = 10;
    FrameY = 15;
    FrameWidth = 40;
    FrameHeight = 45;

    IMAGES_POISON = [
        'img/4. Marcadores/Posiขn/Animada/1.png',
        'img/4. Marcadores/Posiขn/Animada/2.png',
        'img/4. Marcadores/Posiขn/Animada/3.png',
        'img/4. Marcadores/Posiขn/Animada/4.png',
        'img/4. Marcadores/Posiขn/Animada/5.png',
        'img/4. Marcadores/Posiขn/Animada/6.png',
        'img/4. Marcadores/Posiขn/Animada/7.png',
        'img/4. Marcadores/Posiขn/Animada/8.png',
    ];


    constructor() {
        super().loadImg('img/4. Marcadores/Posiขn/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);
        this.animate();

        this.x = 300 + Math.random() * 2500;
        this.y = 250 + Math.random() * 50;
    }

/**
* Function that animates the poison.
* 
*/
animate() {
    setInterval(() =>{ 
        this.playAnimation(this.IMAGES_POISON);
    }, 200)
};

}
