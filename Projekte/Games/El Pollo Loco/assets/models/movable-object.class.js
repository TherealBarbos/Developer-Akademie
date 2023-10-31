class MovableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};

    // loadImage
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
        
    }

    /**
     * 
     * @param {Array} arr - ['img/1.png', 'img/2.png', 'img/3.png']
     */
    loadImages(arr){
        this.img = [];
        arr.forEach((path)=>{
            let img = new Image();
            img.src = path;
            this.imageCach[path] = path;
        });
    }

    moveRight(){
        console.log('moving right')
    }
    
    moveLeft(){
        console.log('moving left')
    }

}