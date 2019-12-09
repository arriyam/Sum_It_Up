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
var emmited = false;
var clientAns;
var first = true;
var processTime = 0;

app.use(express.static('public')); //show static files in 'public' directory
console.log('Server is running');
const io = socket(server);




// var content;
// fs.readFile('response1.txt', function read(err, data) {
//     if (err) {
//         throw err;
// 	}
//     content = data;
// });
// console.log(content);
var player = "Player 1"
var assigned1 = false;
//P5-------------------------------------
io.on('connection', (socket) => {
	player = "Player 1"
	assigned1 = false;
	//player = "Player 1"
	//io.emit('assignPlayer', player)
	//player = "Player 2"
	
	socket.on('requestAssign', ()=>{
		if (assigned1 == false) {
		player = "Player 1"
		assigned1 = true;
		io.emit('assignPlayer', player)
		} else {
			player = "Player 2"
			//console.log('player 2')
			io.emit('assignPlayer', player)	
		}
	})

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
		//console.log('Number of connections: ' + io.engine.clientsCount);
		//console.log(connectState)
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
	
		player = "Player 2"
		io.emit('assignPlayer', player)
		socket.on('requestAssign',()=>{
			
			if (first){
				clientAns = "Player 1"
				first = false;
			} else {
				clientAns = "Player 2"
			}
			//clientAns=true;
			//io.emit("clientAnswer", clientAns)
			//console.log('requestAssign: ' + clientAns)
		})
		socket.on('comfirmCo', (connectionStatus) => {
			let connectionStatusComfirm = connectionStatus; //sets value to another variable
			socket.broadcast.emit('startGame', connectionStatusComfirm); //sends back the cofirmation
			player = "Player 2"
			io.emit('assignPlayer', player)
			//io.emit('playerState', playerState);
			//playerState = "player 2"
			//console.log("test: " + clientID[1])
			//io.to(clientID[1]).emit('playerState', playerState);
		})

		socket.on('chosePassage', () => { //randomly choses a passage for players and memorizes which of the previous ones were used
			
			if(!already) {
			//console.log("___________________")
			passageChosed = getRandomInt(2)
			console.log(passageChosed)
				// while (passageMemory.includes	(passageChosed) == true){
				// passageChosed = getRandomInt(10)
				// console.log(passageChosed)
				// //console.log("memory: " + passageMemory)
				// //firstSelect=false;
				// }
				// passageMemory.push(passageChosed)
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


		socket.on('answerIN', (answer) => {
			//console.log("1: " + player1IN)
			//console.log("2: " + player2IN)
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
			fs.createWriteStream('output.txt')
			fs.createWriteStream('output1.txt')
			fs.createWriteStream('output2.txt')
			fs.createWriteStream('response1.txt')
			fs.createWriteStream('response2.txt')

			fs.writeFileSync('output.txt', data.passage, (err) => { //contains passage ref.	
			 })
			fs.writeFileSync('output1.txt', data.player1IN, (err) => { //contains input for player 1	
			})
			fs.writeFileSync('output2.txt', data.player2IN, (err) => { //contains input for player 2 
			})
			// PythonShell.run('algorithm.py', null, function (err) {
			// 	if (err) throw err;
			// 	console.log('running python');
			// 	var player1OUT = fs.readFileSync('response1.txt','utf8')
			// 	var player2OUT = fs.readFileSync('response2.txt','utf8')
			// 	console.log('player 1: ' + player1OUT)
			// 	console.log('player 2: ' + player2OUT)
			//  });	 
			var stallingServer = true;
			io.emit('loading', stallingServer)
			setTimeout(resultScores, 2000)

			
					function resultScores() {
					//console.log('te')
					stallingServer = false;
					io.emit('loading', stallingServer)
					var player1OUT = getRandomInt(99)//fs.readFileSync('response1.txt','utf8')
					var player2OUT = getRandomInt(99)//fs.readFileSync('response2.txt','utf8')
			
					console.log(player1OUT)
					console.log(player2OUT)
			
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
						player2: points2,
						player1percent: player1OUT,
						player2percent: player2OUT
					}
					//console.log(scores)	
					//console.log()
					if (!emmited) {
					io.emit('results', scores)
					//console.log('emmited')
					emmited = true;
					}
					
					already=false;
					player1IN=undefined;
					player2IN=undefined;
				}
			}
		
			}) 

		}
		
})


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  
function checkWinner(player1OUT, player2OUT) {
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