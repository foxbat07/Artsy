

var gui;

function setup() {

	 
	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(60);
	 smooth();


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
  theta+= sp.p1 * sin(TWO_PI * 0.01 * sp.p2 * frameCount);	 
  
  
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

	  stroke( sp.whites * sin( r * millis()* 0.000001 * sp.flickr));//255-
	  triangle( x1,y1,x2,y2,x3,y3 );  
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// GUI

var initGui = function() {
  var f2 = gui.addFolder('Simulation Parameters');
 
  f2.add(sp, 'r',100,500);
  f2.add(sp, 'dist',1,60);
  f2.add(sp, 'flickr',0.1,2);
  f2.add(sp,'thetaDiv',10, 500);
  f2.add(sp,'whites',0, 255);
  f2.add(sp,'p1',0, 20);
  f2.add(sp,'p2',0, 1);
  f2.add(sp,'fRate',0, 100).listen();
  
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

