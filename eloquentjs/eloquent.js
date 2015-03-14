// Chapter 5 Notes 

// *** forEach **
// iterate over object or array and do something to each element 
function forEach(input, action) {
	// condition to check for array 
	if (input.constructor === Array) {
		for (var i = 0; i < input.length; i++)
			action(input[i]);
	}
	// condition to check for object 
	else if (input.constructor === Object) {
		for (var key in input) {
			//input[key] = action(input[key]); // this changes original input object - don't want to do this!  
			action(input[key]);
		}
	}
}


 
// build simple sumOf function to use in your forEach test
var sum = 0; // counter var
var sumOf = function(number) {
  sum += number;
};

// test array
var numbers = [1, 2, 3, 4, 5];
// run forEach on array
forEach(numbers, sumOf);
console.log("the below was forEach'd");
console.log("the sum is " + sum); 
// the sum is 15

// test object
var numbersObj = { 
	1: 1, 
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6
};

// run forEach on object 
sum = 0; // reset counter var to 0 
forEach(numbersObj, sumOf);  
console.log("the below was forEach'd");
console.log("the sum is " + sum);
// the sum is 21 

// *** functions can even create new functions *** 
/* function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); */
// true


// ** filter ** 
// this function filters out elements that do not pass a test and returns the new object - does not modify the input object 
function filter(input, test) {
	if (input.constructor === Array) {
		var passed = [];
		for (var i = 0; i < input.length; i++) {
			if (test(input[i])) {
				passed.push(input[i]);
			}
		}
	}
	else if (input.constructor === Object) {
		var passed = {};
		for (var key in input) {
			if (test(input[key])) {
				passed[key] = input[key]; 
			}
		}
	}
console.log("the below was filtered");
console.log(passed);
}

// create a simple test function 
var test = function (a) {
	if (typeof a === "number") {
		return a;
		}
};
// and another one 
var test2 = function (a) {
	return a > 3;
};
// test transform function 
var testTransform = function(a) {
	return a*2;
};

filter(numbers, test); // [1,2,3,4,5]
filter(numbersObj,test); // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
filter(numbersObj, test2); // { '4': 4, '5': 5 }
filter(numbers, test2); // [4, 5] 


// *** map ***
// this function transforms an input by applying a function to all its elements and building a new array or object with the returned values
// the returned array will have the same length as the input array
function map(input, transform) {
	if (input.constructor === Array) {
		var mapped = [];
		for (var i = 0; i < input.length; i++) {
			mapped.push(transform(input[i]));
		}
		return mapped;
	}
	else if (input.constructor === Object) {
		var mapped = {};
		for (var key in input) {
			mapped[key] = transform(input[key]);
		}
		return mapped;
	}
}

console.log("the below was mapped");
console.log(map(numbers, testTransform));
console.log("the below was mapped");
console.log(map(numbersObj, testTransform));

// *** reduce ***
// this function computes a single value from an array or object input 
function reduce(input, combine, start) {
	if(start == undefined) {
		start = 0;
	}
  var current = start;
  if (input.constructor === Array) {
  	for (var i = 0; i < input.length; i++) {
  		current = combine(current, input[i]);
  	}
  	return current;
  }
  else if (input.constructor === Object) {
  	for (var key in input) {
  		current = combine(current, input[key]);
  	}
  	return current;
  }
}
// test function
var testCombine = function(a, b) {
  return a + b;
};
console.log("the below was reduced");
console.log(reduce(numbers, testCombine, undefined));
console.log("the below was reduced");
console.log(reduce(numbersObj, testCombine, 0));



// EXERCISES 

/* 5.1 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array 
that has all the elements of the input arrays. */
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log("the output of ex 5.1 is below"); // log to keep track of what exercise I'm on 
console.log(arrays.reduce(function(a,b) { // access reduce as a method of arrays 
	return a.concat(b)},  // params (function, start)
	[] )); // empty array is start value 




