class movableObject extends drawableObjects {

    speed = 3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;


    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_IDLE_LONG = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png',
        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png',
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HIT_PUFFER = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    IMAGES_HIT_JELLY = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    IMAGES_HIT_BOSS = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    ];

    IMAGES_BUILD_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];

    IMAGES_BUILD_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];


    /**
     * Check if the movable object is colliding with another object.
     * 
     * @param {value} - is the value of the variable that is being checked.
     * 
     */
isColliding(obj) {
    return  this.x + this.FrameX < obj.x + obj.FrameWidth &&
            this.x + this.FrameX + this.FrameWidth > obj.x &&
            this.y + this.FrameY < obj.y + obj.FrameHeight &&
            this.y + this.FrameY + this.FrameHeight > obj.y;
};

isCollidingBoss(obj) {
    return  this.x + this.FrameX < obj.x + obj.FrameX + obj.FrameWidth &&
            this.x + this.FrameX + this.FrameWidth > obj.x + obj.FrameX &&
            this.y + this.FrameY < obj.y + obj.FrameY + obj.FrameHeight &&
            this.y + this.FrameY + this.FrameHeight > obj.y + obj.FrameY;
};

    /**
     * if the character is hit, the energy of the character is reduced by 5. If the energy is below 0, the energy is set to 0. The last hit is set to the current time.
     * 
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0){
            this.energy = 0;
        } 
        else {
            this.lastHit = new Date().getTime();
        }
    };

    /**
     * if the character is hit by the boss, the energy of the character is reduced by 20. If the energy is below 0, the energy is set to 0. The last hit is set to the current time.
     * 
     */
    bossHit() {
        this.energy -= 20;
        if (this.energy < 0){
            this.energy = 0;
        } 
        else {
            this.lastHit = new Date().getTime();
        }
    };

    /**
     * if someone is dead, the energy of this is set to 0.
     * 
     */
    isDead() {
        return this.energy == 0;
    };

    /**
     * if someone get hurt, its checked if the last hit was less than 1 second ago.
     * 
     */
    isHurt() {
            let timepassed = new Date().getTime() - this.lastHit;
            timepassed = timepassed / 1000;
            return timepassed < 1;
    };

    /**
     * the character is moved to the right with his speed, the otherDirection is set to false and the Variable a is set to 0.
     * 
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.a = 0;
    };

    /**
     * the character is moved to the left with his speed, the otherDirection is set to true and the Variable a is set to 0.
     * 
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.a = 0;
    };

    /**
     * the character is moved up with his speed and the Variable a is set to 0.
     * 
     */
    moveUp() {
        this.y -= this.speed;
        this.a = 0;
    };

    /**
     * the character is moved down with his speed and the Variable a is set to 0.
     * 
     */
    moveDown() {
        this.y += this.speed;
        this.a = 0;
    };

    /**
     * it plays the animation of the object. It checks if the current image is the last image of the array. If it is, the current image is set to 0. If it is not, the current image is increased by 1. The image is set to the image of the current image.
     * 
     * @param {Array} - This is the array of images that should be played.
     */
    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    };
}