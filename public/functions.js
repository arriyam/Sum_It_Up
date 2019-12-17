

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
  // input.style('position', 'relative')
  // input.position(width, height)
  // button.position(width/2, height+50)
   input.style('position', 'absolute')
   input.style('top', '85%')
   input.style('border', 'none')
   input.style('display', 'inline-block')
   input.style('border-radius', '10px')
   input.style('line-height', '4')
   input.style('fontSize', '18px')
   input.style('min-width', '40%')
   button.style('position', 'absolute')
   button.style('top', '86%')
   button.style('left', '75%')
   button.style('color', '#fff !important')
   button.style('background-color', '#60a3bc')
   button.style('text-transform', 'uppercase')
   button.style('transition', 'all 0.4s ease 0s;')
   button.style('padding', '20px')
   button.style('border-radius', '50px')
   button.style('border', 'none')
   button.style('display', 'inline-block')
   playingIMG.resize(xScreen, yScreen)
   image(playingIMG, 0, 0)
   socket.on('results', results)
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
    a.style('position', 'absolute')
    a.style('top', '70%')
    a.style('left', '45%')
    a.style('color', '#fff !important')
    a.style('background-color', '#60a3bc')
    a.style('text-transform', 'uppercase')
    a.style('transition', 'all 0.4s ease 0s;')
    a.style('padding', '20px')
    a.style('border-radius', '50px')
    a.style('border', 'none')
    a.style('display', 'inline-block')

  background(100, 0, 100)
  textSize(40)
  textStyle(BOLD);
  if (mainScores.player1 > mainScores.player2) {

    gameOverP1Img.resize(xScreen, yScreen)
    image(gameOverP1Img, 0, 0)
    text(mainScores.player1, 120, 390)
    text(mainScores.player2, 560, 390)
  } else if (mainScores.player1 < mainScores.player2) {
    gameOverP2Img.resize(xScreen, yScreen)
    image(gameOverP2Img, 0, 0)
    text(mainScores.player1, 120, 390)
    text(mainScores.player2, 560, 390)
  } else if (mainScores.player1 === mainScores.player2) {
    gameOverTieImg.resize(xScreen,yScreen)
    image(gameOverTieImg,0,0)
    text(mainScores.player1, 120, 390)
    text(mainScores.player2, 560, 390)
   // text('TIE!', 250, 250)
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