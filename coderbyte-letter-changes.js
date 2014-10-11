/* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */

function LetterChanges(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyza";
  var newString = "";
  for(var i = 0; i<str.length; i++) 
  {
    if (alpha.indexOf(str.charAt(i)) != -1) 
    {
      var newChar = alpha.search(str.charAt(i));    
      newString += alpha.charAt(newChar+1);
    } 
    else {
      newString += str.charAt(i);
    }
  }
  for(var j = 0; j<newString.length; j++) 
  {
    newString = newString.replace("a", "A");
    newString = newString.replace("e", "E");
    newString = newString.replace("i", "I");
    newString = newString.replace("o", "O");
    newString = newString.replace("u", "U");
  }
  return newString;
}
 

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("ABC def!!"));
