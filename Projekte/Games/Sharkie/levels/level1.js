let level1; 

async function initLevel() {

level1 = new level(
        createPufferFish(),
        createJellyFish(),
        createEndboss(),
        createCoins(),
        createPoison(),
        createBackground(),
)




/**
 * Creates Puffer Fishes
 * 
 */
function createPufferFish(){
        return [
                new FishPuffer(),
                new FishPuffer(),
                new FishPuffer(),
                new FishPuffer(),
                new FishPuffer(),
                new FishPuffer(),]
};

/**
 * Creates Jelly Fishes
 * 
 */
function createJellyFish(){
        return [
                new jellyFish(),
                new jellyFish(),
                new jellyFish(),
                new jellyFish(),
                new jellyFish(),
                new jellyFish(),
                new jellyFish(),]
};

/**
 * Creates a new endboss
 * 
 */
function createEndboss(){
        return [
                new endboss()]
};

/**
 * Create Coins
 * 
 */
function createCoins(){
        return [
                new coins(),
                new coins(),
                new coins(),
                new coins(),
                new coins(),
                new coins(),
                new coins(),
                new coins(),]
};

/**
 * Create Poison
 * 
 */
function createPoison(){
        return [
                new poison(),
                new poison(),
                new poison(),
                new poison(),
                new poison(),
                new poison(),
                new poison(),
                new poison(),
                new poison(),]
};

/**
 * Creates Background
 * 
 * 
 */
function createBackground(){
        return [
                new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -719, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -719, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -719, 0),
                new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -719, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -719, 0),
            
                new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),
            
                new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719, 0),
                new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719, 0),
            
                new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*2, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*2, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*2, 0),
                new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719*2, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719*2, 0),
            
                new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*3, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*3, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*3, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719*3, 0),
            
                new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*4, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*4, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*4, 0),
                new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719*4, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719*4, 0),
        
                new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*5, 0),
                new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*5, 0),
                new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*5, 0),
                new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719*5, 0),
                new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719*5, 0),
                ]
}

};