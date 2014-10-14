var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

var reduceArrays = function(array) { 
  function why (a, b) { 
    return a.concat(b); } 
  return array.reduce(why);  }

console.log(reduceArrays(arrays));
