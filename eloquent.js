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
			//input[key] = action(input[key]); // this changes original input object - don't want to do this 
			action(input[key]);
		}
	}
}

// build simple function 
var sum = 0; // counter var
var sumOf = function(number) {
  sum += number;
};

// test forEach on array
var numbers = [1, 2, 3, 4, 5];
forEach(numbers, sumOf);
console.log(sum); 
// 15

// test forEach on object
var numbersObj = { 
	1: 1, 
	2: 2,
	3: 3,
	4: 4,
	5: 5
};
sum = 0; // reset counter var to 0 

forEach(numbersObj, sumOf);  
console.log(sum);
// 15 

// *** functions that create new functions
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// true


// ** filter ** 
// this function filters out elements that do not pass a test 
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

filter(numbers,test); // [1,2,3,4,5]
filter(numbersObj,test); // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
filter(numbersObj, test2); // { '4': 4, '5': 5 }
filter(numbers, test2); // [4, 5] 




