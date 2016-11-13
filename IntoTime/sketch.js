
var gui;

function setup() {

	 
	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(60);
	 smooth();
  	 rectMode(CENTER);

     sp = new simulationParameters();
	 gui = new dat.GUI();
	 initGui();


}

function draw() {
  
  sp.fRate = frameRate();
  background(0);
  noFill();
  translate(centerX,centerY);
  var theta = 0; 
  var dist = 20;
  var outside = 2000;
  var inside = 100;
  //theta+= sp.p1 * sin(TWO_PI * 0.01 * sp.p2 * frameCount);	 
  
  
  for ( var r = inside ; r < outside ; r+=sp.dist)
  {	  

  	  theta+=PI/sp.thetaDiv;

  	  //translate(r/100,0); 	  

  	  var x1 = r * cos(theta);
	  var y1 = r * sin(theta);
	  var x2 = r * cos(theta + (2*PI/3) );
	  var y2 = r * sin(theta + (2*PI/3));
	  var x3 = r * cos(theta - (2*PI/3));
	  var y3 = r * sin(theta - (2*PI/3));

	  strokeColor = sp.whites * sin(r* millis()* 0.00001 * sp.flickr)
	  stroke(strokeColor);
	  //if ( strokeColor > 100)
	  //triangle( x1,y1,x2,y2,x3,y3 );  
	  
	  //ellipse(0,0,r,r);
	  rotate(theta*Math.sqrt(sp.r) *frameCount*0.00001);
	  rotate(-frameCount*0.00001);
	  stroke(255-strokeColor);
	  rect(0,0, r,r);
	  //triangle( x1,y1,x2,y2,x3,y3 ); 

  }
 
}


// GUI

var initGui = function() {
  var f2 = gui.addFolder('Simulation Parameters');

  var obj = { add:function(){ console.log("save image");  save(c, 'myGraphics.jpg');    }};

 
  f2.add(sp, 'r',-500,500);
  f2.add(sp, 'dist',1,60);
  f2.add(sp, 'flickr',0.1,2);
  f2.add(sp,'thetaDiv',10, 500);
  f2.add(sp,'whites',0, 255);
  f2.add(sp,'p1',0, 20);
  f2.add(sp,'p2',0, 1);
  f2.add(sp,'fRate',0, 100).listen();
  f2.add(obj,'add');


  
}

var simulationParameters = function(){
  this.r = 200;
  this.dist = 25;
  this.flickr = 1;
  this.thetaDiv = 180;
  this.whites = 200;
  this.p1 = 0.5;
  this.p2 = 0.1;
  this.fRate = frameRate();


  
}




/*
 //
var distance = 0.0;
var speed = 5;
var objStep = 100;

var c1, c2;
var useRect;

function setup(){
  //fullScreen(P3D);
  c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(60);
	 smooth();
  rectMode(CENTER);
  mousePressed();
 

}

function mousePressed(){
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  useRect = random(1) < 0.5 ? true: false;
}

function draw(){
  background(c1);
  translate(width / 2, height / 2);
  // var camX = map(mouseX, 0, width, -100, 100);
  // var camY = map(mouseY, 0, height, -100, 100);
   var fov = 30 / 180 * PI;
   var cameraZ = (height/2.0) / tan(fov/2.0);
  // camera(0, 0, 0, -500);
  perspective(fov, width/height, cameraZ * 0.1, cameraZ * 10);

  stroke(c2);
  strokeWeight(2);
  noFill();
  for(var depth = 0; depth < 1500; depth += objStep){

    push();
    var objSize = map(noise( (distance + depth ) * 0.0005), 0.2, 1.0, 0, 2000);
    translate(0, 0, depth - distance % objStep);
    translate( objSize/10 * cos(frameCount* 0.0001),  objSize/10 * sin(frameCount* 0.0001), 0);
    //var objSize = map(noise((distance + depth - distance % objStep) * 0.04), 0, 1, 50, 2000);
    if(useRect){
      rect(0, 0, objSize, objSize);
    } else {
      ellipse(0, 0, objSize, objSize);
    }
    pop();
  }
  distance += speed;
}


*/


