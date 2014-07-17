function Story(pagesDict) {
	this.narrativeElement = document.getElementById('narrative');
	this.choicesElement = document.getElementById('choices');
	this.pages = {};
	this.activePage;
	
	this.loadPage = function(pageName) {
		var page = this.pages[pageName];
		if(!page)
			console.warn('Page not found: ' + pageName);
		var pageElement = page.element.cloneNode(true);
		this.narrativeElement.appendChild(pageElement);
		while(this.choicesElement.hasChildNodes()) {
			this.choicesElement.removeChild(this.choicesElement.lastChild);
		}
		var callback;
		var story = this;
		for(var index in page.choices) {
			var choice = page.choices[index];
			if(page.choices.length == 1) {
				callback = function() {
					story.loadPage(choice.nextPage);
				};
				break;
			}
			this.choicesElement.appendChild(choice.element);
		}
		Typer(pageElement, page.text, 30, callback);
		scrollTo(0, document.body.scrollHeight);
	};
	
	for(var pageName in pagesDict) {
		var pageDict = pagesDict[pageName];
		var page = new Page(this, pageDict.text);
		var choices = [];
		for(var index in pageDict.choices) {
			var choiceDict = pageDict.choices[index];
			choices.push(new Choice(page, choiceDict.next, choiceDict.text));
		}
		page.setChoices(choices);
		if(this.pages[pageName])
			console.warn('Overwritting existing page: ' + pageName);
		if(!this.activePage)
			this.activePage = pageName;
		this.pages[pageName] = page;
	}
	this.loadPage(this.activePage);
}
