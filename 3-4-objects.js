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

