// P5 STUFF

var sensor;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('lavender');
	fill('darkcyan');
	noStroke();

	ellipse(width/2, height/2, sensor, sensor);
}

// all non-p5 javascript needs to go inside init 
// so that it executes once the page has loaded
function init(){

	// SOCKET STUFF
	var socket = io.connect();

	socket.on('connect', function() {
		console.log("Connected");
	});

	socket.on('sensor', function(data){
		console.log(data);
		sensor = Number(data);
	});

}

window.addEventListener('load', init);


