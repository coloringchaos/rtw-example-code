// P5 STUFF

var wave;
var theAmp, theFreq; //will use mouse position for synth

function setup(){
	createCanvas(windowWidth, windowHeight);
	cursor(CROSS);
	wave = new p5.Oscillator();

	//set properties for our wave
	wave.setType('sine'); //what kind of wave?
	wave.start();
	wave.freq(440); //440Hz is the note A
	wave.amp(0.5); //between 0 1
}

function draw(){
	theAmp = map(mouseY, 0, height, 1, 0);
	theFreq = Math.floor(map(mouseX, 0, width, 100, 1200));

	wave.freq(theFreq);
	wave.amp(theAmp);

	console.log(theFreq);
}






// var wave;
// var bgColor;
// var slider;

// function setup() {
// 	createCanvas(100, 100);

// 	bgColor = 'cornflowerblue';

// 	//slider from 100 to 1200, start at 440
// 	slider = createSlider(100, 1200, 440); 

// 	//NEW OSCILLATOR OBJECT
// 	wave = new p5.Oscillator();

// 	//set properties for our wave
// 	wave.setType('sine'); //what kind of wave?
// 	wave.start();
// 	wave.freq(440); //440Hz is the note A
// 	wave.amp(0); //between 0 1
// }

// function draw() {
// 	background(bgColor);
// 	wave.freq(slider.value());
// }

// function mouseClicked(){
// 	//if canvas is clicked, start sound
// 	if(mouseX>0 && mouseX<width && mouseY>0 && mouseY<height){
// 		wave.amp(0.75, 1); //fade in over 1 second

// 		bgColor = 'lightseagreen';
// 	}
// 	//if anywhere else on tne page is clicked, stop
// 	else{
// 		wave.amp(0, 1);
// 		bgColor = 'cornflowerblue';
// 	}
// }


