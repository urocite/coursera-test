// Copying and Passing by Reference vs by Value
// COPYING

// console.log("Copying by Value:"); // by Value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// console.log("Copying by Reference:"); // by Reference
// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);


// PASSING
// console.log("Passing by Value"); //by Value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before: ");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after: ");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);	// primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);


function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);
	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);