// Object literals and "this"

var literalCircle = { // = new Object();
	radius: 10,
	getArea: function () {
		var self = this; // self ni trqbva zashtoto bez nego this. ne raboti vuv funkcia vuv funciata i radius ostava 10
		console.log(this);
		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

