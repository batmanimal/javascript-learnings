function ArithGeo(arr) {
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  var arith = true;
  var geo = true;
  
  for (var i = 0; i < arr.length-1; i++) 
  {
    if (arr[i+1] - arr[i] !== diff) {
      arith = false;
    }
    if (arr[i+1] / ratio !== arr[i]) {
      geo = false;
    }
  }
  
  if(arith === true) {
    return "Arithmetic";
  }
  else if (geo === true) {
    return "Geometric";
  }
  else {
    return -1;
  }
}
