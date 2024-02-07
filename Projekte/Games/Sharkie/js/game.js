let canvas;
let world;
let Kboard = new keyboard();

let intervalIds = [];

let Muted = true;


function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, Kboard);
}


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        Kboard.RIGHT = false;
    }; 
    if (e.keyCode == 37) {
        Kboard.LEFT = false;
    };
    if (e.keyCode == 38) {
        Kboard.UP = false;
    };
    if (e.keyCode == 40) {
        Kboard.DOWN = false;
    };
    if (e.keyCode == 32) {
        Kboard.SPACE = false;
    };
    if (e.keyCode == 68) {
        Kboard.D = false;
    }; 
    if (e.keyCode == 70) {
        Kboard.F = false;
    };
    if (e.keyCode == 82) {
        Kboard.R = false;
    }
});

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        Kboard.RIGHT = true;
    };
    if (e.keyCode == 37) {
        Kboard.LEFT = true;
    };
    if (e.keyCode == 38) {
        Kboard.UP = true;
    };
    if (e.keyCode == 40) {
        Kboard.DOWN = true;
    };
    if (e.keyCode == 32) {
        Kboard.SPACE = true;
    };
    if (e.keyCode == 68) {
        Kboard.D = true;
    }; 
    if (e.keyCode == 70) {
        Kboard.F = true;
    };
    if (e.keyCode == 82) {
        Kboard.R = true;
    }
});

// Mobile controlls
document.addEventListener('DOMContentLoaded', (event) => {
//UP
document.getElementById('mobileUp').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.UP = true;
});
document.getElementById('mobileUp').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.UP = false;
});

//DOWN
document.getElementById('mobileDown').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.DOWN = true;
});

document.getElementById('mobileDown').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.DOWN = false;
});

//LEFT
document.getElementById('mobileLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.LEFT = true;
});

document.getElementById('mobileLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.LEFT = false;
});

//RIGHT
document.getElementById('mobileRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.RIGHT = true;
});

document.getElementById('mobileRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.RIGHT = false;
});

//SPACE
document.getElementById('mobileSpace').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.SPACE = true;
});

document.getElementById('mobileSpace').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.SPACE = false;
});

//F
document.getElementById('mobileF').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.F = true;
});

document.getElementById('mobileF').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.F = false;
});

//R
document.getElementById('mobileR').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.R = true;
});

document.getElementById('mobileR').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.R = false;
});

//D
document.getElementById('mobileD').addEventListener('touchstart', (e) => {
    e.preventDefault();
    Kboard.D = true;
});

document.getElementById('mobileD').addEventListener('touchend', (e) => {
    e.preventDefault();
    Kboard.D = false;
});
});



/**
 * Clears all intervals
 * 
 */ 
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  };

/**
 * set a interval and push the id in the intervalIds array
 * 
 * @param {function} fn - this is the function that will be executed
 * @param {number} time - this is the intervall time
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
  }; 


/**
 * close the Controll Window
 * 
 */
function closeControlls() {
    showStartButton();
    hideBackground();
    showMobileControlls();
    let controlls = document.getElementById('controlls');
    controlls.style.display = 'none';
};

/**
 *  open the Controll Window if its closed and close it if its open. It also show or hide the Background, the Start Button and the Mobile Controlls
 * 
 */
function openControlls() {
    closeInfo();
    hideStartButton();
    showBackground(); 
    let controlls = document.getElementById('controlls');
    if(controlls.style.display == 'none') {
        controlls.style.display = 'flex';
        hideMobileControlls();
    }
    else {
        controlls.style.display = 'none';
        showStartButton();
        hideBackground();
        showMobileControlls();
}
};

/**
 * close the Info Window
 * 
 */
function closeInfo() {
    showStartButton();
    hideBackground();
    showMobileControlls();
    let info = document.getElementById('Info');
    info.style.display = 'none';
};

/**
 * open the Info Window if its closed and close it if its open. It also show or hide the Background, the Start Button and the Mobile Controlls
 * 
 */
function openInfo() {
    closeControlls();
    hideStartButton();
    showBackground(); 
    let info = document.getElementById('Info');
    if(info.style.display == 'none') {
        info.style.display = 'flex';
        hideMobileControlls();
    }
    else {
        info.style.display = 'none';
        showStartButton();
        hideBackground();
        showMobileControlls();
}
};

/**
 * show the Try Again Button
 * 
 */
function showTryAgainButton() {
    let tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.style.display = 'flex';
};

/**
 * hide the Try Again Button and restart the game
 * 
 */
function TryAgain() {
    let tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.style.display = 'none';
    restartGame();
    showMobileControlls();
};


/**
 * hide the Start Button
 * 
 */
function hideStartButton() {
    let startButton = document.getElementById('start-game-button');
    startButton.style.display = 'none';
};
/**
 * show the Start Button
 * 
 */
function showStartButton() {
    let startButton = document.getElementById('start-game-button');
    startButton.style.display = 'flex';
};

/**
 * paused the music from the startpage, hide the startscreen and start button,load the canvas and level and show the canvas
 * 
 */
function startGame() {
    let startscreen = document.getElementById('startscreen-container');
    let canvas = document.getElementById('canvas-container');
    pauseStartpageAudio();
    hideStartButton();
    initLevel();
    init();
    showMobileControlls();
    startscreen.style.display = 'none';
    canvas.style.display = 'flex';
};


/**
 * show the Background over the startscreen/canvas and over the page
 * 
 */
function showBackground() {
    let background = document.getElementById('background');
    let backgroundMain = document.getElementById('background-main');
    background.style.display = 'block';
    backgroundMain.style.display = 'block';
};
/**
 * hide the Background over the startscreen/canvas and over the page
 * 
 */
function hideBackground() {
    let background = document.getElementById('background');
    let backgroundMain = document.getElementById('background-main');
    background.style.display = 'none';
    backgroundMain.style.display = 'none';
};


/**
 * set the Muted variable to true or false and change the image of the audio controll. If the variable is true the music is muted and if the variable is false the music is unmuted
 * 
 */
function muteAndUnmute() {
    let audioControll = document.getElementById('audioControll');
    if(Muted == false){
        Muted = true;
        audioControll.innerHTML = `<img onclick="muteAndUnmute()" src="img/menu/muted.png">`;
        pauseStartpageAudio();
    } else {
        Muted = false;
        audioControll.innerHTML = `<img onclick="muteAndUnmute()" src="img/menu/Unmute.png">`;
        playStartpageAudio();
    }
};

/**
 * clear all intervals, clear the Array with the interval ids, load the level and load the game
 * 
 */
function restartGame() {
    clearAllIntervals();
    intervalIds = [];
    initLevel();
    init();
};

/**
 * pause the music from the startpage and set the current time to 0
 * 
 */
function pauseStartpageAudio() {
    let startPage = document.getElementById('startPageAudio');
    startPage.pause();
    startPage.currentTime = 0;
};

/**
 * play the music from the startpage
 * 
 */
function playStartpageAudio() {
    let startPage = document.getElementById('startPageAudio');
    startPage.play();
};

/**
 * hide the Mobile Controlls
 * 
 */
function hideMobileControlls() {
    let mobileControlls = document.getElementById('mobile-controlls');
    mobileControlls.style.display = 'none';
}

/**
 * show the Mobile Controlls
 * 
 */
function showMobileControlls() {
    let mobileControlls = document.getElementById('mobile-controlls');
    mobileControlls.style.display = 'flex';
}

/**
 * show the Mobile Controlls
 * 
 */
function showMobileControlls() {
    let mobileControlls = document.getElementById('mobile-controlls');
    mobileControlls.style.display = 'flex';
}

