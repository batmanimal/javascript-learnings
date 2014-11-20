// slides.com/rebootjeff

var add = function (a,b) {
	return a+b;
};
console.log(add(3,4,5)); // 7

// 2 ways to make function variables

(function() {
// hi(); // type error: undefined is not a function // only the var declaration is hoisted 
// bye(); // never gets to bye, but would work bc of hoisting 

// function expression 
var hi = function() { 
	console.log('hi');
};

// function declaration 
function bye () {
	console.log('bye');
}
})();


(function() {
// hi(); // undefined is not a function // only the var declaration is hoisted 
bye(); // bye // works bc of hoisting 

// function expression 
var hi = function() { 
	console.log('hi');
};

// function declaration 
function bye () {
	console.log('bye');
}
})();

// Local Scope
var func = function(){
	var local = true;
};
// console.log(local); // reference error: local is not defined 

// Global Scope 
var x = 'Global!';
// inside a function 
function encapsulate(){
	z = 'global here too';
	window.y = 'also global';
	// window object is for browsers only
	// not node.js
}
// y and z are not declared and put into global scope until encapsulate is invoked 

// Nested functions 
var g = 'global';
function blender(fruit) {
	var y = 'yogurt';
	function mix () {
		console.log(fruit + " " + y);
	}
	mix();
}
blender('blueberry');

// Precedence
var g = 'global';
function go() {
	var l = 'local'; 
	var g = 'in here'; // local scope takes precedence when invoking function 

	console.log(l + ' inside local');
	console.log(g + ' inside go');
}
go(); // local inside local // in here inside go 
console.log(g + ' outside go'); // global outside go // back to the global scope 
// children can access parents, but parents cannot access children 

// Block scope 
var message = 'yes';
for(var i = 0; i < 5; i++) {
	var message = 'no';
}
console.log('is there block scope? ' + message); // is there block scope? no 
// console.log(message); // no 


var sayAlice = function(){

  var makeLog = function() {
    console.log(alice);
  };

  var alice = 'Why hello there, Alice!';

  return makeLog;
};

var log = sayAlice();
log();


