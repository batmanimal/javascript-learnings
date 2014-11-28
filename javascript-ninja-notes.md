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
<pre><code>
function useless(callback) { return callback(); } 

// test useless function with this code:
var text = 'Domo arigato!';
assert(useless(function() { return text; }) === text, "The useless function works! " + text);
</code></pre>

### 3.1.2 Sorting with a comparator

JavaScript provides a simple means to sort an array. The <code>sort</code> method takes in an optional function that defines the sort order.
<pre><code>
var values = [213, 16, 2058, 54, 10, 1965, 57, 9];
values.sort([compareFunction]);
</code></pre>

Let's sort an array in *descending* order to show how callbacks work. We do this by providing JavaScript with a function that makes a comparison and tells the sort algorithm how the values should be ordered. This is a *callback function* because JavaScript only calls the function when it needs to make a comparison.  

<pre><code>
values.sort(function(value1, value2){
   return value2 - value 1;
});




