// P5 STUFF
var env;
var wave;

//4 properties of the envelope
var attackTime = 0.001; //measured in time
var decayTime = 0.3; //measured in time
var susPercent = 0.4; //AMPLITUDE, btwn 0-1
var releaseTime = 0.5; //measured in time

function setup() {
	var canvas = createCanvas(200, 200);
	background(200);

	env = new p5.Env();
	env.setADSR(attackTime, decayTime, susPercent, releaseTime);

	wave = new p5.Oscillator();
	wave.amp(env); //set amp using the envelope
	wave.start();
	wave.freq(220);

	canvas.mousePressed(envAttack);
	//this is another way to do: function mousePressed(){ playSound();}
}

function draw() {

}


function envAttack(){
	console.log('attack triggered');
	env.triggerAttack();
	background('orchid');
}

function mouseReleased(){
	console.log('triggered release');
	env.triggerRelease();
	background(200);
}

