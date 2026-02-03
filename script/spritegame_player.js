
/***********************************
 * PLAYER
 ***********************************/
let PLAYER = {
    box: document.getElementById('player'),
    spriteImg: document.getElementById('spriteImg'),
    spriteImgNumber: 0, 
    spriteDirection: 1,
    coinCount: 0
}

let gameField = document.getElementById("gameField")
gameField.classList.add("invisible")
let menuDescription = document.getElementById("menuDescription")
menuDescription.classList.add("invisible")


let menuBtn = document.getElementById("menuBtn")

let theme = new Audio("./audio/backgroundTheme (2).mp3");

function makeFieldVisible() {
    document.getElementById("remove").classList.add("invisible")
    gameField.classList.remove("invisible")
    theme.play();
    theme.loop
}

function openMenu() {
    menuDescription.classList.remove("invisible")

    menuDescription.innerHTML = `RupeeCollector ist ein einfaches 2D-Spiel, in dem der Spieler Rubine einsammelt.<br>

<br>Steuerung: Mit W, A, S, D oder den Pfeiltasten kann sich der Spieler in alle Richtungen bewegen.<br>

<br>Ziel: Laufe durch die Level und sammle alle Rubine ein.<br>

<br>Gameplay: Es gibt keine Gegner, keine Boni oder Power-Ups – nur Rubine und freie Bewegung.<br>

<br>Ein schlichtes, minimalistisches Sammelspiel. 	<button class="btns" onclick="closeMenu()" id="closeBtn">Close</button>
`
}

function closeMenu(){
    menuDescription.classList.add("invisible")
}



/***********************************
 * MOVE
 * **********************************/
/**
 * @param {number} dx - player x move offset in pixel
 * @param {number} dy - player y move offset in pixel
 * @param {number} dr - player heading direction (-1: look left || 1: look right)
 */
function movePlayer(dx, dy, dr) {
    let x = parseFloat(PLAYER.box.style.left);
    let y = parseFloat(PLAYER.box.style.top);

    let minX = 0;
    let minY = 0;
    let maxX = GAME_SCREEN.surface.clientWidth - PLAYER.box.offsetWidth;
    let maxY = GAME_SCREEN.surface.clientHeight - PLAYER.box.offsetHeight;
 
    let newX = x + dx;
    let newY = y + dy;
 
    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));
 

    PLAYER.box.style.left = (newX) + 'px';
    PLAYER.box.style.top = (newY) + 'px';


    if (dr != 0 && dr != PLAYER.spriteDirection) {
        PLAYER.spriteDirection = dr;
        PLAYER.box.style.transform = `scaleX(${dr})`;
    }

    GAME_SCREEN.debug_output.innerHTML = `<img src="./img/greenRupy.png" alt="Count"> ${PLAYER.coinCount} <img src="./img/time.png" alt="time">`;
}



function animatePlayer() {
    if (PLAYER.spriteImgNumber < 9) {
        PLAYER.spriteImgNumber++;
        let x = parseFloat(PLAYER.spriteImg.style.right);
        x += 72.0; 
        PLAYER.spriteImg.style.right = x + "px";
    } else { 
        PLAYER.spriteImg.style.right = "0px";
        PLAYER.spriteImgNumber = 0;
    }
}

