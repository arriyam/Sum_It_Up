var xScreen = 700
var yScreen = 600
var connectionStatus = false;
var connectionStatus2 = false;
var socket;
var timeAnswer = 10000;
var countDown = timeAnswer;
var timer = 0;
var biblePassages = ["Feeding the Five Thousand", "Wedding at Cana", "The Lost Sheep", "4", "5", "6", "7", "8"]
var selectedPassage = false;
var passage;
var selected = false;
var answered = false;
var connectionPORT = 'http://localhost:3000/' //'https://bibleanalysis.herokuapp.com/' //
var scoringScrn = false;
var mainScores = {
  player1:0,
  player2:0,
  player1percent:0,
  player2percent:0 
}
var scoreTimer = 0;
var rounds = false;
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
  waitingPlayerIMG = loadImage('images/Waiting.png');
  playingIMG = loadImage('images/playing.png')
  loadingGIFimport = loadImage('images/loading.gif')
  loadingGIF = createImg('images/loading.gif')

}

function draw() {
  load();
  if (!loadingS) {
    loadingGIF.hide()
  //console.log(loadingS)
  //intro=true;
  //console.log(activePlayer)
  //assignPlayers()
  if (endGame==true) {
    gameOver();
  } else {
  //console.log(connecting)
  if (rounds==false) {
    if (scoringScrn) {
      scoringScreen();
    } else {
    if (connectionStatus == false && connectionStatus2 == false) { 
       //play();
       waitingConnection()
      //  if (!clientAlreadyAssigned) {
      //   //console.log('in')
      //   socket.emit('requestAssign', "")
      //   socket.on('clientAnswer', (clientAns) => {
      //    //console.log('in socket')
      //     // activePlayer=clientAns
      //     // console.log()
      // //clientAlreadyAssigned = clientAns
      //   })
      //   clientAlreadyAssigned = true;
      //}
    
    } else {
      if (!intro) {
        introTimer++;
        background(100, 100, 150)
        clientAlreadyAssigned = false;
        if (!clientAlreadyAssigned) {
          console.log('in')
          socket.emit('requestAssign', "")
          socket.on('clientAnswer', (clientAns) => {
            console.log('in socket')
            ///activePlayer=clientAns
            //console.log(activePlayer)
        //clientAlreadyAssigned = clientAns
          })
          clientAlreadyAssigned = true;
        }
        
       // text("Starting")
        //socket.on('playerState', (playerState) => {
          //console.log("plyaer: " + playerState)
          //console. og('in playestate: ' + playerState)
          //text(("You are: " + playerState), 200, 300)
       // })
       textSize(30)
        text('GET READY!!', 200, 200)
        text('GAME STARTING SOON', 200, 400)
        if (introTimer > 200) {
          intro=true;
        } 
      } else {
      if (selectedPassage == false){
        selectingPassage(biblePassages);
        console.log('selec')
        //selectedPassage=true;1
      } else if (selectedPassage == true) {
        //socket.on('results', results)
         // console.log('playing')
          play(countDown);
        if (scoringScrn) {
          scoringScreen();
        }
      }
      
    }
  }
  }
} else if (rounds==true) {
  //console.log('rounds')
  //selectedPassage=false;
  if (selectedPassage==false) {
    if (!increment) {
      roundNum++
      increment=true;
    }
    selectingPassage(biblePassages);
   } else if (selectedPassage==true){
      socket.on('results', results)
      play(countDown);
      if (scoringScrn) {
        sc
        oringScreen();
      }
    }

   }
  
timer ++
countDown--
}
  } else {
    background(255)
    //image(loadingGIF, 200, 400);
    text("Waiting for Results!", 300, 300)
    //image(loadingGIFimport, 50, 50);
    loadingGIF.position(xScreen/2, yScreen/2+50);
    //loadingGIF.resize(50, 50);
    // updates animation frames by using an html
    // img element, positioning it over top of
    // the canvas.
    
  }
}
