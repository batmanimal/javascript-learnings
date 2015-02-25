
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


var testArr = [1,2,3,4,5];
var testObj = {name: "Batman", toys: "people", food: "animals"};

function plusOne (n) {
	return n+1;
}

function funcCaller (func, arg) {
	return func(arg);
};
console.log(funcCaller(plusOne, 1));

function firstVal (arr, func) {
	return func(arr[0]);
}

console.log(firstVal(testArr, plusOne));

// Write a function called checkValue that searches an array for a value. 
// It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var checkValue = function (arr, value) {
	if (arr.indexOf(value) > 0) {
		return true;
	} else {
		return false;
	}
}; 
 
// Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var newCheckValue = function (arr, value) {
	var isInArray = false;
	var testForValue = function (element) {
		if(element === value) {
			isInArray = true;
		}
	};
	forEach(arr, testForValue);
	return isInArray;
};

// Write a loop that pushes all the values in an object to an array.

var objectPusher = function (obj) {
	// empty array
	var newArr = [];
	// create function to push each element to array
	var elementPusher = function(element) {
		newArr.push(element);
	};
	// loop over each element of object
	forEach(obj, elementPusher);
	// return array
	return newArr;
};

console.log(objectPusher(testObj));
// ["Batman", "people", "animals"]

console.log(testArr.indexOf(3));
console.log(checkValue(testArr, 1));
console.log(newCheckValue(testArr, "eggs"));