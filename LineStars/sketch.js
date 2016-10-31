//Global angle for rotation
var theta=0;
var length = 300;
var r = 200;

function setup() {

	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(30);
	 smooth();




}

function draw() {
 
  theta=0;
  var dist = 20;
  var outside = 2000;
  var inside = 50;

  background(10);
  stroke(255);
  noFill();
  translate(centerX,centerY);
  
  for ( var r = inside ; r < outside ; r+=dist)
  {	  

  	  theta+=PI/180;
  	  //theta+=0.1* sin( frameCount);
  	  //translate(r/100,r/100); 	  

  	  var x1 = r * cos(theta);
	  var y1 = r * sin(theta);
	  var x2 = r * cos(theta + (2*PI/3) );
	  var y2 = r * sin(theta + (2*PI/3));
	  var x3 = r * cos(theta - (2*PI/3));
	  var y3 = r * sin(theta - (2*PI/3));

	  stroke( 128 * cos( r * millis()* 0.000001));
	  triangle( x1,y1,x2,y2,x3,y3 );  
  }
 
}



