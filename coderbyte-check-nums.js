// Have the function CheckNums(num1, num2) take both params being passed and 
// return the string true if num2 is greater than num1, otherwise the string false. 
// If the parameter values are equal, return the string -1. 

function CheckNums(num1,num2) { 
  if (num2 > num1) {
    return "true";
  }
  else if (num2 == num1) {
    return "-1";
  }
  else {
    return "false";
  }
  return num1 + num2;        
}
