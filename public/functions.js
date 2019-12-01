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
  text("Waiting other player", 100, 100)
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
  if (timer > 200) {
   //console.log(timer)
    selectedPassage = true;
  }
}


function play(countDown) {
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
   } else {

   if (countDown > timeAnswer) {
    background(255, 0, 0)
    text("Time Up!", 200, 200)
    input.hide()
    button.hide()
}
   }

 }