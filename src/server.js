const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(3000); //tells to host server on localhost:3000
var connectState = false;
const coLimit = 2;
var clientID = []
var plays= 0;


app.use(express.static('../public')); //show static files in 'public' directory
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
			console.log('cofirmco')
			let connectionStatusComfirm = connectionStatus; //sets value to another variable
			socket.broadcast.emit('startGame', connectionStatusComfirm); //sends back the cofirmation

		})

	}
		
	


	// }
	// socket.on('message', (data) => {
	// 	//console.log('yes')
	// 	console.log(data);
	// })
})
