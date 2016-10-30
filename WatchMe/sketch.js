var centerX,centerY;
var radius = 600;
var eStroke = 80;
var nStroke = 100;
var c;



function setup() {
	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(1);

}

function draw() {

  background(0);
  noStroke();
  
  var ch = color('rgba(203,213,232,100)');
  var cm = color('rgba(253,205,172,100)');
  var cs = color('rgba(179,226,205,100)');
  

  var sec = TWO_PI * second() / 60;
  var min = TWO_PI * minute() / 60;
  //var hr =  TWO_PI *  12/ 12;
  var hr = TWO_PI * ( hour() < 12 ? hour() : hour() + 12) / 12 ;
  if(hr == 0 || hr == TWO_PI )
  {
  	hr = 0.0001;		//workaround for time bug
  }
  drawArc( radius, cs, sec ,60);
  drawArc( radius- nStroke, cm, min ,60);
  drawArc( radius - 2*nStroke, ch , hr , 12 ); 

  console.log("time: "+ hour()+"  "+ minute()+"  "+ second()  +"   " + hr+" "+min+" "+sec);
}

//radius,color,angle based on time


function drawArc(  r,  c,  angle, div ) {
  
  //var w = color('rgb(255,255,255)');
  var grey1 = color(20);
  var grey2 = color(0);

  //outer shadow
  fill(grey1); 
  ellipse(centerX,centerY,r,r);  

  //actual arc
  fill(c);
  arc(centerX,centerY,r,r,-PI/2, -PI/2 + angle);

  //draw better grids h =12, m= 60 ,s = 60; 
  // //make white
  for ( var i = 0 ; i < 2* PI ; i += PI/ (div/2) )
  	  {
  	  	fill(grey1);
        arc(centerX,centerY,r+1,r+1, i ,i + PI/120 );
    }
    
  //inner clean
  fill(grey2);
  ellipse(centerX,centerY,r-eStroke,r-eStroke);

  

}



function mousePressed() {
   //saveCanvas(c, 'myCanvas', '.png');
}





