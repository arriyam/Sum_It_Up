//import { rejects } from "assert";

// function message() {
//     var data = {
//         pls: input.value()
//       }
//       socket.emit('mouse', data)
//       input.hide()
    
// }
function connection(connectState) {
  connectionStatus = connectState;
  socket.emit('comfirmCo', connectionStatus)
}


function replyConnection(connectionStatusComfirm) {
  connectionStatus2 = connectionStatusComfirm;
  //console.log(connectionStatus2)
}

function waitingConnection() {
  background(0, 100, 0);
  text("Waiting other player. TEST", 100, 100)
}



//Display Functions:

function selectingPassage(biblePassages){
  background(0, 0, 255);
  textSize(50)
  text("Selecting passage:", 200, 200)
  socket.emit("chosePassage")
  socket.on("passageChosen", (passageChosed) => {
    passage = passageChosed;
  })
  text(passage, 200, 400)
  if (timer > 20) {
   //console.log(timer)
    selectedPassage = true;
  }
}


function play(countDown) {
   socket.on('results', results)
   background(255, 0, 0)
   text("Playing:", 200, 200)
   text(passage, 400, 200)
   text((countDown.toString()+ " / " + timeAnswer.toString()) , 200, 300)
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

   if (countDown > timeAnswer) {
    background(255, 0, 0)
    text("Time Up!", 200, 200)
    input.hide()
    button.hide()
    }
  }
}

function results(scores) {
  scoringScrn = true;
  mainScores = {
    player1: scores.player1,
    player2: scores.player2
  }


}

function scoringScreen() {
  background(100, 100, 0)
  rounds = true;
  text(mainScores.player1, 250, 250)
  text(mainScores.player2, 250, 300)
  scoreTimer++;
  if (scoreTimer>200) {
    scoringScrn = false;
  }
  
}