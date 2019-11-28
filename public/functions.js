function message() {
    var data = {
        pls: input.value()
      }
      socket.emit('mouse', data)
      input.hide()
    
}
function connection(connectState) {
  connectionStatus = connectState;
  socket.emit('comfirmCo', connectionStatus)
}


function replyConnection(connectionStatusComfirm) {
  connectionStatus2 = connectionStatusComfirm;
  console.log(connectionStatus2)
}

function waitingConnection() {
  background(0, 100, 0);
  text("Waiting other player", 100, 100)
}



// function play(countDown) {
//   background(255)
//   text("Playing:", 200, 200)

// }