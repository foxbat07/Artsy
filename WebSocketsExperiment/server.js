var express = require('express');   //express is a function even if it is a varaible
var socket = require('socket.io')

var app = express();
var server = app.listen(3010);

var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log('new connection: '+ socket.id);

	socket.on('mouse',mouseMessage);


	function mouseMessage(data){

		socket.broadcast.emit('mouse',data);
		console.log(data);

	}
}

app.use(express.static('public'));
console.log("server is now running");