// Default values
function orderChickenWith(sideDish) {
	sideDish = sideDish || "whatever!"; // proverqva dali sideDish = sideDish, i ako e false, produljava sled || da tursi stoinost, -->
	console.log("Chicken with " + sideDish); // --> kogato q nameri stava true, kratuk nachin da spestich ot cql if statement.
}
orderChickenWith("noodles");
orderChickenWith();