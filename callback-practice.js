// // callback-practice.js

// // forEach iterates over an input and applies a function to each element 
// var forEach = function (input, func) {
// 	// check for empty arrays or null input
// 	if (input.length === 0 || input === null) {
// 		return input;
// 	}
// 	// if array 
// 	if (Array.isArray(input)) {
// 		// create testCounter array for logging when testing
// 		var testCounter = [];
// 		for (var i = 0; i < input.length; i++) {
// 			testCounter.push(func(input[i]));
// 		}
// 		// return testCounter for test mode only - forEach should not actually return anything 
// 		return testCounter;
// 	}
// 	// if object literal 
// 	else if (typeof input === "object") {  // checks to make sure input is not a function 
// 		// do something else
// 		var testCounter = {};
// 		for (var key in input) {
// 			testCounter[key] = func(input[key]);	
// 		}
// 		return testCounter;
// 	} else {
// 		return "wut";
// 	}
// };


var testArray = [1,2,3,4,5];
var testObject = {1: 1, 2: 2};
var emptyObject = {};
var emptyArray = [];
var testFunc = function (n) {
	return n>1;
};


// console.log(forEach( function (n) { return 1}, testFunc));
// console.log(forEach(0, testFunc));
// console.log(forEach(testArray, testFunc));
// console.log(forEach(testObject, testFunc));
// console.log(forEach(emptyObject, testFunc));
// console.log(forEach(emptyArray, testFunc));


var forEach = function (input, func) {
	if (input.length === 0 || input == null) {
		return input;
	}
	else if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	}
	else if (typeof input === "object") {
		for (var key in input) {
			func(input[key]);
		}
	} else {
		return "wut";
	}
};

// map iterates over an input, applies a function to each element, and returns an array of the mapped elements
var map = function (input, func) {
	var mapped = [];
	var pushIt = function(element) {
	//	var mappedElement = func(element);
		mapped.push(func(element));
	};
	forEach(input, pushIt);
	return mapped;
};

// filter returns an object that contains only elements from an input that pass a given test
var filter = function(input, test) {
	var passed = [];
	var pushFiltered = function(element) {
		if (test(element)) {
			passed.push(element);
		}
	};
	forEach(input, pushFiltered);
	return passed;
};




console.log(filter(testArray, testFunc));
console.log(filter(testObject, testFunc));
console.log(map([], testFunc));
console.log(map({}, testFunc));
console.log(map("hi", testFunc));
console.log(map(0, testFunc));



var forEach = function (input, func) {
	// if input is empty
	if (input.length === 0 || input == null) {
		// return the input
		return input;
	}
	// if input is array
	else if(Array.isArray(input)) {
		// loop over each element 
		for(var i = 0; i < input.length; i++) {
			// apply func to each element
			func(input[i]);
		}
	}
	// if input is object
	else if (constructor.input === Object) {
		// loop over each element 
		for(var key in input) {
			// apply func to each element	
			func(input[key]);
		}
	} else {
	// else input is not valid 
		return "wut";
	}
		// return an error message 
};

var map = function(input, func) {
	var mapped = [];
	// if array
	if(Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			// push mapped elements
			mapped.push(func(input[i]));
		}
	}
	// if object
	else if (input.constructor === Object){
		// push mapped elements
		for(var key in input) {
			mapped.push(func(input[key]));
		}
	}
	return mapped;	
};

var newMap = function(input, func) {
	var mapped = [];
	var pushToMapped = function (element) {
		mapped.push(func(element));
	};
	forEach(input, pushToMapped);
	return mapped;
};

var testArr = [1,2,3,4,5];
var testFunc = function(a) {
	return a+1;
};

console.log(map(testArr, testFunc));
// []