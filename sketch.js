var rabbit;
var carrot;
var obsone;
var obstwo;
var obsthree;
var obsfour;
var obsfive;
var obssix;
var obsseven;
var obseight;
var obsnine;
var edges;


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
 rabbit=createSprite(40,550,30,30);
 carrot=createSprite(550,40,30,30);
  obsone=createSprite(300,120,100,20);
  obstwo=createSprite(300,220,100,20);
  obsthree=createSprite(300,320,100,20);
  obsfour=createSprite(300,420,100,20);
  obsfive=createSprite(390,480,100,20);
  obssix=createSprite(210,480,100,20);
  obsseven=createSprite(300,420,100,20);
  obseight=createSprite(300,420,100,20);
  obsnine=createSprite(300,420,100,20);
 rabbit.shapeColor="brown";
 carrot.shapeColor="orange";
  obsone.shapeColor="red";
  obstwo.shapeColor="red";
  obsthree.shapeColor="red";
  obsfour.shapeColor="red";
}

function draw() {
  background("lightgreen"); 
 rabbit.bounceOff(edges[0]);
 rabbit.bounceOff(edges[1]);
 rabbit.bounceOff(edges[2]);
 rabbit.bounceOff(edges[3]);
  if(keyDown("up"))
  {
   rabbit.y=rabbit.y-4;
  }
  if(keyDown("down"))
  {
   rabbit.y=rabbit.y+4;
  }
  if(keyDown("left"))
  {
   rabbit.x=rabbit.x-4;
  }
  if(keyDown("right"))
  {
   rabbit.x=rabbit.x+4;
  }

  if (rabbit.isTouching (carrot))
  {
    text("you win",200,200);
  }
  if (rabbit.isTouching(obsone))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obstwo))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsthree))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }  
  if (rabbit.isTouching(obsfour))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsfive))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obssix))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsseven))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obseight))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsnine))
  {
    text("you lose" , 200,200)
   rabbit.x=40;
   rabbit.y=550;
  }
  
  drawSprites();
}
