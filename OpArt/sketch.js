function setup() {

	 c = createCanvas(windowWidth, windowHeight);
	 centerX = windowWidth/2;
	 centerY = windowHeight/2;
	 frameRate(30);
	 smooth();

}

function draw() {

	 background(0);
 	 noStroke();
 	 var divI = 50;
 	 var divJ = 50;

  	 for (var  i = 0 ; i < windowWidth ; i+= 2*divI )
  	 		{
  	 			for (var  j = 0 ; j < windowWidth ; j+=2*divJ )
  	 			{	
  	 				push();
  	 				translate(i,j);
  	 				//rotate(millis()*0.001);
  	 				
					var addSize = sin(0.001 * millis());
					var subSize = cos(0.001 * millis());
					
					rectMode(RADIUS);
  	 				rect(0,0, (divI/1.5) * addSize ,( divJ/1.5 ) * addSize);
  	 				rect(divI,divJ, (divI/1.5) * subSize, (divJ/1.5) * subSize);

  	 				pop();

  	 			}
  	 		}	
}