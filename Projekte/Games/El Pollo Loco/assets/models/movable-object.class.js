class MovableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    speed= 0.15;

    // loadImage
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
        
    }

    /**
     * 
     * @param {Array} array - ['img/1.png', 'img/2.png', 'img/3.png']
     */
    loadImages(array){
        this.img = [];
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight(){
        console.log('moving right')
    }
    
    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }

}