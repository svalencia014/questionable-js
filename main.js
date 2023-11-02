//* DO NOT PUT ON CODEHS
import { Graphics, Rectangle } from 'chs-js-lib'
const graphics = new Graphics();
function add(shape) {
  graphics.add(shape);
}
function remove(shape) {
  graphics.remove(shape);
}
//* END DO NOT PUT ON CODEHS
//dont look at this mr yeoman
//or you either other teachers
// balls america

const Theme = new Audio(
    "https://codehs.com/uploads/fcd293c3d1c92b0a954da56bb3d4f6"
);
const BlackSquareTheme = new Audio(
    "https://codehs.com/uploads/66c5a8add52d0a2422190b248cf1355d"
);

// Player Pieces 

// Red Player 1
const RedPlayerIdle = new WebImage("https://codehs.com/uploads/9072c362a186c0a45486b3842328428f");
// Blue Player 2
const BluePlayerIdle = new WebImage("https://codehs.com/uploads/13ac08cc5339fac0e3eb87ec49367038");
// Green Player 3
const GreenPlayerIdle = new WebImage("https://codehs.com/uploads/4517728ad2a864e61d5fd8fd9fd7ceb4");
// Yellow Player 4
const YellowPlayerIdle = new WebImage("https://codehs.com/uploads/d7e68d33d5d78a34924059a036ac363b");


const DiceText = new Text("", "20pt Arial");

let CurrentPlayer = ["Red", "Blue", "Green", "Yellow"]
let activePlayer = "";
let PlayerNumber = 0;
let moves = 0;
let hasRolled = false;

const Spaces = [
    ["start", "blue", "green", "purple", "black", "yellow", "white", "white"],
    ["black", "orange", "green"],
    ["green", "white", "white"],
    ["white", "yellow", "red", "blue", "roundabout", "purple", "white", "red"],
    ["blue", "black", "white", "white"],
    ["purple", "orange", "white", "white"],
    ["purple", "white", "green", "black", "yellow", "black", "red", "white"],
    ["end", "white", "yellow"],
    ["black", "orange", "white", "black", "purple", "red", "blue"]
]

async function main() {
    setupGame();
    activePlayer = CurrentPlayer[PlayerNumber];
    console.log(`The current player is ${activePlayer}`);
    DiceText.setText(`Press 'r' to roll for ${activePlayer}`);
    DiceText.setFont("10pt Arial");
    keyDownMethod(keyDownMethods)
}

function keyDownMethods(e) {
    if(e.key == 'r' && hasRolled == false) {
        rollDice();
        switch(PlayerNumber) {
            case 0: {
                move(RedPlayerIdle, moves)
            }
            case 1: move(BluePlayerIdle, moves)
            case 2: move(GreenPlayerIdle, moves)
            case 3: move(YellowPlayerIdle, moves)
        }
    }
}

function move(player, spaces) {
    player.move(spaces, 0)
}

function duel() {
    
}

function setNextPlayer() {
    if (PlayerNumber == 4) {
        PlayerNumber = 0;
    } else {
        PlayerNumber++
    }
    
    hasRolled = !hasRolled
}

function setupGame() {
    //setTimer(() => { MenuTheme.play() }, 85, "", "Music Timer")
    //* DRAW GRID
    DiceText.setPosition(25, 155),
    DiceText.setColor(Color.WHITE);
    add(DiceText);
    Color.BLUE = new Color(46, 152, 209);
    Color.PURPLE = new Color(102, 90, 231);
    Color.GREEN = new Color(136, 227, 110);
    Color.YELLOW = new Color(247, 221, 74);
    Color.ORANGE = new Color(255, 94, 31);
    Color.RED = new Color(255, 41, 33);
    drawBoard();
    
    //* Create Player Pieces
    RedPlayerIdle.setPosition(0, 10);
    RedPlayerIdle.setSize(20, 20);
    add(RedPlayerIdle);
    
    BluePlayerIdle.setPosition(0, 20);
    BluePlayerIdle.setSize(20, 20);
    add(BluePlayerIdle);
    
    GreenPlayerIdle.setPosition(0, 30);
    GreenPlayerIdle.setSize(20, 20);
    add(GreenPlayerIdle);
    
    YellowPlayerIdle.setPosition(0, 40);
    YellowPlayerIdle.setSize(20, 20);
    add(YellowPlayerIdle);
}

