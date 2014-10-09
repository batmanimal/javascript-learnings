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

// Inheritance
/* Below are the data for three posts that need to be created using the genericPost as a prototype (as in the last challenge). The cowboys have given you all the data you’ll need to build each using the prototype and then assign unique property values through modification. Call each of your posts post<number>, just like you did in the last challenge.

x: 0, y: -3,
postNum: 8,
connectionsTo: 10

x: 6, y: 8,
postNum: 9,
connectionsTo: 10

x: -2, y: 3,
postNum: 10,
connectionsTo: 8, 9

The cowboy-devs have prepared a list of additions that need to happen for certain special fence posts. After you’ve built the above three posts, add properties to those post where the cowboy-devs have deemed appropriate.

Any fence posts with an even ‘y’ coordinate have a birdhouse, and therefore have a numBirds property initially set to 0.
Any fence posts connected to Post #9, but are not Post #9, have a property of weathervane initially set to “N”.
Even numbered fence posts have emergency lights, and a lightsOn property initially set to false.
The base fencepost is again provided for your reference. There are many single lines of code to be entered on this one, so be careful to assign all properties necessary.
*/ 

var genericPost = {
  x: 0, 
  y: 0, 
  postNum: undefined, 
  connectionsTo: undefined,
  sendRopeTo: function ( connectedPost ) {
    if(this.connectionsTo == undefined){
      var postArray = [ ];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);
post8.lightsOn = false;

post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10);
post9.numBirds = 0;

post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);
post10.weathervane = "N";
post10.lightsOn = false;
    
