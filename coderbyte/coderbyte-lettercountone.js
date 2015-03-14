function LetterCountI (str) {
	var repeatedLetters = 1;
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if(str.charAt(i+count) === str.charAt(i + (count+1))) {
			repeatedLetters++;
		}
		count++;
	}
	return repeatedLetters;

}

console.log(LetterCountI("cheese"));


function NumberAddition(str) { 
  var sum = 0; // counter variable
  str = str.replace(/[^0-9]/g, " ").trim().split(" "); // replace non numbers w spaces and turn str into array
  for (var i = 0; i < str.length; i++) {
    sum += Number(str[i]); // traverse array and turn each element into Number, and increment sum for each
    }     
  return sum;
}
   
      
   console.log(NumberAddition("gg66j8 h41p"));
