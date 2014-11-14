/* Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) {
  var newStr = str.replace(/[^a-zA-Z \+\-]/, ""); //regex to remove all except word chars and protect + and -
  for(var i = 0; i < newStr.length; i++) {
    if( (newStr.charAt(i) != "+" && newStr.charAt(i) != "-") )  {
      var index = newStr.indexOf(newStr.charAt(i));
      if( (newStr.charAt(index-1) == "+" || newStr.charAt(index-1) == "-") && (newStr.charAt(index+1) == "+" || newStr.charAt(index+1)=="-" ) ) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
console.log(SimpleSymbols("+z+z+z+"));
