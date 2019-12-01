var connectionStatus = false;
var connectionStatus2 = false;
var socket;
var countDown = 0;
var timer = 0;
var biblePassages = ["1", "2", "3", "4", "5", "6", "7", "8"]
var timeAnswer = 320;
var selectedPassage = false;
var passage;
var selected = false;
var answered = false;

function setup() {
  createCanvas(600, 600)
  background(0, 100, 200);
  socket = io.connect('https://bibleanalysis.herokuapp.com/') //
  socket.on('newConnection', connection); //Listens for newConnection event
  socket.on('startGame', replyConnection); //Listens for startGame event (after connection sent back to server)
  input = createInput();
  button = createButton('submit');
  input.hide()
  button.hide()
 
}

function draw() {

  //console.log(connecting)
  if (connectionStatus == false && connectionStatus2 == false) {  
      waitingConnection()
  } else {
    if (selectedPassage == false){
      selectingPassage(biblePassages);
    } else if (selectedPassage == true) {
      play(countDown);
    }
    countDown++
    }

  timer ++


}

