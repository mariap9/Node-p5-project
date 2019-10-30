console.log("server is running");

var express = require("express");

var app = express();
// run all the code inside that variable

var port = 3000;
// define a port number

app.use(express.static('public'));
// start the server
var server = app.listen(port);

console.log("http://localhost:" + port)

var socket = require('socket.io');
// comunication related to event

var io = socket(server);

io.on("connection", newConnection);

function newConnection(socket){
  console.log(socket.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(receivedData){
    console.log(receivedData);

    socket.broadcast.emit("mouseBroadcast", receivedData);
  }

}
