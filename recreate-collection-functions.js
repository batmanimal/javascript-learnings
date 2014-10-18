// Filter
// Params: array, predicate (function that tests something on each item) 

// takes in an array and a predicate (test) that items in the array must pass before being pushed into the resulting array

function filter (array, test) { 
  var passed = [];
  for (var i = 0; i < array.length; i++) {  // for loop - could use forEach function here 
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// call the function. created simple test condition to return elements < 1. 

console.log( filter([0,0,0,1], function (x) {return x < 1; }) );
// [0, 0, 0]


// filter for object
// Params: object, test 

function filter (obj, test) {
  var passed = {};
  for (var key in obj) {
   if ( test(obj[key]) ) {
    passed[key] = obj[key]; }
  }
 return passed;
}

// now need to call the function on an object 
