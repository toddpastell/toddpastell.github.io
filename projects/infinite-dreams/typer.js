function Typer(element, text, interval) {
	var index = 0;
	var id = setInterval(function() {
		element.innerHTML += text[index];
		index++;
		if(!text[index])
			clearInterval(id);
			
	}, interval);
}
