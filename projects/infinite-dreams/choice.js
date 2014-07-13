function Choice(page, nextPage, text) {
	this.page = page;
	this.nextPage = nextPage;
	this.text = text;
	var choice = this;
	
	this.element = document.createElement('a');
	this.element.setAttribute('class', 'btn');
	this.element.setAttribute('href', '#' + nextPage);
	this.element.innerHTML = text;
	this.element.addEventListener('click', function(evt) {
		evt.preventDefault();
		choice.page.story.loadPage(choice.nextPage);
	});
}
