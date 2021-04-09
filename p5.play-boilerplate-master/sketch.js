  var P_Button;
  var f1,f2,f3,f4;
  var f1i,f2i,f3i,f4i;
  var gameState="start";
  var redG,blueG,yellowG,pinkG;
  var mImg,Minu;
  var bbees,bbeesi;
  var bb2,bb3;
  var i1,i2,i3,i4;
  var score=0;
  var bg1;
  var bitten=0;

  function preload(){
    f1i=loadImage("IMAGES/b1.jpg"); 
    f2i=loadImage("IMAGES/p1.png");
    f3i=loadImage("IMAGES/red.png");
    mImg=loadImage("IMAGES/MINU.png");
    bbeesi=loadImage("IMAGES/bee2.png");
    bg1=loadImage("IMAGES/Bumble field.jpg");
    //f4i=loadImage("IMAGES/YF.svg");
  }

  function setup() {
    createCanvas(800,400);

    P_Button=createSprite(400,200,800,400);
    P_Button.visible=false;

    Minu=createSprite(400,100,40,20);
  Minu.addImage("bear",mImg);
  Minu.scale=0.09;
  Minu.visible=false;

    bbees=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
    bbees.addImage("bees",bbeesi);
    bbees.velocityX=2;
    bbees.scale=0.3;
    bbees.visible=false;

    bb2=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
    bb2.addImage("bees",bbeesi);
    bb2.velocityX=2;
    bb2.scale=0.3;
    bb2.visible=false;

    bb3=createSprite(Math.round(random(100,700)),Math.round(random(90,390)),30,30);
    bb3.addImage("bees",bbeesi);
    bb3.velocityX=2;
    bb3.scale=0.3;
    bb3.visible=false;

    i1=createSprite(4,200,10,5000);
    i2=createSprite(799,200,10,5000);
    i3=createSprite(400,4,5000,10);
    i4=createSprite(400,399,5000,10);

    i1.visible=false;
    i2.visible=false;
    i3.visible=false;
    i4.visible=false;

  redG=createGroup();
  blueG=createGroup();
  yellowG=createGroup();
  pinkG=createGroup();

  }

  function draw() {
    
    bbees.bounceOff(i1);
    bbees.bounceOff(i2);
    bbees.bounceOff(i3);
    bbees.bounceOff(i4);

    bb2.bounceOff(i1);
    bb2.bounceOff(i2);
    bb2.bounceOff(i3);
    bb2.bounceOff(i4);

    bb3.bounceOff(i1);
    bb3.bounceOff(i2);
    bb3.bounceOff(i3);
    bb3.bounceOff(i4);

    Minu.collide(i1);
    Minu.collide(i2);
    Minu.collide(i3);
    Minu.collide(i4);

    if(gameState==="start"){
    background(0); 
    text(mouseX+" "+mouseY,mouseX,mouseY);
    textFont("Monaco");
  fill("white");
  text("Click Anywhere to Play",370,200);
    
    if(mousePressedOver(P_Button)){
      gameState="play";
    }
  }

  if(gameState==="play"){
    level1();
    P_Button.visible=false;
  }

  if(Minu.isTouching(bbees)){
    bitten=bitten+1;
  }

  if(bitten>10){
    gameState="end";
  }

  if(score===10){
    console.log("You are going to level 2!, Level 1 passed!")
    //level2();
  }

  if(redG.isTouching(Minu)){
    score=score+1;
  }

  if(pinkG.isTouching(Minu)||blueG.isTouching(Minu)){
    score=score-1;
  }

  if(keyDown("RIGHT_ARROW")){
    Minu.x=Minu.x+10;
  }

  if(keyDown("LEFT_ARROW")){
    Minu.x=Minu.x-10;
  }

  if(keyDown("UP_ARROW")){
    Minu.y=Minu.y-10;
  }

  if(keyDown("DOWN_ARROW")){
    Minu.y=Minu.y+10;
  }

  drawSprites();

  textSize(25);
  fill("Magenta");
  stroke("Magenta");
  strokeWeight(2);
  text("Score:"+score,700,50);
  text("Bitten:"+bitten,600,50);

  if(keyDown("R")){
    gameState="play"
  }

  if(gameState==="end"){
    text("Game over",400,200);
    text("R to restart");
  }

  }

  function level1(){

  console.log("Level 1!");

  background(bg1);

  textSize(25);
  fill("Magenta");
  stroke("Magenta");
  strokeWeight(1);
  text(" Collect Red colour Flowers!",200,390);

  Minu.visible=true;
  bbees.visible=true;
  bb2.visible=true;
  bb3.visible=true;

  if(frameCount%60===0){
  bluef();
  pinkf();
  redf();

  }

  }

  function bluef(){
    
    f1=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f1.addImage("blue flower",f1i);
    f1.scale=0.2;
    f1.lifetime=180;
    blueG.add(f1);
    
    
  }
  function pinkf(){
    
    f2=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f2.addImage("pink flower ",f2i)
    f2.scale=0.2;
    f2.lifetime=180;
    pinkG.add(f2);
    
  }
  function redf(){
    
    f3=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
    f3.addImage("Red flower ",f3i)
    f3.scale=0.2;
    f3.lifetime=180;
    pinkG.add(f3);
    
  }

  /*function yellowf(){
  if(frameCount%60===0){
    f4=createSprite(Math.round(random(20,780)),Math.round(random(50,380)),30,30);
  // f4=createSprite(400,200,20,20);
    f4.addImage("yellow flower",f4i);
    }
  }
  */