document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('enter');

	button.addEventListener('click', function(){
		var searchTerm = document.getElementById("search");
		var stringURL = "http://www.reddit.com/r/";
		document.write(stringURL);

		stringURL.append(searchTerm);
		chrome.tabs.create({
    	 	'url': stringURL;
		});
	})
})