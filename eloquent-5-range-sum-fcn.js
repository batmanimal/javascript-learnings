var sum = function (array) {
  sumOf = 0;
  for (var i = 0; i < array.length; i++) {
    sumOf += array[i];
  }
  return sumOf;
};

function range (start, end, step) {
  var rangeArray = [start];
  var i = start;
  while (i < end - step) {
    i = i + step;
    rangeArray.push(i);
  }
  return rangeArray;
}

var sumOfRange = function (a,b) {
  return sum(range(a,b,1));
};

console.log(sumOfRange(1,10));


// console.log(sum(range(1,100,10)));

// console.log(range(1, 10, 5));

//console.log(sum([1,2,3,4,5]));

