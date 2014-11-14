/* Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. */


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
