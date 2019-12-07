function assignPlayers() {
  // socket.on('clientAnswer', (clientAns) => {
  //   console.log('inanswerclient')
  //   //clientAlreadyAssigned = clientAns
  // })
  // if (clientAlreadyAssigned) {
  //   activePlaye='Player 2'
  // } else {
  //   activePlayer='Player 1'
  //   //socket.emit('activePlayerEmit', '')

  // }
}


function load() {
  socket.on('loading', (stallingServer)=> {
    loadingS = stallingServer
  })
}


function connection(connectState) {
  mainScores = {
    player1:0,
    player2:0
  }
  endGame=false;
  connectionStatus = connectState;
  socket.emit('comfirmCo', connectionStatus)
}


function replyConnection(connectionStatusComfirm) {
  connectionStatus2 = connectionStatusComfirm;
  //console.log(connectionStatus2)
}

function waitingConnection() {
  waitingPlayerIMG.resize(xScreen, yScreen)
  image(waitingPlayerIMG, 0, 0);
  // Displays the image at point (0, height/2) at half size
 //image(waitingPlayerIMG, 0, height / 2, waitingPlayerIMG.width / 2, waitingPlayerIMG.height / 2);
  //background(0, 100, 0);
  //text("Waiting other player. TEST", 100, 100)
  //console.log('you are player 1')
}



//Display Functions:

function selectingPassage(biblePassages){
  background(0, 0, 255);
  answered = false;
  scoringScrn=false;
  textSize(50)
  text("Selecting passage:", 200, 200)
  socket.emit("chosePassage")
  socket.on("passageChosen", (passageChosed) => {
    passage = passageChosed;
  })
  //console.log(timer)
  text(biblePassages[passage], 200, 400)
  if (timer > 300) {
   //console.log(timer)
   selectedPassage = true;
  }
}


function play(countDown) {
 // console.log('play')
   playingIMG.resize(xScreen, yScreen)
   image(playingIMG, 0, 0)
   socket.on('results', results)
  // background(255, 0, 0)
   //text("Playing:", 200, 200)
   textSize(35)
   text(biblePassages[passage], 150, 200)
   countDownDisplay = Math.round(countDown/60)
   text(countDownDisplay.toString() + " / " + Math.round((timeAnswer/60)-2).toString() , width/2.4, height/1.3)
   input.show()
   button.show()
   button.mousePressed(()=> {
      answered = true;
      //console.log(input.value())
      var answer = input.value() 
      socket.emit("answerIN", answer)
   });
   if (answered == true) {
     button.hide()
     input.hide()
     background(100, 100, 100)
     text("Waiting other player", 200, 200)
   } else {

   if (countDown < 0) {
    background(255, 0, 0)
    text("Time Up!", 200, 200)
    answer = input.value()
    socket.emit('answerIN', answer)
    input.hide()
    button.hide()
    answered = true;
    }
  }
}

function results(scores) {
  console.log('test')
  scoringScrn = true;
  if (!received) {
  mainScores = {
    player1: scores.player1,
    player2: scores.player2
  }
  received = true;
  }

}

function scoringScreen() {
  background(100, 100, 0)
  //rounds = true;
  text(("player 1: " + mainScores.player1), 250, 250)
  text(("player 2: " + mainScores.player2), 250, 300)
  scoreTimer++;
  //rounds=true;
  selectedPassage=false;
  if (scoreTimer>200) {
    if (rounds) {
     endGame=tr
     
     ue;
   }
    input.hide()
    button.hide()
    scoringScrn=false;
    rounds=true;
    selectedPassage=false;
    countDown=timeAnswer;
    timer=0;
    received = false;
  }
  
}

function gameOver() {
  background(100, 0, 100)
  text('End Game', 200, 200)
  text(mainScores.player1, 250, 250)
  text(mainScores.player2, 250, 300)
}
