function purple(el){
	if (el.src.match("images/highend1.png")){
		playSound;
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/bare.png")){
		playSound2;
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/nyx-liquid.png")){
		playSound2;
		// if the image is an orange, change it to a cherry!
	}  else if (el.src.match("images/fentygloss.png")){
		playSound;
		// if the image is a lemon, change it to an orange!
	}
}

function playSound() {
	document.getElementById('Correct Answer').play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}
function playSound2() {
	document.getElementById('Wrong Answer').play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}