// P5 STUFF

var song; //variable to hold our audio file
var bgColor;
var amplitude; //store the amplitude value for the song

//preload any sound files
function preload(){
	song = loadSound('everything.m4a');
}

function setup(){
	createCanvas(windowWidth, windowHeight);

	bgColor = 'cornflowerblue';

	//create a new Amplitude object 
	amplitude = new p5.Amplitude;
}

function draw(){
	background(bgColor);

	var level = amplitude.getLevel();

	/* size converts the amplitude (0-1) to a value we can 
	use for the ellipse size */
	var size = map(level, 0, 1, 0, 700);

	ellipse(width/2, height/2, size, size);

	if(song.isPlaying()){
		bgColor = 'orchid';
	}else{
		bgColor = 'cornflowerblue';
	}
}

function mouseClicked(){
	if(song.isPlaying()){
		song.stop();
		console.log("stopped song");
		
	} else{
		song.play();
		console.log('playing song');
	}
}
















//// THIS READS THE VOLUME FROM THE MIC ON YOUR COMPUTER
// var mic;

// function setup() {
// 	createCanvas(windowWidth, windowHeight);

// 	mic = new p5.AudioIn(); //built into p5 sound library
// 	mic.start(); // start listening to the microphone
// }

// function draw() {
// 	background('orchid');
// 	//getLevel is a method of AudioIn object
// 	var volume = mic.getLevel(); 
// 	// console.log(volume);

// 	ellipse(width/2, height/2, volume * 200, volume * 200);
// }


//// OTHER JS STUFF CAN GO HERE
// function init(){


// }

// window.addEventListener('load', init);


