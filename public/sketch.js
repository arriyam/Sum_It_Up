var xScreen = 700
var yScreen = 600
var connectionStatus = false;
var connectionStatus2 = false;
var socket;
var timeAnswer = 3700;
var countDown = timeAnswer;
var timer = 0;
var biblePassages = ["Feeding the Five Thousand", "Wedding at Cana", "The Lost Sheep", "Resuretion of Jesus", "Noah's Arc", "Crucifixion/Death of Jesus", "Jonah Run's Away from God", "Six Days of Creation", "Jesus Walks on Water", "Jesus Heals the Blind"]
var selectedPassage = false;
var passage;
var selected = false;
var answered = false;
var connectionPORT ='https://bibleanalysis.herokuapp.com/'//'http://localhost:3000/' // 
var scoringScrn = false;
var mainScores = {
  player1:0,
  player2:0,
  player1percent:0,
  player2percent:0 
}
var scoreTimer = 0;
var rounds = false
var endGame = false;
var received = false;
var introTimer=0;
var intro=false;
var alreadyPlayer=false;
var activePlayer=undefined;
var clientAlreadyAssigned = false;
var loading;
var loadingS=false;
var roundNum=1;
var increment=false;

function setup() { 
  createCanvas(xScreen, yScreen)
  background(0, 100, 200);
  socket = io.connect(connectionPORT) //
  socket.on('newConnection', connection); //Listens for newConnection event
  socket.on('startGame', replyConnection); //Listens for startGame event (after connection sent back to server)
  input = createInput();
  button = createButton('submit');
  input.hide()  
  button.hide()

  //Image loading
  loadingG = createImg("images/loadingG.gif")
  waitingPlayerIMG = loadImage('images/Waiting.png');
  playingIMG = loadImage('images/playing.png')
  waitOtherPlay = loadImage('images/waitingresponse.png')
  resultsImg = loadImage('images/results.png')
  selectingPasImg = loadImage('images/selecting.png')
  gameOverP1Img = loadImage('images/GameOverP1.png')
  gameOverP2Img = loadImage('images/GameOverP2.png')
  gameOverTieImg = loadImage('images/GameOverTie.png')
  loadingResults = loadImage('images/LoadingResults.png')
  getReadyImg = loadImage('images/GetReady.png')
  a = createA('index.html', 'Back to Main Menu');
  a.hide()
  clientAlreadyAssigned=false;
  player = ""

}
alreadyAssigned=false;
runReq = true;

function draw() {
  if (!alreadyAssigned) {
  alreadyAssigned=true;
  socket.emit('requestAssign')
  socket.on('clientAnswer', (clientAns) => {
    if (runReq) {
    runReq = false 
    activePlayer = clientAns; 
    }
  })
}
  loadingG.hide()
  load();
  if (!loadingS) {
  if (endGame==true) {  
    gameOver();
  } else {
  if (rounds==false) {
    if (scoringScrn) {
      scoringScreen();
    } else {
    if (connectionStatus == false && connectionStatus2 == false) { //makes sure 2 clients are connected
       waitingConnection()
    } else {
      if (!intro) {
        introTimer++;
        getReadyImg.resize(xScreen, yScreen)
        image(getReadyImg, 0, 0)
        textSize(30)
        if (introTimer > 250) {
          intro=true;
 
        } 
      } else {
      if (selectedPassage == false){
        selectingPassage(biblePassages);

      } else if (selectedPassage == true) {
          play(countDown);
        if (scoringScrn) {
          scoringScreen();
        }
      }
      
    }
  }
  }
} else if (rounds==true) { //multiple rounds
  ('rounds')
  if (selectedPassage==false) { //selects passage
    if (!increment) {
      roundNum++
      increment=true;
    }
    selectingPassage(biblePassages);
   } else if (selectedPassage==true){
      socket.on('results', results)
      play(countDown);
      if (scoringScrn) {
        scoringScreen();
      }
    }
   }
timer ++
countDown--
}
  } else {
    loadingG.show()
    loadingG.position(605, 250)
    loadingResults.resize(xScreen, yScreen)
    image(loadingResults, 0, 0)  
  }
}