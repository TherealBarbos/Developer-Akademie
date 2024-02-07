class drawableObjects {
    x = 0;
    y = 0;
    height = 250;
    width = 273;
    img;
    imageCache = {};
    currentImg = 0;



/**
 * loading a single image
 * 
 * @param {string} path - This is the source to the image that will be loaded.
 */
loadImg(path){
    this.img = new Image();
    this.img.src = path;
}

/**
 * Loading multiple images
 * 
 * @param {array} arr - This is an array of strings. Each string is a source to an image that will be loaded.
 */
loadImages(arr) {
    arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
    });
}

/**
 * Function that draws the image on the canvas.
 * 
 * @param {context} ctx - This is the context of the canvas.
 */
draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

/**
 * Function that draws a frame around the images on the canvas.
 * 
 * @param {contex} ctx - This is the context of the canvas.
 */
drawFrame(ctx){
    /* if (this instanceof Character || this instanceof bubble || this instanceof poisonBubble || this instanceof FishPuffer || this instanceof endboss || this instanceof jellyFish || this instanceof coins || this instanceof poison) {
    ctx.beginPath();
    ctx.lineWidth = "0";
    ctx.strokeStyle = "red";
    ctx.rect(this.x + this.FrameX, this.y + this.FrameY,this.FrameWidth, this.FrameHeight);
    ctx.stroke();
    } */
}; 

}