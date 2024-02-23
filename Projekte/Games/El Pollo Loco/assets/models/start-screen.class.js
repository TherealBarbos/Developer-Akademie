class StartScreen extends DrawableObject {

    SCREEN = "assets/img/9_intro_outro_screens/start/startscreen_1.png";
    

    constructor() {
        super().loadImage(this.SCREEN);
        this.x = 0;
        this.y = 0;
        this.width = 800;
        this.height = 600;
    }


}