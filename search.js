document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('enter');

	button.addEventListener('click', function(){

		var subreddit = document.getElementById('search').value;
		var stringURL = "http://www.reddit.com/r/";

		stringURL = stringURL.concat(subreddit);

		chrome.tabs.create({
    	 	'url': stringURL,
    	 	'selected': true
		});

	})

})
