var connectionStatus = false;
var connectionStatus2 = false;
var socket;
var countDown = 0;
var timer = 0;
var biblePassages = ["1", "2", "3", "4", "5", "6", "7", "8"]
var timeAnswer = 3200;
var selectedPassage = false;
var passage;
var selected = false;
var answered = false;
var connectionPORT = 'http://localhost:3000/' //|| 'https://bibleanalysis.herokuapp.com/' 
var scoringScrn = false;
var mainScores = {
  player1: 0,
  player2: 0
}
var scoreTimer = 0;
var rounds = false;

function setup() {  
  createCanvas(600, 600)
  background(0, 100, 200);
  socket = io.connect(connectionPORT) //
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
      //socket.on('results', results)
      play(countDown);
      if (scoringScrn) {
        scoringScreen();
      }
     
    }
    countDown++
    }

  timer ++


}

