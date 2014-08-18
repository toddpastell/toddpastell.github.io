function Quiz(file) {
	var quiz = this;
	this.questionElement = document.getElementById('question');
	this.answersElement = document.getElementById('answers');
	this.questions = [];
	
	this.nextQuestion = function() {
		console.log( this.questions );
	};
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			quiz.questions = JSON.parse(xmlhttp.response);
			quiz.nextQuestion();
		}
	}
	xmlhttp.open('GET', file, true);
	xmlhttp.send();
}