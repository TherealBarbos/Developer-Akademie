class endscreen extends drawableObjects {

    width = 0;
    height = 0;

    constructor() {
        super().loadImg('img/6.Botones/Tittles/You win/Mesa de trabajo 1.png');
        this.showEndscreen();
    }   

/**
 * If the Boss is dead, the endscreen You Win will be shown, also the button to try again.
 * 
 */
showEndscreen() {
    setStoppableInterval(() => {
        if(World.BossDead == true){
            this.height = 480;
            this.width = 720;
            showTryAgainButton();
            hideMobileControlls();
            World.BossDead = false;
        }   
    }, 180);

};

}
