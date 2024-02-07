class endscreenLose extends drawableObjects {

    width = 0;
    height = 0;
    x = 0;
    y = 100;

    constructor() {
        super().loadImg('img/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.showEndscreenLose();
    }   

/**
 * If the sharkie is dead, the endscreen Game Over will be shown, also the button to try again.
 * 
 */
showEndscreenLose() {
    setStoppableInterval(() => {
        if(world.char.sharkieIsDead == true){
            this.height = 180;
            this.width = 720;
            showTryAgainButton();
            hideMobileControlls();
        }   
    }, 180);

};

}