/* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

function LongestWord(sen) { 
  sen = sen.trim();
  sen = sen.replace(/[^\w\s]/gi, "");
  var longest = 0;
  if (sen.indexOf(" ") != -1) 
  {
    sen = sen.split(" "); 
    {
      for(var i = 0; i < sen.length; i++) 
      { 
        if(sen[i].length > longest) 
        {
        longest = sen[i].length;
          longestWord = sen[i];
        }
      }  
    } 
  } else 
    {
      longestWord = sen;
    }
  return longestWord;
}
