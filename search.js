document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('enter');

	button.addEventListener('click', function(){
		var searchTerm = document.getElementById("search").toString();
		var stringURL = "http://www.reddit.com/r/";

		stringURL = stringURL.concat(searchTerm);
		chrome.tabs.create({
    	 	'url': stringURL,
    	 	'selected': true
		});
	})
})
