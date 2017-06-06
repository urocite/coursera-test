// Object creation - "new Object()" syntax
// var company = new Object();
// company.name = "Facebook";
// console.log(company);
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "$stock of company";
// company[stockPropName] = 110; // 13 i 14 red pravqt sushtoto kato 15
// // company["$stock of company"] = 110; // [""] pozvolqva intervali v naimenovaniata, kakto i v donliat primer

// console.log("Stock price is: " + company["$stock of company"]);


// Better way: OBJECT LITERAL syntax
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"$stock of company": 110
};
console.log(facebook);
console.log(facebook.ceo.firstName);