// collect num1 from user
do {
	// Use Math.floor to account for decimals, while still allowing user to input a float value like 0.01
	// Use parseFloat bc parseInt evaluates non-zero values under 1 as NaN 
	var num1 = Math.floor(parseFloat(prompt("Give me a number!")));
}
while (num1 !== 0 && !num1); // do not accept falsy values except for 0 

// collect num2 from user
do {
	var num2 = Math.floor(parseFloat(prompt("Give me a different number!")));
}
while (num2 !== 0 && !num2); 

// do not accept num2 if it is equal to num1
while (num2 === num1){
	num2 = parseInt(prompt("Give me a DIFFERENT number!")); 
}

// find and store the min and max
var min = Math.min(num1, num2);
var max = Math.max(num1, num2);

// use Math.random to generate random num 
// store in variable to return to user
// need to start from the min (inclusive), rather than start from 0
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// alert the randomNum to user
alert("Your number is " + randomNum);
document.write();