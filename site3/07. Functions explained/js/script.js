// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
	return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3); // deklariram multiplier za purvata funkcia
console.log(multiplyBy3(10)); // deklariram x za vtorata funkcia
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperation(x, operation) {
	return operation(x);
}
var result = doOperation(5, multiplyBy3); // x se zamestva sus stoinosta, operation se zamestva sus funkciata vuv result se suhranqva tova koeto vrushta return
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);