function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){
    return a - b;
  });
  var largest = arr.pop();
  function recursion(target, array){
    if(array.length === 0){
      return target === 0; 
    }
    var n = array[0];
    array = array.slice(1);
    return recursion(target,array) || recursion(target - n, array);
  }
  return recursion(largest,arr);        
}

console.log(ArrayAdditionI([4,6,23,10,1,3]));
