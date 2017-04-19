// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	// console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}


//FOR JOINING A SPECIFIC ROOM
//the client sends a request for what room they want to join

var theRoom;

// attach Socket.io to our HTTP server
var io = require('socket.io').listen(httpServer);

// handle incoming connections from clients
io.sockets.on('connection', function(socket) {
	// console.log('someone connected');
    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('room', function(data) {
    	//join the specific room that the client choose
        socket.join(data);

        theRoom = data;
        console.log("someone connected to room " + theRoom);

        var greeting = 'welcome to room ' + theRoom + '!';

        io.sockets.in(theRoom).emit('message', greeting);
    });

    socket.on('something', function(){
    	console.log("got something");
    	//got message from the client, send response to only clients in that room
    	io.sockets.in(theRoom).emit('reply', "got your message, here's a reply!");
    });
});


///FOR IMPLEMENTING A CUSTOM NAMESPACE 

// // attach Socket.io to our HTTP server
// var io = require('socket.io').listen(httpServer);

// var nsp = io.of('/my-room');
// nsp.on('connection', function(socket){
//   console.log('someone connected');
// });
// nsp.emit('hi', 'everyone!');



///DEFAULT FROM TEMPLATE
// io.sockets.on('connection', 

// 	function (socket) {
	
// 		console.log("We have a new client: " + socket.id);
		
// 		///MY SOCKET EVENTS HERE


// 		socket.on('disconnect', function() {
// 			console.log("Client has disconnected " + socket.id);
// 		});
// 	}
// );