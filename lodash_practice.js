// make an immediately invoked function expression 'IFFE'
(function() {
	// declare undefined 
    var undefined;
	
	// declare version number as a GLOBAL, decreases chance of accidental use
    var VERSION = '3.6.0';
    
    // TODO add the other GLOBAL variables
    // TODO add the Object#toString and arrayBufferTag variables

    // match empty string literals in compiled template source
    // TODO understand when I would use this 
    var reEmptyStringLeading = /\b__p \+= '';/g;
    	// TODO the rest of the empty string matches 

    // TODO everything above the first line in lodash!
    /*----------------------------------------------------*/


// call lodash
}.call(this));


var wat = NaN;
var waat = NaN;
console.log(wat===waat);
// false
console.log(wat===wat);
// false

console.log(NaN===NaN);
// false
console.log(3/0===4/0);
// true
