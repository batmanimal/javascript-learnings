// hoisted version

function theBridgeOfHoistingDoom( ){
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;
  function fellowship(){
    return "friends";
  }
  sword = "sting";
  dwarf = function (){ 
    return "axe";
  }
  fall = "Fly you fools!";
  fellowship = function (){
    return "broken";
  }
  ring();
  return sword;
}

// what gets returned?
/* Too tough? Okay, before the return statement is ever reached, the ring variable is called as a function. But since that variable does not have any contents by the time it is asked to be a function, the program will return a ‘Type Error’ saying that ring is not yet a function. theBridgeOfHoistingDoom will therefore be unable to complete, or reach the return of sword as expected.
*/

// original version
function theBridgeOfHoistingDoom( ){
  function fellowship(){
    return "friends";
  }
  var sword = "sting";
  var dwarf = function(){ 
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function(){
    return "broken";
  };
  ring();
  return sword;
  fellowship = function(){
    return "mines"
  };
  sword = function(){
    return "glamdring";
  };
  var ring = function(){
      return "precious";
  };
  
}
