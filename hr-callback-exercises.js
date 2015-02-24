var testArr = [1,2,3,4,5];

function plusOne (n) {
	return n+1;
}

function funcCaller (func, arg) {
	return func(arg);
};
console.log(funcCaller(plusOne, 1));

function firstVal (arr, func) {
	return func(arr[0]);
}

console.log(firstVal(testArr, plusOne));


