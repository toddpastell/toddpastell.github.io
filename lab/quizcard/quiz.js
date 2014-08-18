function Quiz(file) {
	this.questionElement = document.getElementById('question');
	this.answersElement = document.getElementById('answers');
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(xmlhttp);
	}
	xmlhttp.open('GET', file, true);
	xmlhttp.send();
}