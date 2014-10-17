// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, i) {    
  // Base case
  if (i === array.length) {
    return;
  } 
  // Action
  array[i] = capitalize(array[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);
