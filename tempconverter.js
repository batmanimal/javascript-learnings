var convert = {
	fToK: function(temp) {

	},
	kToF: function(temp) {

	},
	kToK: function(temp) {
		return temp;
	}
}


function tempConversion (config) {

	// first, convert to your bridge temperature ('K')
	if (config.from === 'F') {
		myTemp = convert.fToK(config.value);
	}

	tempInK = convert[config.from.toLowerCase() + 'ToK'](config.value);

	// second, convert the 'K' temperature to your 'to' temperature

}







// convert 0 C to F
var a = tempConversion({
	value: 0,
	from: 'C',
	to: 'F'
});

// convert 0 C to K
var b = tempConversion({
	value: 58.2,
	from: 'F',
	to: 'K'
})