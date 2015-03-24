// 2.1 Looping a Triangle
/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

var row = "#"; 
while (row.length <= 7) {
  console.log(row);
  row = row + "#";
}

// 2.2 FizzBuzz
/* 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
*/

for(var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
   console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

// clever solution

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}


// 2.3 Chess Board
/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it 
works for any size, outputting a grid of the given width and height. 
*/

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "#";
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);

// 3.1 Minimum

function min (a, b) {
	if (a < b) {
		return a;
	}
	else {
		return b;
	}
}

// 3.1 Minimum book solution
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}



// 3.3 Bean Counter 

// First figure out the function for Bs 
function countBs(string) {
  counter = 0;
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      counter++;
    }
  }
  return counter;
}

// Then make a function that takes in 2 params 

function countChar(string, n) {
  counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == n) {
      counter++;
    }
  }
  return counter;
}

// then modify countBs to take in countChar

function countBs(string) {
  return countChar(string, "B");
}



// 3.2 isEven

function isEven(n) {
  if (n < 0) {
    n = (-n); // this still returns undefined for neg numbers - why can't I make n pos before proceeding? 
  }
  else {
    if (n === 0) {
      return true;
    }
    else if (n === 1) {
      return false;
    }
    else {
      return isEven(n-2); 
    }
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// 3.2 Solution

function isEven(n) {
  if (n == 0) // why two '==' vs 3? 
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



// Ch 4
// This example demonstrates some methods that array objects have:

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);
// → ["Mack", "the"]





