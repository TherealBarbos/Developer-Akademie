// Mobile controlls
document.addEventListener('DOMContentLoaded', (event) => {
    //UP
    document.getElementById('mobileUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('mobileUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    
    //DOWN
    document.getElementById('mobileDown').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    
    document.getElementById('mobileDown').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });
    
    //LEFT
    document.getElementById('mobileLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    
    document.getElementById('mobileLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    
    //RIGHT
    document.getElementById('mobileRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    
    document.getElementById('mobileRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    
    //SPACE
    document.getElementById('mobileSpace').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    
    document.getElementById('mobileSpace').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    
    //F
    document.getElementById('mobileF').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.F = true;
    });
    
    document.getElementById('mobileF').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.F = false;
    });
    
    //R
    document.getElementById('mobileR').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.R = true;
    });
    
    document.getElementById('mobileR').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.R = false;
    });
    
    //D
    document.getElementById('mobileD').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    
    document.getElementById('mobileD').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
    });