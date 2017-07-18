var playing = false;
var audioElem = window.document.querySelector("#audioPlayer");
var playBut = window.document.querySelector("#playPause");
var stopBut = window.document.querySelector("#stop");

playBut.addEventListener('click', play);
stopBut.addEventListener('click', stop);

function play()
{
	audioElem.play();
	playing = true;
	defineTextButton();
}

function pause()
{
	audioElem.pause();
	playing = false;
	defineTextButton();
}

function stop()
{
	audioElem.pause();
	audioElem.currentTime = 0;
	playing = false;
	defineTextButton();
}

function defineTextButton()
{
	if (playing == true)
	{
		playBut.firstChild.nodeValue = "Pause";
		playBut.removeEventListener('click',play);
		playBut.addEventListener('click', pause);
	}

	else if (playing == false)
	{
		playBut.firstChild.nodeValue = "Play";
		playBut.removeEventListener('click',pause);
		playBut.addEventListener('click', play);
	}

	else
		console.log("la variable playing n'est ni true ni false, wtf");
}
