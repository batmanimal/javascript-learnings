// Using the JavaScript language, have the function VowelCount(str) 
// take the str string parameter being passed and return the number of vowels 
// the string contains (ie. "All cows eat grass" would return 5). 
// Do not count y as a vowel for this challenge. 

function VowelCount(str){
  var counter = 0;

  for (i = 0; i < str.length; i++) {
  	if (str.charAt(i) == 'a' || str.charAt(i) == 'A' || str.charAt(i) == 'e' || str.charAt(i) == 'E'
  	|| str.charAt(i) == 'i' || str.charAt(i) == 'I' || str.charAt(i) == 'o' || str.charAt(i) == 'O'
  	|| str.charAt(i) == 'u' || str.charAt(i) == 'U') 
      {
  		counter++;
  	}
  }
return counter;  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());   


// another user's code

function VowelCount(str) { 

  str = str.toLowerCase(); // changed the string to lowercase
  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') 
       cnt++;
  }
  
  // code goes here
  return cnt; 
            
}
   
// this call is needed to test your function
// keep this when you submit your code
VowelCount(str)                         


// ExOh

function ExOh(str) { 
  countx = 0;
  counto = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      countx++;
    }
    if (str.charAt(i) === "o") {
      counto++;
    }
  }
  if (countx == counto) {
    return true;
  }
  else {
    return false;
  }
}

// another version 

function ExOh(str) { 
str = str.toLowerCase();
  var x = 0, o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'x') x++;
    else if (str[i] == 'o') o++;
  }
  
  // code goes here
  return x == o; 
            
}

// First factorial coderbyte

function FirstFactorial(num) { 
  if (num === 0) {
    return 1;
  }
  else {
    return num * FirstFactorial(num - 1);
  }
}

// another version 
function FirstFactorial(num) { 
  var nNum=1;
  for (var i=1;i<=num;i++) {
    nNum*=i;
  }
  return nNum
}

