// Here is the array we will store results in
var multiples = [];

function multiplesOf(base, i) {
  // Base case
  if (i === 0) {
	// Write the array multiples to the console
	console.log(multiples);
  }
  // Recursive case
  else {
    multiples[i - 1] = base * i;
	// Add a recursive function call
	return multiplesOf(base, i-1);
  }	
}

multiplesOf(2, 5);
