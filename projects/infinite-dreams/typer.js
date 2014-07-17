function Typer(element, text, interval, callback) {
	var index = 0;
	var id = setInterval(function() {
		element.innerHTML += text[index];
		index++;
		if(!text[index]) {
			clearInterval(id);
			if(callback)
				callback();
		}
			
	}, interval);
}
