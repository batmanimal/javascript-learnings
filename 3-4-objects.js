/* Upon your completion of those data structures, the ranger-devs have asked you to build a vehicle finding function that will accept a vehicle and list of vehicle objects, and return the current location of the requested vehicle. Do the following:

Put all the vehicle objects in an array by passing in only variable names. Call the array vehicles.
Build a function expression assigned to a variable findVehicle, which accepts the name of the vehicle sought, as well as an array of vehicles. Call your parameters name and list.
In findVehicle, check each object in the list parameter to find the object with a type of name. When found, return the storage location of that object.
Call your built function to find the location of the Submarine.
*/

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = ["Motorboat", "Jet Ski", "Submarine"]; 

var findVehicle = function (name, list) {
  for (var i = 0; i < list.length; i++) {
    if(name = list[i]) {
      return list.storedAt[i];
    }
  }
};

findVehicle("Submarine", vehicles);

// changing objects
/* They need to add some important information and power upgrades to their existing vehicles. Using only dot notation and new properties weapon (which gets a string) and submersible (which gets a boolean), as well as existing properties, make the following changes and additions, in order, to the Ocean’s transportation:

4 seats will be added to the sides of the Motorboat, changing the amount of people it can carry.
The Jet Ski is not submersible.
The Submarine will acquire “Torpedoes”.
The Motorboat is not submersible.
The Jet Ski will be fitted with new pirate-zapping “Lasers”.
Bunk beds will be placed in the Submarine, doubling its potential staff.
A “Rear-Mounted Slingshot” will be added to the Motorboat.
The Submarine is submersible.
The existing objects are provided for your reference. When upgrading weapons, use the exact string found in the list.
*/

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle1.submersible = false;
vehicle1.capacity = vehicle1.capacity + 4;

vehicle2.weapon = "Lasers";
vehicle2.submersible = false;

vehicle3.weapon = "Torpedoes";
vehicle3.submersible = true;
vehicle3.capacity = vehicle3.capacity*2;

// Blinders On: Accessing sub-arrays

/* Completely remove the existing bulb array from the Lighthouse Rock object, including its property.
Add in the new array using only its variable name and the property name weaponBulbs.
Examine the array and write a line of code that logs out the name of the superblinder with the highest wattage using only object and array notation (no hard-coding the message with the name).
*/

var superBlinders = [ ["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  bulbs: [ 200, 500, 750 ],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;

console.log(lighthouseRock.weaponBulbs[2][0]);

// To the Lighthouse, Quick!
// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/8 

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger (location, name, skillz, station) {
  location.numRangers++;
  location["ranger" + location.numRangers] = {who: name, sklz: skillz, stn: station};
} 

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2); 
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

// Man Your Bulb Stations!
/* Build a function that takes in a location object, examines every ranger’s station number, and retrieves the name of the super-blinder to which they’re assigned from the array of the super-blinders. When the right super-blinder is found for a ranger-dev, alert it in a message to the ranger in the following format:

Avast, me hearties!
There be Pirates nearby! Stations!
<name>, man the <superblinder>!
<name>, man the <superblinder>!
<name>, man the <superblinder>!
In other words, the entire list of assignments should be contained within one alert. Hmm, sound familiar?

Call your function dontPanic, and when it is completed, call it on the lighthouseRock variable which is provided for you, complete with new ranger-dev objects as if they had been there from the get-go.
*/ 

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic (location) {
  var list = "";
  for(var i = 1; i <= superBlinders.length; i++) {
    list = list + location["ranger"+i].name + ", man the " + location.weaponBulbs[location["ranger"+i].station-1][0] + "!\n";
  }
  alert("Avast, me hearties!\n" + "There be Pirates nearby! Stations!\n" + list);
  }
}

dontPanic(lighthouseRock);

// Super tricky one involving shift and push arrays

/* Build a function, called relieveDuty, that accepts a vehicle object and a day of the week as parameters. Name the vehicle object vehicle and the day of the week day. This function should take care of all of the following requirements:

Search only over all of the ranger objects contained within the vehicle object, creatively using the existing numRangers property to do so. No need to look at the other properties in the vehicle.

All existing ranger objects will need to be sorted into arrays, offDuty and onDuty. The offDuty array will be returned from the function. The onDuty array will contain staying rangers that need to be renumbered.

All onDuty rangers will be re-added to the vehicle object, with their property names rebuilt in the order that rangers were added to onDuty. Ranger numbers should start with 1. Remember to remove the existing property.

At the end of these operations, remember to adjust the numRangers property to contain the new, smaller amount of rangers.

After building the function, call it on vehicle3 and "Friday". The resulting array of objects should be stored in a variable called offToday.

*/

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};
function relieveDuty (vehicle, day){
  var offDuty = [ ];
  var onDuty = [ ];
  for(var i = 1; i<=vehicle["numRangers"]; i++){
    if(vehicle["ranger" + i]["dayOff"] == day){
      offDuty.push(vehicle["ranger" + i]);
    }
    else{
      onDuty.push(vehicle["ranger" + i]);
    }
    delete vehicle["ranger" + i];
  }
  vehicle.numRangers -= offDuty.length;
  for(var j = 1; j<=vehicle["numRangers"]; j++){
    vehicle["ranger" + j] = onDuty.shift();
  }
  return offDuty;
}
var offToday = relieveDuty(vehicle3, "Friday");



// Enumeration 1
/* Build a declared function called listGuns that accepts a container of spearguns, called guns, as a parameter and logs out the name of each Speargun. Additionally, use speargun to refer to the property names inside your function. When your function is built, call it on the given shipment of guns.
*/

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns (guns) {
  for (var speargun in guns) {
    console.log(speargun);
  }
}

listGuns(rockSpearguns);

// Enumeration 2
/* Modify your existing listGuns function to log out the following message for each Speargun contained with the shipping container:

Behold! <speargun name>, with <heft style> heft!
Additionally, use only bracket notation for accessing properties within your function. For efficiency of code, create NO new variables. You’ll still want to call the function at the end, so you can leave that line of code intact.
*/

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns (guns) {
  for (var speargun in guns) {
    console.log("Behold! " + speargun + ", with " + guns[speargun]["heft"] + " heft!");
  }
}

listGuns(rockSpearguns);

// Enumeration 3

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

rockSpearguns["listGuns"] = function (){
  for(var property in this){
    if(this[property]["heft"] != undefined) {
      console.log("Behold! " + property +
                ", with " + this[property]["heft"] +
                " heft!");
    }
  }
};

rockSpearguns["listGuns"]();

