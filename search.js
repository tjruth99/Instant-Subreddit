document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('enter');

	button.addEventListener('click', function(){

		var inputBox = document.getElementById('search');
		var stringURL = "http://www.reddit.com/r/";
		var subreddit = inputBox.value;

		stringURL = stringURL.concat(subreddit);

		chrome.tabs.create({
    	 	'url': stringURL,
    	 	'selected': true
		});

	})

})
