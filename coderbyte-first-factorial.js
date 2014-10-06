// Have the function FirstFactorial(num) take the num param and return the factorial of num. 

function FirstFactorial(num) { 
  if (num === 0) {
    return 1;
  }
  else {
    return num * FirstFactorial(num - 1);
  }
}
