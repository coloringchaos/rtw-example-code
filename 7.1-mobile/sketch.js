//motion and orientation variables are global
var alpha, beta, gamma; //ORIENTATION
var xmotion, ymotion, zmotion; //MOTION

// P5 STUFF

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var bg = map(alpha, 0, 360, 0, 255);
	background(bg);
}

// OTHER JAVASCRIPT DOWN HERE
// run this AFTER the page has loaded

function init(){

	///// ORIENTATION

	// function for orientation
	function handleOrientation(event){
		alpha = Math.floor(event.alpha);
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);

		//send values to the DOM so that we can see them
		document.getElementById('alpha').innerHTML = alpha;
		document.getElementById('beta').innerHTML = beta;
		document.getElementById('gamma').innerHTML = gamma;

		socket.emit('orientation', {
			'alpha': alpha,
			'beta': beta,
			'gamma': gamma
		});
	}

	// event listerner for orientation - built in to js
	window.addEventListener('deviceorientation', handleOrientation, true);



	///// MOTION

	function deviceMotion(event){
		var acc = event.acceleration; //will return acceleration object

		//extract x, y, z from acceleration
		xmotion = Math.abs(acc.x);
		ymotion = Math.abs(acc.y);
		zmotion = Math.abs(acc.z);

		document.getElementById('xmov').innerHTML = Math.floor(xmotion);
		document.getElementById('ymov').innerHTML = Math.floor(ymotion);
		document.getElementById('zmov').innerHTML = Math.floor(zmotion);

	}

	window.addEventListener('devicemotion', deviceMotion, true);


} //end of init function

window.addEventListener('load', init);





