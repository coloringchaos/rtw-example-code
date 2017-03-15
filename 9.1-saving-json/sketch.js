var words = []

function getText() {
	var x = document.getElementById("myText").value;
	console.log("submitting word: " + x);

	//send it to thes server to add to the array
	socket.emit('dataEntered', x);
}

// when we have data, display it to the screen
function showWords(){ 

	for (var i=0; i<words.length; i++) {
		var container = document.getElementById('theContainer');
		//add a div to the array
		container.innerHTML += ('<div class="fruit">'+words[i]+'</div>');
    }
}


