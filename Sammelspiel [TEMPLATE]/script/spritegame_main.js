
/***********************************
 * GAME SCREEN
 ***********************************/
let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    redbox: document.getElementById('redBox'),
    startButton: document.getElementById('startButton'),
    debug_output: document.getElementById('debug_output')
}


surface.style.transform = `scale(${parseFloat(GAME_SCREEN.surfaceScale)/100 * (window.innerWidth / surface.clientWidth)})`;



/***********************************
 * GAME CONFIG
 ***********************************/
let GAME_CONFIG = {
    gameSpeed: 24,
    characterSpeed: 5 
}



/***********************************
 * START GAME
 * **********************************/


function startGame() {
    PLAYER.box.style.left = '350px'; 
    PLAYER.box.style.top = '180px'; 
    PLAYER.box.style.opacity = '1'; 
    PLAYER.spriteImg.style.right = '0px'; 



    gameLoop();
}




/***********************************
 * GAME LOOP
 * **********************************/
function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        movePlayer((-1) * GAME_CONFIG.characterSpeed, 0, -1);
        animatePlayer();
    }
    if (KEY_EVENTS.rightArrow) {
        movePlayer(GAME_CONFIG.characterSpeed, 0, 1);
        animatePlayer();
    }
    if (KEY_EVENTS.upArrow) {
        movePlayer(0, (-1) * GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
    }
    if (KEY_EVENTS.downArrow) {
        movePlayer(0, GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
    }

    if (!GAME_SCREEN.redbox.respawning && isColliding(PLAYER.box, GAME_SCREEN.redbox, -20)) {
        spawnRedBoxRandom();
    }

    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed); 
}


