// TODO: deal with non-number inputs

// collect num1 from user
var num1 = parseInt(prompt("Give me a number!"));

// collect num2 from user
var num2 = parseInt(prompt("Give me a different number!"));

// do not accept num2 if it is equal to num1
while (num2 === num1){
  num2 = parseInt(prompt("Give me a DIFFERENT number!")); 
}

// find and store the min and max
var min = Math.min(num1, num2);
var max = Math.max(num1, num2);

// use Math methods to generate random num 
// store in variable to return to user
// need to start from the min (inclusive), rather than start from 0
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// alert the randomNum to user
alert("Your number is " + randomNum);
document.write();