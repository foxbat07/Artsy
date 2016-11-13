function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //perspective(90, 500,100,4000);
  noiseSeed(0.5);
  noiseDetail(2,0.2);

  

}

function draw(){
  background(0);

  

  var xLim = 4000;
  var yLim = 4000;
  var zLim = 4000;

  var space = 500;
 
  //perspective(60, 60,100,1000);

  var dirY = (mouseY / height - 0.5) *3;
  var dirX = (mouseX / width - 0.5) *3;
  ambientLight(100);
  directionalLight(250, 250, 250, dirX, -dirY, 0.5);
  //directionalLight(255, 0, 0, -dirX, dirY, 0.5);
  pointLight(128,128,128, dirX, -dirY, 1.0);
  
  for(var i = 0 ; i <= zLim ; i+=space ){
   for(var j = 0 ; j <= yLim ; j+=space ){
    for(var k = 0 ; k <= xLim ; k+=space ){

    push();
    //translate(100* noise(i),100* noise(j),100* noise(k));
    //translate( 100 * sin(k* i * 0.00000001* frameCount) ,0, 1000* sin(0.01* frameCount) );  
    translate( 100 * sin(k* i * 0.00000001* frameCount) ,0,0 ); 
    translate( 0 ,0, 1000* sin(0.01* frameCount) ); 
    
    translate(i - zLim/2 ,j - yLim/2,k - xLim); 
    //specularMaterial(0,128,228);
    specularMaterial(20,128 + 128 * sin( k* 0.00001* frameCount)  ,200  );


      //box(50);
      sphere(30);
      pop();



   }
    }
  } 
 
}// end of draw