function drawBoard() {
    
    // Roundabout
    const roundAbout = new WebImage("https://codehs.com/uploads/e00286aeb2d6b739a08e9a0b67a53168")
    setSize(355, 700);
    drawSquare(Color.WHITE, 0,0, "START", "10pt Arial"); //START SQUARE
    drawSquare(Color.BLUE, 45, 0);
    drawSquare(Color.GREEN, 90, 0);
    drawSquare(Color.PURPLE, 135, 0);
    drawSquare(Color.BLACK, 180, 0);
    drawSquare(Color.YELLOW, 225, 0);
    drawSquare(Color.WHITE, 270, 0);
    drawSquare(Color.WHITE, 315, 0);

    drawSquare(Color.BLACK, 225, 78);
    drawSquare(Color.ORANGE, 270, 78);
    drawSquare(Color.GREEN, 315, 78);
    drawSquare(Color.GREEN, 225, 156);
    drawSquare(Color.WHITE, 270, 156);
    drawSquare(Color.WHITE, 315, 156);
    drawSquare(Color.WHITE, 270, 234);
    drawSquare(Color.WHITE, 270, 390);
    drawSquare(Color.WHITE, 270, 312);
    drawSquare(Color.RED, 270, 468);
    drawSquare(Color.RED, 315, 234);
    drawSquare(Color.WHITE, 315, 390);
    drawSquare(Color.WHITE, 315, 312);
    drawSquare(Color.WHITE, 315, 468);
     
    drawSquare(Color.PURPLE, 225, 234);
 
 // create roundabout for the board
    roundAbout.setPosition(180, 235);
    roundAbout.setSize(40, 70);
    add(roundAbout);
    
    drawSquare(Color.BLUE, 135, 234);
    drawSquare(Color.RED, 90, 234);
    drawSquare(Color.YELLOW, 45, 234);
    drawSquare(Color.WHITE, 0, 234);

    drawSquare(Color.BLUE, 0, 312);
    drawSquare(Color.PURPLE, 0, 390);
    drawSquare(Color.PURPLE, 0, 468);
    drawSquare(Color.WHITE, 45, 468);
    drawSquare(Color.GREEN, 90, 468);
    drawSquare(Color.BLACK, 135, 468);
    drawSquare(Color.YELLOW, 180, 468);
    drawSquare(Color.WHITE, 0, 546, "END", "10pt Arial"); //END SQAURE
    drawSquare(Color.WHITE, 45, 546);

    drawSquare(Color.RED, 270, 624);
    drawSquare(Color.BLACK, 45, 624);
    drawSquare(Color.ORANGE, 90, 624);
    drawSquare(Color.WHITE, 135, 624);
    drawSquare(Color.BLACK, 180, 624);
    drawSquare(Color.PURPLE, 225, 624);
    drawSquare(Color.BLUE, 315, 625);
    drawSquare(Color.YELLOW, 315, 546);
    drawSquare(Color.BLACK, 225, 468);
    drawSquare(Color.ORANGE, 180, 390);
    drawSquare(Color.BLACK, 180, 312);
    
}

function drawSquare(color, x, y, text = "", font = "") {
    let rect = new Rectangle(40, 75);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    if (text != "") {
        let txt = new Text(text, font);
        txt.setPosition(x + 0, y + 40);
        txt.setRotation(90)
        txt.setColor(Color.BLACK);
        add(txt);
    }
}

function rollDice() {
    moves = Randomizer.nextInt(1, 6);
    hasRolled = !hasRolled;
    DiceText.setText(`${activePlayer} rolled a ${moves}`)
}

main();
//monkey bust
