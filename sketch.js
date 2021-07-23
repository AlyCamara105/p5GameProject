let myXPos = 100;
let myYPos = 400;
let enemyXPos = 1500;
let enemyYPos = 400;
let enemySpeedValue = 10;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;


function setup() {
    createCanvas(1500, 700);
    background(0);
    rectMode(CENTER);
}

let jump = 0;

let gameOver = 0;

function draw() {

    if (gameOver == 0) {

        myLeft = myXPos - 50;
        myRight = myXPos + 50;
        myTop = myYPos - 50;
        myBottom = myYPos + 50;

        enemyLeft = enemyXPos - 50;
        enemyRight = enemyXPos + 50;
        enemyTop = enemyYPos - 50;
        enemyBottom = enemyYPos + 50;
        
        if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){

            console.log("It didn't hit")
        
        } else {
            gameOver = -1
        }

        background(0);

        ellipse(myXPos, myYPos, 100, 100);

        if (myYPos > 200 && jump == 1) {

            myYPos -= 7;

            if (myYPos <= 200) {

                jump = 2;

            }

            //myYPos = 400;

        } 
        
        if (jump == 2) {

            if (myYPos <= 400) {

                myYPos += 7;

            } else {

                jump = 0;

            }

        }
        

        ellipse(enemyXPos, enemyYPos, 100, 100);

        enemyXPos -= enemySpeedValue;
        
        if (enemyXPos < -100) {

            enemyXPos = 1500;

        }

    } 
    
}

function mouseClicked() {

    if (jump == 0) {

        jump = 1;

    }

}
