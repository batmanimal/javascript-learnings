// What you would see in the wild (good practice)

function friendifyList(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + ' Says Hi!';
  }
return array; // not necessary but nice in case the programmer wants to print something
}

var array1 = [1,2,3,4,5];

console.log(friendifyList(array1));

// Return undefined

function friendifyList(array) {
  var friendlyList = [];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + ' Says Hi!';
  }
}

var array1 = [1,2,3,4,5];

console.log(friendifyList(array1)); // logs what the func returns

// Returns the new array

function friendifyList(array) {
  var friendlyList = [];
  for (var i = 0; i < array.length; i++) {
    friendlyList.push(array[i] + ' Says Hi!');
  }
  return friendlyList;
}

var array1 = [1,2,3,4,5];

console.log(friendifyList(array1));

// Logs list + undefined 

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
  }
}

var array1 = [1,2,3,4,5];

console.log(logEach(array1)); // logs what the func returns



