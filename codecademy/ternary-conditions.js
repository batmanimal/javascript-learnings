var isArthur = false;

var weapon = isArthur ? "Excalibur" : "Longsword";
// 	some condition^   ^tern    ^if true	   ^if false
console.log(weapon); // "Longsword" 

// use in concatenation
console.log("Current weapon: " + isArthur ? "Excalibur" : "Longsword"); // "Excalibur" (wrong)
              // + gets precedence over ?, isArthur eval as bool and added to string, which evals to truthiness
              // falsey vals: null, NaN, "", undefined, false, 0 

console.log("Current weapon: " + (isArthur ? "Excalibur" : "Longsword")); // "Current weapon: Longsword" (true)

// compound ternary 
return +new Date()

// 

var isHero = true;
var character;

if (isHero) {
  character = "Dhuun";
} else {
  character = "Pesky Gnat";
}

character = isHero ? "Dhuun" : "Pesky Gnat"; 

