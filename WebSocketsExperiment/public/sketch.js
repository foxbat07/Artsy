var socket;

function setup() {
createCanvas(1200,800);

socket = io.connect('http://localhost:3010');  //127.0.0.1
socket.on('mouse',newDrawing);

}

function newDrawing(data){
	 fill('red');
	 ellipse(data.x,data.y,20,20);
}
function draw() {
  
  

}

function mouseDragged() {
	console.log(mouseX,mouseY);
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse',data);
	fill('white');
	ellipse(mouseX,mouseY,40,40);
}