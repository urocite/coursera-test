// function test()	{
// 	console.log(this);
// 	this.myName = "yaakov";
// }
// test();
// console.log(window.myName);

// FUNCTION CONSTRUCTORS
function Circle (radius) {
	this.radius = radius;
}
Circle.prototype.getArea = // slaga se izvun funkciata koqto ne iskash da izvikva tazi prototype funkcia vseki put kogato samata tq biva izvikvana
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	}

var myCircle = new Circle(10); // ne zabravqi 'new' dumichkata, bez neq izliza undefined
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);