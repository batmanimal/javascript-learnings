// TODO: deal with non-number inputs

// collect num1 from user
var num1 = parseInt(prompt("Give me a number!"));

// collect num2 from user
var num2 = parseInt(prompt("Give me a different number!"));

// do not accept num2 if it is equal to num1
while (num2 === num1){
  num2 = parseInt(prompt("Give me a DIFFERENT number!")); 
}

// build a func to subtract the smaller num from the larger num
var sortNums = function (a,b){
  if (b > a){
    return b-a;
  }
  else { return a-b; }
};
// invoke the sortNums function on num1 and num2 
var differenceOfNums = sortNums(num1, num2);

// find the smaller num
var returnSmallerNum = function (a,b){
	if (b < a){
		return b;
	} 
	else { return a; }
};

// create variable to store the smaller of the two nums
var smallerNum = returnSmallerNum(num1, num2);

// use Math methods to generate random num 
// store in variable to return to user
// need to start from the smaller number, rather than start from 0
var randomNum = Math.floor(Math.random() * (differenceOfNums + 1)) + smallerNum;

// alert the randomNum to user
alert("Your number is " + randomNum);
document.write();