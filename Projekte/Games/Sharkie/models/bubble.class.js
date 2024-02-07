class bubble extends movableObject {

    height = 20;
    width = 30; 

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 30;
    FrameHeight = 20;

    distancedTravelled = 0;

    constructor(x, y) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.throw();
    }

    /**
     * throw the bubble
     * 
     */
throw() {
    setInterval(()=>{ 
        this.x += 5;
        this.distancedTravelled += 5;

        if(this.distancedTravelled >= 500){
            this.y = -800;
        }
    }, 1000 / 60);
};

}

