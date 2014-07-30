function Page(story, text) {
	this.story = story;
	this.text = text;
	this.choices;
	
	this.element = document.createElement('p');
	
	this.setChoices = function(choices) {
		this.choices = choices;
	};
}
