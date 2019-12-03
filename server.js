//Server back-end variables:
const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //tells to host server on localhost:3000
var connectState = false;
const coLimit = 2;
var clientID = []
var plays= 0;


//Playing variables:
var passageChosed;
var already = false;
var submitted = false
var player1IN;
var player2IN;
var player1OUT;
var player2OUT;
var results = {
	player1: undefined,
	player2: undefined
}
var passageMemory = [];
var firstSelect=true;

//score system variables:
var points1 = 0
var points2 = 0


app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);

//P5-------------------------------------
io.on('connection', (socket) => {
	// console.log("new Con: " + socket.id)
	//Waits for a new connection
	if (io.engine.clientsCount > coLimit) { //checks if there are more then 2 client connections
		socket.emit('err', {message: 'reach the limit of connections'})
		socket.disconnect() //if more then 3 --> disconnects
		console.log('Disconnected')
		clientID = []; //Empty clientID array
	} else {
		if (io.engine.clientsCount == 2) {
			connectState = true;
		}
		console.log('New connection: ' + socket.id);
		clientID.push(socket.id) //Adds socket ID to clientID array
		console.log('Number of connections: ' + io.engine.clientsCount);
		console.log(connectState)
		socket.broadcast.emit('newConnection', connectState);
		if (clientID.length > coLimit) {
			plays = 0;
            clientID.shift();
		}

		socket.on('comfirmCo', (connectionStatus) => {
			let connectionStatusComfirm = connectionStatus; //sets value to another variable
			socket.broadcast.emit('startGame', connectionStatusComfirm); //sends back the cofirmation
		})

		socket.on('chosePassage', () => { //randomly choses a passage for players and memorizes which of the previous ones were used
			if(!already) {
			//console.log("___________________")
				passageChosed = getRandomInt(10)
				while (passageMemory.includes(passageChosed) == true){
				passageChosed = getRandomInt(10)
				console.log(passageChosed)
				//console.log("memory: " + passageMemory)
				//firstSelect=false;
				}
				passageMemory.push(passageChosed)
				already = true;
				
			}
		
			socket.emit('passageChosen', passageChosed)
		})


		socket.on('answerIN', (answer) => {
			if (submitted) {
				player2IN = answer;
			}
			if (!submitted) {
			player1IN = answer;
			submitted = true;
			}
			//console.log("1: " + player1IN)
			//console.log("2: " + player2IN)
			//--------------
			//call function to judge and give percentage

			if (player1IN != undefined && player2IN != undefined) {
			player1OUT = player1IN.length;
			player2OUT = player2IN.length;
			// console.log(player1OUT)
			// console.log(player2OUT)
	
			if (player1OUT > player2OUT) {
				//console.log("1 point")
				points1++;
			} else if (player2OUT > player1OUT) {
				//console.log("2 point")
				points2++;
			} else if (player1OUT == player2OUT) {
				points1++;
				points2++;
			}
			//checkWinner();
			scores = {
				player1: points1,
				player2: points2
			
			}
	
			console.log()
			io.emit('results', scores)
		//	console.log('emmited')

			}
		}) 

	}
		
	

})


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  
function checkWinner(player1OUT, player2OUT) {
	if (player1OUT > player2OUT) {
		console.log("1 point")
		points1++;
	} else if (player2OUT > player1OUT) {
		console.log("2 point")
		points2++;
	} else if (player1OUT == player2OUT) {
		points1++;
		points2++;
	}

}