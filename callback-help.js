var forEach = function (input, func) {
	// check if input is obj or array
	if (Array.isArray(input)) {
	// loop for array
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	} else if (input.constructor === Object) {
		// could also do if (typeof input === 'object' && typeof input !== null)
			// typeof is an operator so do not need to use () 
	// for in loop for object
		for (var key in input) {
			func(input[key]);
		}
	}
	// do nothing if the input is empty 
	// else return a default error message 
};

/*var testInput = [1,2,3,4,5];
var testFunc = function (n) { 
	console.log(n*3); 
};
*/

//forEach(testInput, testFunc);

var map = function (input, func) {
	// set empty array to store mapped inputs
	var mapped = [];
	// use forEach as a callback
	// var element 
	// return mapped array
	var newFunc = function (element) { 
		var newElement = func(element); // not a function! 
		mapped.push(newElement);
	};
	forEach(input, newFunc); // calls newFunc
	//var element = func(input[i]);
	/*for (var i = 0; i < input.length; i++) {
		newInput = func(input[i]);
		mapped.push(newInput);
	} */
	return mapped; 
};

var testMap = [1,2,3,4,5];
var testMapFunc = function (n) {
	return (n+2);
};

console.log(map(testMap, testMapFunc));




