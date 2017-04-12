////////////////////////////
/////// HTTP PORTION ///////
////////////////////////////

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

var brightness;

/////////////////////////////
///////  WEB SOCKETS  ///////
/////////////////////////////

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);
		
		///MY SOCKET EVENTS HERE

		socket.on('mouse', function(data){
			brightness = data;
			console.log("brightness: " + brightness); 

			//send this value to the serial port to light led
			sendBrightness();
		});

		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});

	}
);


////////////////////////////
/////// SERIAL STUFF ///////
////////////////////////////

//npm install serialport

var serialport = require('serialport'); // include the library
var SerialPort = serialport.SerialPort; // make a local instance of it
 

///////// FIRST THINGS FIRST: list serial ports:

//comment out after it's working
// serialport.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//   });
// });


// get port name from the command line:
// SET THIS TO YOUR OWN PORT
var portName = '/dev/cu.usbmodem14411';

//then actually open th eport
var myPort = new SerialPort(portName, {
	baudRate: 9600,
	// look for return and newline at the end of each data packet:
	parser: serialport.parsers.readline("\n")
});

//serial events
myPort.on('open', showPortOpen);
myPort.on('data', sendSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);


function sendBrightness() {
    // convert the value to an ASCII string before sending it:
    myPort.write(brightness.toString());
    console.log('Sending ' + brightness + ' out the serial port');
}


function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}
 
function sendSerialData(data) {
	// console.log(data);
   	io.sockets.emit('sensor', data);
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}
