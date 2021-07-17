var rabbit;
var carrot;
var obsone;
var obstwo;
var obsthree;
var obsfour;
var edges;


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
 rabbit=createSprite(40,550,30,30);
 carrot=createSprite(550,40,30,30);
  obsone=createSprite(300,120,100,20);
  obsone.velocityX=5;
  obstwo=createSprite(300,220,100,20);
  obstwo.velocityX=-5;
  obsthree=createSprite(300,320,100,20);
  obsthree.velocityX=5;
  obsfour=createSprite(300,420,100,20);
  obsfour.velocityX=-5;
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
  obsone.bounceOff(edges[0]);
  obsone.bounceOff(edges[1]);
  obstwo.bounceOff(edges[0]);
  obstwo.bounceOff(edges[1]);
  obsthree.bounceOff(edges[0]);
  obsthree.bounceOff(edges[1]);
  obsfour.bounceOff(edges[0]);
  obsfour.bounceOff(edges[1]);
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
    obsone.velocityX=0;
    obstwo.velocityX=0;
    obsthree.velocityX=0;
    obsfour.velocityX=0;
  }
  if (rabbit.isTouching(obsone))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obstwo))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  if (rabbit.isTouching(obsthree))
  {
   rabbit.x=40;
   rabbit.y=550;
  }  if (rabbit.isTouching(obsfour))
  {
   rabbit.x=40;
   rabbit.y=550;
  }
  
  drawSprites();
}
