function Quiz() {
	this.questionElement = document.getElementById('question');
	this.answersElement = document.getElementById('answers');
	this.questions = [];
	this.correctAnswer;
	
	this.nextQuestion = function() {
		while(this.answersElement.hasChildNodes()) {
			this.answersElement.removeChild(this.answersElement.lastChild);
		}
		var randomCorrectIndex = Math.floor(Math.random() * 4);
		for(var i = 0; i < 4; i++) {
			var randomIndex = Math.floor(Math.random() * this.questions.length);
			var question = this.questions[randomIndex];
			if(i == randomCorrectIndex) {
				this.correctAnswer = question.b;
				this.questionElement.innerHTML = question.a;
			}
			var answer = new Answer(this, question.b);
			this.answersElement.appendChild(answer.element);
		}
	};
	
	this.checkAnswer = function(answer) {
		var quiz = this;
		if(answer.text == this.correctAnswer) {
			answer.element.setAttribute('class', 'btn correct');
			window.setTimeout(function() {
				quiz.nextQuestion();
			}, 500);
		} else {
			answer.element.setAttribute('class', 'btn incorrect');
			window.setTimeout(function() {
				answer.element.setAttribute('class', 'btn');
			}, 500);
		}
			
	};
	
	this.loadSubject = function(filename) {
		var quiz = this;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				quiz.questions = JSON.parse(xmlhttp.response);
				quiz.nextQuestion();
			}
		}
		xmlhttp.open('GET', filename, true);
		xmlhttp.send();
	};
}

function Answer(quiz, text) {
	this.text = text;
	var answer = this;
	
	this.element = document.createElement('a');
	this.element.setAttribute('class', 'btn');
	this.element.setAttribute('href', '#' + text);
	this.element.innerHTML = text;
	this.element.addEventListener('click', function(evt) {
		evt.preventDefault();
		quiz.checkAnswer(answer);
	});
}
