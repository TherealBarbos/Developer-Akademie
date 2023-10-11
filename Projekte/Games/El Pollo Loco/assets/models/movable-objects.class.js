class MovableObjects{
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    img;

    // loadImage
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
        
    }

    moveRight(){
        console.log('moving right')
    }
    
    moveleft(){
        console.log('moving left')
    }

}