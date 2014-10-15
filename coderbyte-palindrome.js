function Palindrome(str) { 
  for (var i = 0; i < str.length; i++) {
    str = str.toLowerCase();
    str = str.replace(/[^\w\s]/, "");
    if (str.charAt(i) == " ") {
      str = str.replace(str.charAt(i), "");
    }
  }
  str1 = str.split("").reverse().join("");
  if(str1 == str) { return true; 
                  }
  else {return false;
       }
}
   

// another version

function Palindrome(str) { 
  var lets = str.match(/[a-z]/ig).join('').toLowerCase();
  function isPalin(c){
    if(c.length <= 1) return true;
    if(c[0] !== c[c.length-1]) return false;
    return isPalin(c.substr(1,c.length-2));
  }
  return isPalin(lets);
}
   
