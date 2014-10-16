function factorial(n) {
    if (n === 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

// 1. Create an empty array called "stack"
var stack = [];

// 2. Define the function countDown(int) 
function countDown(int) {
    stack.push(int); 
    if (int === 1) {
        return 1;
    }
    else 
    {
        return countDown(int - 1);
    }
}
// 3. Call countDown() on an integer

countDown(10);

// And now let's have a look at that stack:
console.log(stack);
