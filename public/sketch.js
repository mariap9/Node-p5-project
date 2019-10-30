function preload() {

}

var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);

  socket = io();
  socket.on("mouseBroadcast", newDrawing);
  background('red');

  function newDrawing(receivedData) {

    fill('yellow');
    ellipse(receivedData.x, receivedData.y, 10);
  }

}

function draw() {
  
}


function mouseDragged() {
  fill('white');
  ellipse(mouseX, mouseY, 20);

  var sendData = {
    x: mouseX,
    y: mouseY,
  }

  socket.emit('mouse', sendData);
}
