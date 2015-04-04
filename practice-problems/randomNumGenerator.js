// collect 2 numbers from user
// print a random whole number that falls between these two numbers
// TODO: deal with non-number inputs

// collect num1
var num1 = parseInt(prompt("Give me a number!"));

// collect num2
var num2 = parseInt(prompt("Give me a different number!"));
// do not accept num2 if it is equal to num1
while(num2===num1){
  num2 = parseInt(prompt("Give me a DIFFERENT number!")); 
}
// build a func to subtract the smaller num from the larger num
var range = function(a,b){
  if(b>a) {
    return b-a;
  }
  else { return a-b; }
};
// invoke the range function on num1 and num2 
var rangeOfNums = range(num1,num2);

// use Math methods to generate random num 
// store in variable to return to user
var randomNum = Math.floor(Math.random()*rangeOfNums) +1;

// alert the randomNum to user
alert("Your number is " + randomNum);
document.write();