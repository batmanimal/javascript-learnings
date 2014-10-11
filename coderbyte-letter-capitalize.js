function LetterCapitalize(str) { 
  var str2 = str.toLowerCase();
  str2 = str2.split(" ");
  for(var i = 0; i < str2.length; i++) {
    str2[i] = str2[i].charAt(0).toUpperCase() + (str2[i].substr(1,str2[i].length-1));
  }
  str2 = str2.join(" ");
  // code goes here  
return str2;
}

// another version

function LetterCapitalize(str) { 

  var last = ' ';
  var res = '';
  
  for (var i = 0; i < str.length; i++) {
    if (last == ' ') {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
    
    last = str[i];
  }
  
  // code goes here
  return res; 
            
}
