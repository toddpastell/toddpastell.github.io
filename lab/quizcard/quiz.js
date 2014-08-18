function Quiz(file) {
	this.questionElement = document.getElementById('question');
	this.answersElement = document.getElementById('answers');
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(xmlhttp);
		if(xmlhttp.readyState == 4 && xmlhttp.status==200) {
			console.log(JSON.parse(xmlhttp.response));
		}
	}
	xmlhttp.open('GET', file, true);
	xmlhttp.send();
}