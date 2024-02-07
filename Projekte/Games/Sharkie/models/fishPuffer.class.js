class FishPuffer extends movableObject {
    height = 60;
    width = 60;

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 50;
    FrameHeight = 40;

    isHit = false;
    e = 0;

    hit_sound = new Audio('audio/PufferHit.mp3');

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        
    ];

    IMAGES_PUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    IMAGES_PUFFERDEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png',
    ];

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_PUFFED);
        this.loadImages(this.IMAGES_PUFFERDEAD);

        this.animateMoveAndHit();
        this.pufferTransformation();

        this.x = 300 + Math.random() * 4000;
        this.y = 0 + Math.random() * 350;
        this.speed = 1 + Math.random() * 0.25; 
    }

/**
 * Animation of the puffer fish, it moves from right to left and when it is hit, it dies and flys away.
 * 
 */
animateMoveAndHit() {
setInterval(() => {
    if(this.isHit == false){
    this.moveLeft();
    this.otherDirection = false;
    this.hit_sound.pause();
    }

    if(this.isHit == true){
        this.playAnimation(this.IMAGES_PUFFERDEAD);
        this.y -= 9;
        this.x += 5;
    }

}, 1000/60);
};

/**
 * Animation of the puffer fish, it changes from normal to puffed and back to normal.
 * 
 */
pufferTransformation(){
    setInterval(() => {
        if(this.e > 16 && this.e < 18){
            this.pufferFishTransition();
        }

        else if(this.e > 18 && this.e < 45){
            this.pufferFishPuffed();
        } 

        else if(this.e > 46){
            this.e = 0;
        }

        else {
            this.pufferFishNormal();
        }

    this.e++
    }, 280);
};

/**
 * Animation of the puffer fish, between normal and puffed.
 * 
 */
pufferFishTransition() {
    this.playAnimation(this.IMAGES_TRANSITION);
    this.FrameHeight = 40;
};

/**
 * Animation of the puffer fish, when it is puffed.
 * 
 */
pufferFishPuffed(){
    this.playAnimation(this.IMAGES_PUFFED);
    this.FrameHeight = 54;
};

/**
 * Animation of the puffer fish, when it is normal.
 * 
 */
pufferFishNormal(){
    this.playAnimation(this.IMAGES_SWIM);
    this.FrameHeight = 40;
};

/**
 * If the puffer fish is hit, it will die and if the sound is not muted, the hit sound will be played.
 * 
 */
hitAnEnemy() {
    this.energy -= 100;
    this.isHit = true;
    if(Muted == false){
    this.hit_sound.play();
    }
};

}