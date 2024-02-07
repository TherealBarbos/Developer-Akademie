class endboss extends movableObject {

    height = 732;
    width = 780;
    y = -200;
    x = 3600;

    FrameX = 50;
    FrameY = 340;
    FrameWidth = 500;
    FrameHeight = 250;

    bossHit = 0;   
    i = 9; 
    h = 6;
    e = 7;

    World;

    isHit = false;
    isDead = false;
    firstContact = false;
    attacking = false;
    
  


    boss_music = new Audio('audio/Boss Music.mp3');
    boss_hit = new Audio('audio/BossHit.mp3');
    boss_die = new Audio('audio/Boss Die.mp3');


    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_HIT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];
    
    constructor() {
        super().loadImg(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.animateIntroAndSwim();
        this.attack();
        this.bossGetHit();
        this.bossSlam();
        this.bossIsDiyng();
    }

/**
 * Animations for the Intro and Swim of the Boss. 
 * 
 */
animateIntroAndSwim() {
    setInterval(() => {
        if(this.i < 8) {
            this.playAnimation(this.IMAGES_INTRODUCE);
        } 

        if(this.firstContact && this.i > 8 && this.isHit == false && this.attacking == false && this.bossHit < 5) {
            this.playAnimation(this.IMAGES_SWIM);
            this.playBossMusic();
        }
            
        if(world.char.x > 3050 && !this.firstContact){
            this.i = 0;
            this.firstContact = true;
            this.playBossMusic();
        }
        this.i++;
    }, 180)
};
/**
 * Animations for the Bite Attack of the Boss.
 * 
 */
attack() {
    setInterval(() => {
        if(this.firstContact && this.i > 70 && this.bossHit < 5) {
            this.x = 3400;
            this.attackAnimation();
            this.i = 8;
        }

        if(world.char.sharkieIsDead == true) {
            this.boss_music.pause();
        }
    }, 140)
};

/**
 * Animations for the Slam Attack of the Boss.
 * 
 */
bossSlam() {
    setInterval(() => {
        if(this.firstContact && this.i < 30 && this.i > 12 && this.bossHit < 5) {
            this.x -= 10;
            this.y -= 6;
        }

        else if(this.firstContact && this.i > 30 && this.i < 45 && this.bossHit < 5) {
            this.y += 45;
        }

        else if(this.firstContact && this.i > 45 && this.i < 50 && this.bossHit < 5) {
            this.x = 3900;
            this.y = -250;
        }

        else if(this.firstContact && this.i > 50 && this.i < 68 && this.bossHit < 5) {
            this.x -= 18.75;
        }
    }, 140)
};  


/**
 * Animations for the Boss when he gets hit and when he dies.
 * 
 */
bossGetHit() {
    setInterval(() => { 
        console.log(this.isHit);
        this.h++;
        this-this.boss_hit.pause();
        if(this.bossHit < 5 && this.h <= 2) {
            this.bossHitSound();
            this.playAnimation(this.IMAGES_HIT);
        }
        if(this.h > 2) {
            this.isHit = false;
        }
    }, 120)
};

/**
 * Animations for the Boss when he dies.
 * 
 */
bossIsDiyng() {
    setInterval(() => {
        this.e++;
        console.log(this.e);
        if(this.bossHit == 5) {
            this.e = 0;
            this.bossHit = 6;
        }
        if(this.e < 2) {
            World.BossDead = true;
            this.bossDieSound();
            this.playAnimation(this.IMAGES_DEAD);
            this.y = -250;
        }
    }, 120)
};

/**
 * Set the variable isHit to true when the Boss gets hit.
 * 
 */
hitAnEnemy() {
    this.isHit = true;
    this.h = 0;
};

/**
 * Loading the Images for the Attack Animation, with an delay between the Images of 100ms.
 * 
 */
attackAnimation() {
    this.attacking = true;
    this.playAnimation(this.IMAGES_ATTACK);
    this.attacking = false;
};


/**
 * Played the Boss Music if the Game is not muted.
 * 
 */
playBossMusic() {
    if(Muted == false){
        this.boss_music.play();
    }
};

/**
 * Played the Boss Die Sound if the Game is not muted.
 * 
 */
bossDieSound() {
    this.boss_music.pause();
    if(Muted == false){
        this.boss_die.play();
    }
};
/**
 * Played the Boss Hit Sound if the Game is not muted.
 * 
 */
bossHitSound() {
    if(Muted == false){
        this.boss_hit.play();
    }
};

}