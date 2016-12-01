var express = require('express');   //express is a function even if it is a varaible
var socket = require('socket.io')

var app = express();
var server = app.listen(3010);

var io = socket(server);

io.on('connection');

app.use(express.static('public'));
console.log("server is now running");