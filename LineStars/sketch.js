//Global angle for rotation
var theta=0;
var length = 300;
var r = 200;


function setup() {

	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(30);

}

function draw() {

  theta=PI/6;
  var dist = 50;
  var outside = 1500;
  var inside = 150;

  background(0);
  stroke(255);
  noFill();
  translate(centerX,centerY);
  
  for ( var r = inside ; r < outside ; r+=dist)
  {	  

  	  
  	  theta+=PI/30;
  	  var x1 = r * cos(theta);
	  var y1 = r * sin(theta);
	  var x2 = r * cos(theta + (2*PI/3) );
	  var y2 = r * sin(theta + (2*PI/3));
	  var x3 = r * cos(theta - (2*PI/3));
	  var y3 = r * sin(theta - (2*PI/3));

	  triangle( x1,y1,x2,y2,x3,y3 );  
  }
 
}



