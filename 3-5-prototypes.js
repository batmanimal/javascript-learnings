var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

//The only problem is that the cowboy-devs don’t have time to go through the dozens of lists 
// they are getting and count each specific type of cattle being imported, i.e. the number of cows, bulls, or a calfs. 
// Since the only use the cowboys have for arrays is to make these lists of cattle objects, they’ve asked you to 
// go ahead and add a function, called countCattle, to the Array prototype that will allow any array list of Cows to 
// access precisely how many bulls, cows, or calfs are present in the array. 
// The function should accept a parameter and return a number value.


Array.prototype.countCattle = function (kind) {
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if(this[i].type == kind) {
      count++;
    }
  }
  return count;
};
    
