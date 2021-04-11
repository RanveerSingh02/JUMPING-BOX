var box;
var music;
var blue_surface,yellow_surface,pink_surface,green_surface;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){


    createCanvas(1500,800);
    
    //create 4 different surfaces
    blue_surface=createSprite(100,590,180,20);
    blue_surface.shapeColor = "blue";

    yellow_surface=createSprite(300,590,180,20);
    yellow_surface.shapeColor = "yellow";

    pink_surface=createSprite(500,590,180,20);
    pink_surface.shapeColor = "pink";

    green_surface=createSprite(700,590,180,20);
    green_surface.shapeColor = "green";
    



    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20);
    box.shapeColor = "White";
    box.velocityX = 4;
    box.velocityY = 4;
    
}

function draw() {
    background(rgb(10,10,10));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(box.x<0){
      music.stop()
      box.velocityX=3
    }else if(box.x>800){
      music.stop()
      box.velocityX=-3
    }
   
  if(green_surface.isTouching(box)&&box.bounceOff(green_surface)){
    music.stop();

    box.shapeColor="green";
    
  }
  if(yellow_surface.isTouching(box)&&box.bounceOff(yellow_surface)){
    music.stop();
    box.shapeColor="yellow"
  }
    
  if(pink_surface.isTouching(box)&&box.bounceOff(pink_surface)){
    music.stop();
    box.shapeColor="pink";
  }
  
  if(blue_surface.isTouching(box)&&box.bounceOff(blue_surface)){
    music.stop();
    box.shapeColor="blue";
  }
  if (box.y<0){
    music.stop()
    box.velocityY=3
  }


   
    drawSprites()
}
