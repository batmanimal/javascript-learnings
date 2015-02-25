function nonsense (string) {
	var blab = function () {
		console.log(string);
	};
	//setTimeout(blab, 2000);
	return blab;
}

var blabLater = nonsense("hi");
var blabAgainLater = nonsense("bye");
blabLater();
blabAgainLater();

var nameMaker = function (firstName) {
	var innerNameMaker = function (lastName) {
		console.log(firstName + " " + lastName);
	};
	return innerNameMaker;
};

var nameMakerJ = nameMaker("j");
nameMakerJ("kim");

//var storyWriter = function()

var addWords = function(string) {
	var story = "";
	story = story + " " + string; 
	return story;
};

var instance = addWords("wut");
console.log(instance);
