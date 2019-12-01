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
var results = {
	player1: undefined,
	player2: undefined
}


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

		socket.on('chosePassage', () => {
			if(!already) {
				passageChosed = getRandomInt(10)
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
			console.log("1: " + player1IN)
			console.log("2: " + player2IN)
			//--------------
			//call function to judge and give percentage
			
			player1OUT = 63;
			player2OUT = 78;
			results = {
				player1: player1OUT,
				player2: player2OUT
			
			}
			socket.emit('results', results)
	
		}) 

	}
		
	

})


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  