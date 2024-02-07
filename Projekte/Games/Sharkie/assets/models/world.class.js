class World {

    ctx;
    canvas;
    keyboard;
    camera_x;
    hitBy;

    level = level1;
    healthbar = new healthBar;
    coinbar = new coinBar;
    poisonbar = new poisonBar;
    endscreen = new endscreen;
    endscreenDead = new endscreenLose;

    bubbles = [];
    poisonBubbles = [];

    bubbleShot = false;
    poisonShot = false;
    dead = false;
    slap = false;
    BossDead = false;

    gold = 0;
    poison = 0;
    
    

    collectCoin_sound = new Audio('audio/collect Coin.mp3');
    collectFlask_sound = new Audio('audio/grab Flask.mp3');
   

    char = new Character();

    constructor(canvas, Kboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Kboard;
        this.draw();
        this.setWorld();
        this.run();
    };

/**
 * Interval that checks all the collisions and shoots the bubbles and poison bubbles.
 * 
 */
    run(){
        setStoppableInterval(() => {
        this.checkCollisionsPuffer();
        this.checkCollisionsJelly();
        this.checkCollisionsBoss();
        this.checkCollisionsCoin();
        this.checkCollisionsPoison();
        this.checkCollisionsSlap();
        this.checkCollisionsBubble();
        this.checkBubbleHitBoss();
        this.shootBubbles();
        this.shootPoison();
    }, 200);
    };


    /**
     * Set an object to the world.
     * 
     */
    setWorld() {
        this.char.World = this;
    };

    /**
     * Function that shoots the bubbles. It creates a new bubble and pushes it to the array of bubbles.
     * 
     */
    shootBubbles() {
        if (this.bubbleShot == true){
            let blub = new bubble(this.char.x + 200, this.char.y +150);
            this.bubbles.push(blub);
            this.bubbleShot = false;
        }
    }; 

    /**
     * Function that shoots the poison bubbles. It creates a new poison bubble and pushes it to the array of poison bubbles.
     * 
     */
    shootPoison() {
        if (this.poisonShot == true){
            let blub = new poisonBubble(this.char.x + 200, this.char.y +150);
            this.poisonBubbles.push(blub);
            this.poisonShot = false;
        }
    }; 

    /**
     * Checks if the character is colliding with an enemy. If it is, the character gets hit and the healthbar is set to the energy of the character. The enemy that hit the character is set to the variable hitBy. In this case it is the Puffer Fish.
     * 
     */
    checkCollisionsPuffer() {
            this.level.puffer.forEach((enemy) =>{
              if( this.char.isColliding(enemy) && !this.slap && enemy.isHit == false){
               this.char.hit();
               this.healthbar.setPercantage(this.char.energy);
               this.hitBy = enemy;
              };
            });
    };

    /**
     * Checks if the character is colliding with an enemy. If it is, the character gets hit and the healthbar is set to the energy of the character. The enemy that hit the character is set to the variable hitBy. In this case it is the Jellyfish.
     * 
     */
    checkCollisionsJelly() {
        this.level.jelly.forEach((enemy) =>{
            if( this.char.isColliding(enemy) && !this.slap && enemy.isHit == false){
             this.char.hit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
            };
          });
    };

    /**
     * Checks if the character is colliding with an enemy. If it is, the character gets hit and the healthbar is set to the energy of the character. The enemy that hit the character is set to the variable hitBy. In this case it is the Boss.
     * 
     */
    checkCollisionsBoss() {
        this.level.boss.forEach((enemy) =>{
            if( this.char.isCollidingBoss(enemy) && !this.slap){
             this.char.bossHit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
            };
          });
    };

    /**
     * Checks if the Fin Slap is colliding with an enemy. If it is, this enemy gets the hit. 
     * 
     */
    checkCollisionsSlap() {
        this.level.puffer.forEach((puffer) =>{
          if( this.char.isColliding(puffer) && this.slap ==true){
           puffer.hitAnEnemy();
          };
        });
};

    /**
     * Checks if the character is colliding with a coin. If it is, the coin is collected and the coinbar is set to the amount of coins collected.The Coin disappears.
     * 
     */
    checkCollisionsCoin() {           
        this.level.coin.forEach((gold) =>{
        if( this.char.isColliding(gold)) {
            if(Muted == false){
            this.collectCoin_sound.play();
            }
            this.gold ++;
            gold.y = +800;
            this.coinbar.setPercantage(this.gold)
        };
      });
};

/**
 * Checks if the character is colliding with a poison. If it is, the poison is collected and the poisonbar is set to the amount of poison collected.The poison disappears.
 * 
 */
checkCollisionsPoison() {           
    this.level.poison.forEach((flask) =>{
    if( this.char.isColliding(flask)) {
        if(Muted == false){
        this.collectFlask_sound.play();
        }
        this.poison ++;
        flask.y = +800;
        this.poisonbar.setPercantage(this.poison)
    };
  });
};

/**
 * Checks if a bubble is colliding with an enemy. If the enemy is a Jellyfish and this Jellyfish is not hit yet, the Jellyfish gets hit and the bubble disappears.
 * 
 */
checkCollisionsBubble() {
    this.level.jelly.forEach((jelly) =>{
        this.bubbles.forEach((bubble) =>{
            if( bubble.isColliding(jelly) && jelly.isHit == false){
                jelly.hitAnEnemy();
                bubble.y = -800;
            };
        });
    });
};

/**
 * Checks if a poison bubble is colliding with an enemy. If the enemy is the Boss, he gets a hit and the poison bubble disappears.
 * 
 */
checkBubbleHitBoss() {
    this.level.boss.forEach((enemy) =>{
        this.poisonBubbles.forEach((bubble) =>{
            if( bubble.isCollidingBoss(enemy) && this.poison >= 0){
                enemy.bossHit ++;
                bubble.y = -800;
                enemy.hitAnEnemy();
            }
        });
    });
};


/**
 * Checks if the Object is in an otherDirection. If it is, the image is flipped. Draws the object and the frame of the object.
 * 
 * @param {value} - the object that will be added to the world.
 */
    addToWorld(object) {
        if(object.otherDirection){
            this.flipImage(object);
        };

        object.draw(this.ctx);

        if(object.otherDirection){
            this.flipImageBack(object);
        };

        object.drawFrame(this.ctx);

    };

/**
 * Flips the image of the object.
 * 
 * @param {value} - the object that will be added to the world.
 */
    flipImage(object){
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x *-1;
    };

    /**
     * Flips the image of the object back.
     * 
     * @param {value} - the object that will be added to the world.
     */
    flipImageBack(object) {
        object.x = object.x *-1;
        this.ctx.restore();
    };

    /**
     * Adds an Array of objects to the world.
     * 
     * @param {Array} - objects that will be added to the world.
     */
    addObjectsToWorld(objects) {
        objects.forEach(o => {
            this.addToWorld(o);
        })
    };

    /**
     * Draw everything on the canvas.
     * 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToWorld(this.level.BackgroundObjects);

        this.addObjectsToWorld(this.bubbles);
        this.addObjectsToWorld(this.poisonBubbles);
        this.addObjectsToWorld(this.level.puffer);
        this.addObjectsToWorld(this.level.jelly);
        this.addObjectsToWorld(this.level.boss);
        this.addObjectsToWorld(this.level.coin);
        this.addObjectsToWorld(this.level.poison);
        this.addToWorld(this.char);

        this.ctx.translate(-this.camera_x, 0);
        this.addToWorld(this.healthbar);
        this.addToWorld(this.coinbar);
        this.addToWorld(this.poisonbar);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        this.addToWorld(this.endscreen);
        this.addToWorld(this.endscreenDead);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        }); 
    };
};
