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
