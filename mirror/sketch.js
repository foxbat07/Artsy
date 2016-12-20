var video;
var lost;
var amp;
var fft;

var vScale = 16;
var bins = 256;

function preload(){
	lost = loadSound("lost.mp3");
}

function setup() {
  createCanvas(1280, 960);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  amp = new p5.Amplitude; 
  fft = new p5.FFT(0.9,bins);
  fft.setInput(lost);
  lost.play();
  //console.log(fft);

}

function draw() {
  background(255);
  var spectrum = fft.analyze();
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (0.3*r+ 0.7*g+ 0.1*b)/3  * 4;
      //var bright = (r+ g+ b)/3;
      var w = map(bright, 0, 255, 0, vScale);
      var volume= amp.getLevel();
      
     
     
      noStroke(); 
      fill(0,g*0.7,b);
      //fill(255);
      var sv = 0;

     // if( x > (video.width/2 - bins/2 ) && x < (width/2 + bins/2) )
	 	if (x > video.width/2)
	 		sv= spectrum[x-video.width/2];

	 	if (x <= video.width/2)
	 		sv= spectrum[video.width/2 - x];

	   w= w*sv/128;
       w= w*volume*3;

      //fill(spectrum[width/2] );
      rectMode(CENTER);
      rect(x*vScale, y*vScale, w, w);
      //ellipse (x*vScale, y*vScale, w, w);
    }
  }
 
} 

function toggleSong(){
	if(lost.isPlaying())
		lost.pause();
	else
		lost.play();
}

function keyPressed(){
	if(key == ' ')
		toggleSong();
}
