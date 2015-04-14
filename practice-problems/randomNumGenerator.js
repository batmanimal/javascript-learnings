// collect num1 from user
do {
	// Use parseFloat bc parseInt evaluates non-zero values under 1 as NaN 
	var num1 = parseFloat(prompt("Give me a number!"));
}
while (num1 !== 0 && !num1); // do not accept falsy values except for 0 

// collect num2 from user
do {
	var num2 = parseFloat(prompt("Give me a different number!"));
}
while (num2 !== 0 && !num2); 

// do not accept num2 if it is equal to num1
while (num2 === num1){
	num2 = parseInt(prompt("Give me a DIFFERENT number!")); 
}

// find and store the min and max
var min = Math.min(num1, num2);
var max = Math.max(num1, num2);

// if the Math.floor values are the same, ask for a diff whole number
// accounts for edge cases where user inputs something like (5.4, 5.3) and gets 5 [5.0 falls outside 5.3 - 5.4]
while (Math.floor(min) === Math.floor(max)) {
	// reassign num2 (could also reassign num1), and set new min and max
	num2 = parseInt(prompt("Give me a different WHOLE number!"));
	min = Math.min(num1, num2);
	max = Math.max(num1, num2);
}

// store random whole number in variable to return to user
// round up the min value and round down the max value, so you can return inclusive min/max integers
var randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

alert("Your random whole number is " + randomNum);
document.write();