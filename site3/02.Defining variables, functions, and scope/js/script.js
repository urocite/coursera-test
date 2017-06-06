var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	// OTKOMENTIRAI I VIJ PROBLEMITE V CONSOLATA
	// function b () {
	// 	console.log("b: message = " + message);
	// }
	b();
}
function b () {
	console.log("b: message = " + message);
	}

a();