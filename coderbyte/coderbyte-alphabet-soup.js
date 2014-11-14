/* Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.  */

function AlphabetSoup (str) {
  str = str.toLowerCase();
  str = str.split("");
  var str1 = str.sort();
  str1 = str1.join("");
  str1 = str1.trim();
  return str1;
}

console.log(AlphabetSoup("coder bYte"));
