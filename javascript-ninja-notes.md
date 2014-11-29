## Lesson 3: Functions are Fundamental 

### 3.1
JS is a functional language. In JS, the function is the primary modular unit of execution. With few exceptions, all the script code we write will be within a function. Most of our code will run as the result of invoking a function.

### 3.1.1 Why is JavaScript's functional nature important?

**Functions are first-class objects**: 
* Can be created via literals 
* Can be assigned to variables, array entries, and properties of other objects
* Can be passed as arguments to other functions
* Can be returned as values from other functions
* Can possess properties that can be dynamically created and assigned

PLUS, functions can be invoked. 

Browser Event Loop: Follows 'First In, First Out' (FIFO) convention. It only takes one laggy event to clog the entire queue. 

**Callback**: When a function is set-up in advance, in order to execute at a later time. Can be called by the browser or other code (event handlers are a common example of callbacks). 
<pre><code> function useless(callback) { return callback(); } 

var text = 'Domo arigato!';
assert(useless(function() { return text; }) === text, "The useless function works! " + text);
</code></pre>

### 3.1.2 Sorting with a comparator

JavaScript provides a simple means to sort an array. The <code>sort</code> method takes in an optional <code>compareFunction</code> that defines the sort order.
<pre><code> var values = [213, 16, 2058, 54, 10, 1965, 57, 9];
values.sort([compareFunction]);
</code></pre>

Let's sort an array in *descending* order to show how callbacks work. We do this by providing JavaScript with a function that makes a comparison and tells the sort algorithm how the values should be ordered. This is a *callback function* because JavaScript only calls the function when it needs to make a comparison.  
<pre><code>
values.sort(function(value1, value2) { return value2 - value 1; });
</code></pre>

Simply declare a function and pass it as an argument to a method, just like any other object type. 

### 3.2 Declarations

Function literals are composed of four parts: 

1. The <code>function</code> keyword
2. An *optional* name (must be a valid, non-reserved identifier)
3. Comma-separated list of parameter names (if any) enclosed in ()'s
4. Function body enclosed in {}'s

When a function is named, that name is valid throughout the scope within which the function is declared. 

All functions have a <code>name</code> property that stores the function's name as a string. Anonymous functions have this property set to an empty string.

We can test that these assertions are true:
<pre><code> 
function isNimble() { return true; }
assert(typeof isNimble === "function", "isNimble() defined");
assert(isNimble.name === "isNimble", "isNimble() has a name");

var canFly = function(){ return true; };
assert(typeof canFly === "function", "canFly() defined");
assert(canFly.name === "", "canFly() has no name");
</code></pre>

### 3.2.1 Scoping and functions

Scopes are declared by functions, not by blocks.
* Variable declarations are in scope from the point of declaration to the end of the function within which they are declared.
* Named functions are in scope within the entire function within which they are declared (hoisting).
* The global context acts like one big function encompassing the code on the page.

For example, look at the following snippet: <pre><code>
function outer(){
   var a = 1;
   function inner(){ /* does nothing */}
   var b = 2;
   if (a = 1) {
      var c = 3;
   }
}
outer();
</code></pre>

To test where the various items are in scope, create a test block to intersperse throughout the code:
<pre><code> 
assert(true, "descriptive text");
assert(typeof outer==='function', "outer() is in scope");
assert(typeof inner==='function', "inner() is in scope");
assert(typeof a==='number', "a is in scope");
assert(typeof b==='number', "b is in scope");
assert(typeof c==='number', "c is in scope");
</code></pre>

Now we will insert the test block: <pre><code>
   assert(true, "|----- BEFORE OUTER -----|");
   assert(typeof outer==='function', "outer() is in scope");
   assert(typeof inner==='function', "inner() is in scope");
   assert(typeof a==='number', "a is in scope");
   assert(typeof b==='number', "b is in scope");
   assert(typeof c==='number', "c is in scope");

   function outer(){
         assert(true, "|----- INSIDE OUTER, BEFORE a -----|");
         assert(typeof outer==='function', "outer() is in scope");
         assert(typeof inner==='function', "inner() is in scope");
         assert(typeof a==='number', "a is in scope");
         assert(typeof b==='number', "b is in scope");
         assert(typeof c==='number', "c is in scope");

         var a = 1;
         assert(true, "|----- INSIDE OUTER, AFTER a -----|");
         assert(typeof outer==='function', "outer() is in scope");
         assert(typeof inner==='function', "inner() is in scope");
         assert(typeof a==='number', "a is in scope");
         assert(typeof b==='number', "b is in scope");
         assert(typeof c==='number', "c is in scope");

         function inner(){}
         var b = 2;
         assert(true, "|----- INSIDE OUTER, AFTER INNER AND b -----|");
         assert(typeof outer==='function', "outer() is in scope");
         assert(typeof inner==='function', "inner() is in scope");
         assert(typeof a==='number', "a is in scope");
         assert(typeof b==='number', "b is in scope");
         assert(typeof c==='number', "c is in scope");

         if (a == 1){
            var c = 3;
            assert(true, "|----- INSIDE OUTER, INSIDE IF -----|");
            assert(typeof outer==='function', "outer() is in scope");
            assert(typeof inner==='function', "inner() is in scope");
            assert(typeof a==='number', "a is in scope");
            assert(typeof b==='number', "b is in scope");
            assert(typeof c==='number', "c is in scope");
         }
      assert(true, "|----- INSIDE OUTER, OUTSIDE IF -----|");
      assert(typeof outer==='function', "outer() is in scope");
      assert(typeof inner==='function', "inner() is in scope");
      assert(typeof a==='number', "a is in scope");
      assert(typeof b==='number', "b is in scope");
      assert(typeof c==='number', "c is in scope");
      }
      outer();

   assert(true, "|----- OUTSIDE OUTER -----|");
   assert(typeof outer==='function', "outer() is in scope");
   assert(typeof inner==='function', "inner() is in scope");
   assert(typeof a==='number', "a is in scope");
   assert(typeof b==='number', "b is in scope");
   assert(typeof c==='number', "c is in scope");

};
</code></pre>

