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
    player2:0,
    player1percent:0,
    player2percent:0 
  }
  endGame=false;
  connectionStatus = connectState;
  socket.emit('comfirmCo', connectionStatus)
}


function replyConnection(connectionStatusComfirm) {
  connectionStatus2 = connectionStatusComfirm;
  socket.on('assignPlayer', (player)=>{
    if (!clientAlreadyAssigned) {
    activePlayer=player;
    clientAlreadyAssigned=true;
    }
  })
  //console.log(connectionStatus2)
}

function waitingConnection() {
  waitingPlayerIMG.resize(xScreen, yScreen)
  image(waitingPlayerIMG, 0, 0);
  if (!clientAlreadyAssigned){
    console.log('request')
  socket.emit('requestAssign', "")
  socket.on('assignPlayer', (player)=>{
    activePlayer=player
    
  })
  clientAlreadyAssigned=true;
}
  console.log(activePlayer)
  // Displays the image at point (0, height/2) at half size
 //image(waitingPlayerIMG, 0, height / 2, waitingPlayerIMG.width / 2, waitingPlayerIMG.height / 2);
  //background(0, 100, 0);
  //text("Waiting other player. TEST", 100, 100)
  //console.log('you are player 1')
}



//Display Functions:
function selectingPassage(biblePassages){
  input.value("")
  selectingPasImg.resize(xScreen, yScreen)
  image(selectingPasImg, 0, 0)
  textSize(50)
  text("Round: " + roundNum, 240, 550)
  answered = false;
  scoringScrn=false;
  textSize(30)
 // text("Selecting passage:", 200, 200)
  socket.emit("chosePassage")
  socket.on("passageChosen", (passageChosed) => {
    passage = passageChosed;
  })
  //console.log(timer)
  text(biblePassages[passage], 180, 350)
  if (timer > 300) {
   //console.log(timer)
   selectedPassage = true;
  }
}


function play(countDown) {
 // console.log('play')
   //input.empty()
   playingIMG.resize(xScreen, yScreen)
   image(playingIMG, 0, 0)
   socket.on('results', results)
  // background(255, 0, 0)
   //text("Playinug:", 200, 200)
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
     waitOtherPlay.resize(xScreen, yScreen)
     image(waitOtherPlay, 0, 0)
     //background(100, 100, 100)
     //text("Waiting other player", 200, 200)
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
// console.log('test')
  scoringScrn = true;
  if (!received) {
  mainScores = {
    player1: scores.player1,
    player2: scores.player2,
    player1percent: scores.player1percent,
    player2percent: scores.player2percent
    
  }
  received = true;
  }

}

function scoringScreen() {
  resultsImg.resize(xScreen, yScreen)
  image(resultsImg, 0, 0)
  //background(100, 100, 0)
  //console.log('scoring scren')
  //rounds = true;
  textSize(40)
  text(mainScores.player1, 220, 450)
  text((mainScores.player2), 570, 450)
  textSize(40)
  text((mainScores.player1percent + " %"), 45, 450)
  text((mainScores.player2percent+ " %"), 390, 450)
  scoreTimer++;
  //rounds=true;
  
  if (scoreTimer>500) {
    if (rounds) {
      button.hide()
      if (roundNum>=3) {
        endGame=true;


      }
      scoringScrn=false;
      rounds=true;
      selectedPassage=false;
      countDown=timeAnswer;
      timer=0;
      received = false;
      scoreTimer=0;
      increment=false;
   }
    button.hide()
    scoringScrn=false;
    rounds=true;
    selectedPassage=false;
    scoreTimer=0;
    countDown=timeAnswer;
    timer=0;
    received = false;  
    input.hide()
  
  }
  
}

function gameOver() {
  background(100, 0, 100)
  if (mainScores.player1 > mainScores.player2) {
    gameOverP1Img.resize(xScreen, yScreen)
    image(gameOverP1Img, 0, 0)
  } else if (mainScores.player1 < mainScores.player2) {
    gameOverP2Img.resize(xScreen, yScreen)
    image(gameOverP2Img, 0, 0)
  } else if (mainScores.player1 === mainScores.player2) {
    text('TIE!', 250, 250)
  }


  endGame = true;
}

function checkWinner(player1OUT, player2OUT) {
	if (player1OUT > player2OUT) {
    return "Player 1 WINS!"
	} else if (player2OUT > player1OUT) {
		return "Player 2 WINS!"
	} else if (player1OUT == player2OUT) {
		return "Tie!"
	}

}