// P5 STUFF

var sensor1;
var sensor2;

var mouse;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('lavender');
	fill('darkcyan');
	noStroke();

	ellipse(width/2, height/2, sensor1+50, sensor2+50);

	mouse = Math.floor(map(mouseX, 0, width, 0, 255));
}

function mouseClicked(){
	socket.emit('mouse', mouse);
	console.log("sent value to the server: " + mouse);
}


// all non-p5 javascript needs to go inside init 
// so that it executes once the page has loaded
function init(){

}

window.addEventListener('load', init);


