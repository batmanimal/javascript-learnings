// warningMaker function with zones

function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push(location);
    var zonesList = ""; // this is the part I was missing - tried to combine this with line 11 
    for (var i = 0; i < zones.length; i++) {
      zonesList = zonesList + "\n" + zones[i]; // addine new line here means you don't need it in the alert message
    }
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" + "Current danger zones are:" +
          zonesList
         );
  };
}


// warningMaker function with locations and number of sightings

  var nums = [];
  return function ( number, location ) {
    count++;
    zones.push(location);
    nums.push(number);
    var list = "";
    for(var i = 0; i<zones.length; i++){        
      list = list + "\n" + zones[i] + " (" + nums[i] + ")";  
    }
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are: " +
          list
         );
  };
}
