// build function to convert from temp to temp in K

var convert = {
	// store functions as objects within the convert object 
	fToK: function(temp) {
		return ((5*(temp-32) /9) + 273.15);
	},
	cToK: function(temp) {
		return temp+273.15;
	},
	kToK: function(temp) {
		return temp;
	},
	kToF: function(temp) {
		return (9/5)*(temp-273.15) + 32;
	},
	kToC: function(temp) {
		return temp-273.15;
	}
};


function tempConverter (config) {

	// first, convert to your bridge temperature ('K')
	var tempInK = convert[config.from.toLowerCase() + 'ToK'](config.value);

	// second, convert the 'K' temperature to your 'to' temperature
	return convert['kTo' + config.to.toUpperCase()](tempInK);
};



// convert 10 C to F
var a = tempConverter({
	value: 10,
	from: 'C',
	to: 'F'
});

// convert 0 C to K
var b = tempConverter({
	value: 58.2,
	from: 'F',
	to: 'C'
})

// test 
console.log(a);
// 50
console.log(b);


