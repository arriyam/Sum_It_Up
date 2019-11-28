var connectionStatus = false;
var connectionStatus2 = false;
var socket;
var countDown = 0;
var timer = 0;

function setup() {
  createCanvas(600, 600)
  background(0, 100, 200);
  socket = io.connect('http://localhost:3000')
  input = createInput();
  socket.on('newConnection', connection); //Listens for newConnection event
  socket.on('startGame', replyConnection); //Listens for startGame event (after connection sent back to server)
}

function draw() {

  //console.log(connecting)
  if (connectionStatus == false && connectionStatus2 == false) {  
      waitingConnection()
  } else {
    background(255, 0, 0)

    // if (countDown < time) {
    //   play();
    //
    }
  countDown++
  timer ++
  if (countDown > 300) {
      console.log('time up')
      input.hide()
  }

}

