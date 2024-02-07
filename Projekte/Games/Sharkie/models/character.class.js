class Character extends movableObject {

    FrameX = 53;
    FrameY = 120;
    FrameWidth = 150;
    FrameHeight = 65;

    bubbleBuild = false;
    poisonBuild = false;
    slapping = false;
    sharkieIsDead = false;
    
    World;

    swim_sound = new Audio('audio/Water Splash.mp3');
    world_sound = new Audio('audio/Gamesound.mp3');
    bubble_sound = new Audio('audio/Bubble.mp3');
    slap_sound = new Audio('audio/Finslap.mp3');
    electric_sound = new Audio('audio/Electric.mp3');
    hitByBoss_sound = new Audio('audio/hit by boss.mp3');
    poisoned_sound = new Audio('audio/hit by poison.mp3');
    buy_sound = new Audio('audio/Buy Flask.mp3');
    SharkieDie_sound = new Audio('audio/Sharkie Die.mp3');

    y = 10;
    x = 0;
    a = 0;

    speed = 1.5;


    constructor() {
        super().loadImg('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_PUFFER);
        this.loadImages(this.IMAGES_HIT_JELLY);
        this.loadImages(this.IMAGES_HIT_BOSS);
        this.loadImages(this.IMAGES_BUILD_BUBBLE);
        this.loadImages(this.IMAGES_BUILD_POISON_BUBBLE);
        this.loadImages(this.IMAGES_FIN_SLAP);

        this.LeftAndRightAnimation();
        this.UpAndDownAnimation();
        this.moveAndIdleAnimation();
        this.AttackAnimation();
        this.getHitAnimation();
        this.speed = 3;
    }

/**
 * Checks if i press the key for Right or Left and if i am not dead and at the end of the level left or right it moves the Character and play the swim sound. It also start the Gamesound
 * 
 */
LeftAndRightAnimation() {
    setStoppableInterval(() =>{
        this.swim_sound.pause();
        this.playWorldSound();

        if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x && this.World.dead == false){
            this.moveRight();
            this.playSwimSound();
        }

        if (this.World.keyboard.LEFT && this.x > -100 && this.World.dead == false){
        this.moveLeft();
            this.playSwimSound();
        }
        this.World.camera_x = -this.x;
    }, 1000 / 60);
};

/**
 * Checks if i press the key for Up or Down if i press, it moves the Character and play the swim sound. If the Character is on the end of the Top or the Bottom it only shows the Swim Animation. If my Character reached the x position 3050 it stops the Gamesound.
 * 
 */
UpAndDownAnimation() {
    setStoppableInterval(() =>{
        if (this.World.keyboard.UP && this.World.dead == false){
            this.playSwimSound();
            if(this.y === -113){this.World.camera_x = -this.x;}
            else{
            this.moveUp();
        }}

        if (this.World.keyboard.DOWN && this.World.dead == false){
            this.playSwimSound();
            if(this.y === 277){this.World.camera_x = -this.x;}
            else{
            this.moveDown();
        }}

        if(this.x > 3050){
            this.world_sound.pause();
        }
        this.World.camera_x = -this.x;
    }, 1000 / 60);
};

/**
 * Checks if i press the key for Right or Left or Up or Down if i press, it shows the Swim Animation. If no key is pressed and no attack ist in build it shows the IDLE Anmimation. If Variable a reaches 70 it shows the Long IDLE Animation. It increase the Variable a by 1 every 120ms.
 * 
 */
moveAndIdleAnimation() {
    setStoppableInterval(() => {
        if (this.World.keyboard.RIGHT && this.sharkieIsDead == false || this.World.keyboard.LEFT && this.sharkieIsDead == false || this.World.keyboard.UP && this.sharkieIsDead == false || this.World.keyboard.DOWN && this.sharkieIsDead == false) {
            this.playAnimation(this.IMAGES_SWIM);
        } 

        else if(this.a < 70 && this.bubbleBuild == false && this.poisonBuild == false && this.slapping == false && this.World.dead == false) {
            this.playAnimation(this.IMAGES_IDLE);
        } 

        else if(this.a > 70){
            this.playAnimation(this.IMAGES_IDLE_LONG);
        }
        this.a++;
    }, 120);
};

/**
 * Checks if i press the key Space or F or D or R if i press, it shows the Attack Animation. If i press Space it shoots a Bubble. If i press F it shoots a Poison Bubble. If i press D it slaps with the Fin. If i press R it buys a Poison Flask.
 * 
 */
AttackAnimation() {
    setStoppableInterval(() => {
        if (this.World.keyboard.SPACE && this.bubbleBuild == false) {
            this.shootBubble();
        }

        else if (this.World.keyboard.F && this.World.poison >= 1) {
            this.shootPoisonBubble();
        }

        else if (this.World.keyboard.D) {
            this.slapFin();
            this.FrameWidth = 200;
        }

        else if(this.World.keyboard.R && this.World.gold >= 4 && this.World.poison < 8){
            this.buyPosion();
        }
    }, 120);
};

/**
 * Checks if i am hit by a Puffer Fish or a Jelly Fish or the Endboss. If i am hit by a Puffer Fish it shows the Hit Animation. If i am hit by a Jelly Fish it shows the Hit Animation. If i am hit by the Endboss it shows the Hit Animation. If i am dead it shows the Dead Animation. If i am dead it moves the Character up.
 * 
 */
getHitAnimation() {
    setStoppableInterval(() => {
    if (this.isHurt() && this.World.hitBy instanceof FishPuffer) {
        this.hitByPufferFish();
    }

    else if (this.isHurt() && this.World.hitBy instanceof endboss) {
        this.hitByEndboss();
    }

    else if(this.isHurt() && this.World.hitBy instanceof jellyFish) {
        this.hitByJellyFish();
    }

    else if (this.isDead() && this.World.dead == false) { 
        this.sharkieDead();
    }

    else if(this.World.dead === true){
        this.y -= 25;
    }
    }, 120);
};

/**
 * If a bubble is already in building, it returns and nothing happens. If no bubble is in building it sets the Variable bubbleBuild to true and pause the Bubble Sound. It loads the Images for the Bubble Animation.
 * 
 */
blubShoot() {
    if(this.bubbleBuild == true) {
        return
    }
    this.bubbleBuild = true;
    this.bubble_sound.pause();
    this.playAnimation(this.IMAGES_BUILD_BUBBLE);
};

/**
 * Shot a bubble.It play the Bubble Sound and set the Variable a to 0.
 * 
 */
shootBubble(){
    this.blubShoot();
    if(Muted == false){
        this.bubble_sound.play();
    }
    this.a = 0;
    this.bubbleBuild = false;
    this.World.bubbleShot = true;
};

/**
 * If a poison bubble is already in building, it returns and nothing happens. If no poison bubble is in building it sets the Variable poisonBuild to true and pause the Bubble Sound. It loads the Images for the Poison Bubble Animation.
 * 
 */
poisonShoot() { 
    if(this.poisonBuild == true) {
        return
    }
    this.poisonBuild = true;
    this.bubble_sound.pause();
    this.playAnimation(this.IMAGES_BUILD_POISON_BUBBLE);
};

/**
 * Fin Slap. It play the Fin Slap Sound and set the Variable a to 0. It also set the Variable slap to true and increase the FrameWidth to 200.
 * 
 */
slapFin(){
    if(this.slapping == true) {
        return
    }
    this.World.slap = true;
    this.slapping = true;
    this.slap_sound.pause();
    this.playAnimation(this.IMAGES_FIN_SLAP);
    this.playSlapSound();
    this.a = 0;
    this.slapping = false;
    this.setSlapBack();
};

/**
 * The hit animation for the Character if it get hit by a Puffer Fish. It also set the Variable a to 0.
 * 
 */
hitByPufferFish(){
    this.poisoned_sound.pause();
    this.playAnimation(this.IMAGES_HIT_PUFFER);
    if(Muted == false){
        this.poisoned_sound.play();  
    }
    this.a = 0;
};

/**
 * The hit animation for the Character if it get hit by a Jelly Fish. It also set the Variable a to 0.
 * 
 */
hitByJellyFish() {
    this.electric_sound.pause();
    this.playAnimation(this.IMAGES_HIT_JELLY);
    if(Muted == false){
        this.electric_sound.play();
    }
    this.a = 0;
};

/**
 * The hit animation for the Character if it get hit by the Endboss. It also set the Variable a to 0.
 * 
 */
hitByEndboss() {
    this.hitByBoss_sound.pause();
    this.playAnimation(this.IMAGES_HIT_BOSS);
    if(Muted == false){
        this.hitByBoss_sound.play();
    }
    this.a = 0;
};

/**
 * Animation if Character is dead and it sets the Variable dead to true. It also pause the Gamesound and play the Dead Sound.
 * 
 */
sharkieDead() {
    this.playAnimation(this.IMAGES_DEAD);
    this.World.dead = true;
    if(Muted == false){
        this.SharkieDie_sound.play();
    }
    this.world_sound.pause();  
    this.sharkieIsDead = true;
};

/**
 * Shot of a poisonbubble. It sets the Variable poisonBuild to true. It degrease the poison by 1 and set the new percentage of the poisonbar. It also play the Bubble Sound and set the Variable a to 0.
 * 
 */
shootPoisonBubble(){
    this.World.poisonBuild = true;
    this.World.poison -= 1;
    this.World.poisonbar.setPercantage(this.World.poison)
    this.poisonShoot();
    if(Muted == false){
        this.bubble_sound.play();
    }
    this.a = 0;
    this.World.poisonShot = true;
    this.poisonBuild = false;
};

/**
 * If i have enough gold and not more than 8 poison i can buy a poison flask. It degrease the gold by 4 and increase the poison by 1 and set the new percentage of the poisonbar and the coinbar. It also play the Buy Flask Sound.
 * 
 */
buyPosion(){
    if(Muted == false){
        this.buy_sound.play();
    }
    this.World.gold -= 4;
    this.World.poison += 1;
    this.World.poisonbar.setPercantage(this.World.poison);
    this.World.coinbar.setPercantage(this.World.gold);
};

/**
 * Play the Swim Sound the Muted Variable is false.
 * 
 */
playSwimSound(){
    if(Muted == false){
        this.swim_sound.play();
    }
};

/**
 * Play the Gamesound if the Character is not dead and the Muted Variable is false.
 * 
 */
playWorldSound(){
    if(this.World.dead === false && Muted == false){
        this.world_sound.volume = 0.3;
        this.world_sound.play();
    }
};

playSlapSound(){
    if(Muted == false){
        this.slap_sound.play();
    }
};

setSlapBack(){
    setTimeout(() => {
        this.FrameWidth = 150;
        this.World.slap = false;
    }, 200);
};
}