//Server back-end variables:
const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
let {PythonShell} = require('python-shell') //to run python file
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //tells to host server on localhost:3000
var connectState = false;
const coLimit = 2;
var clientID = []

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
var plays= 0;

//score system variables:
var points1 = 0
var points2 = 0
var emmited = false;
var clientAns;
var first = true;
var processTime = 0;
var alreadyChosed = []
var find = true;

app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);
var player = "Player 1"
var assigned1 = false;
//P5 Socket.io Connection------------------
io.on('connection', (socket) => {
	clientAns = ""
	scores = {
		player1: 0,
		player2: 0
	}	
	alreadyChosed=[]
	player = "Player 1"
	assigned1 = false;
	//Waits for a new connection
	if (io.engine.clientsCount > coLimit) { //checks if there are more then 2 client connections
		first = true;
		clientAns=""	
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
		//console.log('Number of connections: ' + io.engine.clientsCount);
		socket.broadcast.emit('newConnection', connectState);
		scores = {
			player1: 0,
			player2: 0
		}
		
		player1IN = undefined;
		player2IN = undefined;
		submitted = false;

		if (clientID.length > coLimit) {
			plays = 0;
            clientID.shift();
		}
		socket.on('requestAssign',()=>{
			scores = {
				player1: 0,
				player2: 0,
				player1percent: 0,
				player2percent: 0
			}
			if (first){
				clientAns = "Player 1"
				console.log('in')
				first = false;
			} else {
				clientAns = "Player 2"
				console.log('in2')
			}
			//clientAns=true;
			io.emit("clientAnswer", clientAns)
			//console.log('requestAssign: ' + clientAns)
		})
		socket.on('comfirmCo', (connectionStatus) => { //confirms connection between 2 clients
			scores = {
				player1: 0,
				player2: 0
			}
			let connectionStatusComfirm = connectionStatus; //sets value to another variable
			socket.broadcast.emit('startGame', connectionStatusComfirm); //sends back the cofirmation to start game
			points1 = 0
			points2 = 0
		})
			
		socket.on('chosePassage', () => { //randomly choses a passage for players and memorizes which of the previous ones were used
			scores = {
				player1: 0,
				player2: 0
			}
			if(!already) {
			//console.log("___________________")
			while (find) {
			console.log(alreadyChosed)
			passageChosed = getRandomInt(10);
			console.log('if' + alreadyChosed.includes(passageChosed))
			if (alreadyChosed.includes(passageChosed)) {
				find = true;
			} else {
				alreadyChosed.push(passageChosed);
				find=false;
			}
		}
		 		already = true;
				scores = {
					player1: 0,
					player2: 0
				}
				player1IN = undefined;
				player2IN = undefined;
				submitted = false
				emmited = false;
				submitted = false;
				
			}
			io.emit('assignPlayer', player)
			socket.emit('passageChosen', passageChosed)
		})


		socket.on('answerIN', (answer) => { //gets answers from players (clients)
			emmited = false
			if (submitted) {
				player2IN = answer;
			}
			if (!submitted) {
			player1IN = answer;
			submitted = true;
			}
	
			const fs = require('fs') 
  
			// Data which will write in a file.
			if (player1IN != undefined && player2IN != undefined) {
			let data = {
				passage: passageChosed,
				player1IN,
				player2IN
				}

			console.log(player1IN)
			console.log(player2IN)
			//makes sure transfer files are created and emptied
			fs.createWriteStream('output.txt')
			fs.createWriteStream('output1.txt')
			fs.createWriteStream('output2.txt')
			fs.createWriteStream('response1.txt')
			fs.createWriteStream('response2.txt')
			fs.writeFileSync('output.txt', data.passage, (err) => { //contains passage ref.	
			console.log(data.passage)
			})
			fs.writeFileSync('output1.txt', data.player1IN, (err) => { //contains input for player 1	
			})
			fs.writeFileSync('output2.txt', data.player2IN, (err) => { //contains input for player 2 
			})
			//Runs python file for main aglorithm:
			//Uses natural language processing, keywod check, and and grammar check in order to give most accurate percentage
			PythonShell.run('algpart2.py', null, function (err) {
				if (err) throw err;
				console.log('running python');
				var player1OUT = fs.readFileSync('response1.txt','utf8')
				var player2OUT = fs.readFileSync('response2.txt','utf8')
				console.log('player 1: ' + player1OUT)
				console.log('player 2: ' + player2OUT)
			 });	 
			var stallingServer = true;
			//Waits for results
			io.emit('loading', stallingServer)
			setTimeout(resultScores, 2000)

			 		//receives results and sends them back to the clients
					function resultScores() {
					stallingServer = false;
					io.emit('loading', stallingServer)
					var player1OUT = fs.readFileSync('response1.txt','utf8')
					var player2OUT = fs.readFileSync('response2.txt','utf8')
					
					console.log(player1OUT)
						console.log(player2OUT)
			
					if (player1OUT > player2OUT) {
						points1++;
					} else if (player2OUT > player1OUT) {
						points2++;
					} else if (player1OUT == player2OUT) {
						points1++;
						points2++;
					}
					scores = {
						player1: points1,
						player2: points2,
						player1percent: player1OUT,
						player2percent: player2OUT
					}
	
					if (!emmited) {
					io.emit('results', scores)
					emmited = true;
					find = true;	
					}
					already=false;
					player1IN=undefined;
					player2IN=undefined;
				}
			}
		
			}) 

		}
		
})

//Functions------------------
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  

function checkWinner(player1OUT, player2OUT) {
	first = true;
	assigned1 = false;
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
}