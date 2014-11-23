## Lesson 3: Functions are Fundamental 

JS is a functional language. In JS, the function is the primary modular unit of execution. With few exceptions, all the script code we write will be within a function. Most of our code will run as the result of invoking a function.

**Functions are first-class objects**: 
* Can be created via literals 
* Can be assigned to variables, array entries, and properties of other objects
* Can be passed as arguments to other functions
* Can be returned as values from other functions
* Can possess properties that can be dynamically created and assigned

PLUS, functions can be invoked. 

Browser Event Loop: Follows 'First In, First Out' (FIFO) convention. It only takes one laggy event to clog the entire queue. 

Callback: When a function is set-up in advance, in order to execute at a later time. Can be called by the browser or other code. 

<pre><code>
function useless(callback) {
   return callback();
}
</code></pre>

Event handlers are a common example of callbacks. 



