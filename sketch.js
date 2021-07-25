let myXPos = 100;
let myYPos = 400;
let enemyXPos = 1500;
let enemyYPos = 400;
let enemySpeedValue = 10;
let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let fimg;
let ikimg;
let ikdimg;
let ylimg;
let goimg;
function preload(){
    fimg = loadImage("images/Finn.png");
    ikimg = loadImage("images/IceKing.png");
    ikdimg = loadImage("images/Icekingdom.jpg");
    ylimg = loadImage("images/YouLose.png")
    goimg = loadImage("images/GameOver.png")
    
}
function setup() {
    createCanvas(1500, 700);
    ellipseMode(CENTER);
}
let jump = 0;
let gameOver = 0;
function draw() {
    background(ylimg);
    image(goimg,300,400,200,-200);
    
    
        
        
    if (gameOver == 0) {
        
        myLeft = myXPos - 50;
        myRight = myXPos + 50;
        myTop = myYPos - 50;
        myBottom = myYPos + 50;
        enemyLeft = enemyXPos - 25;
        enemyRight = enemyXPos + 25;
        enemyTop = enemyYPos - 25;
        enemyBottom = enemyYPos + 25;
       
        
        
        
        if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
            
        
        } else {
            gameOver = -1
            
        }
        ellipse(enemyXPos, enemyYPos, 100, 100);
        ellipse(myXPos, myYPos, 100, 100);
        background(ikdimg);
        image(fimg,myXPos,myYPos,100,100);
        image(ikimg,enemyXPos,enemyYPos,100,100);
        
        
        
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