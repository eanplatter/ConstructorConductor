//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

var ean = new Person('ean', 24);
var forrest = new Person('forrest', 24);
var peter = new Person('peter', 24);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	console.log(this.name);
}

ean.sayName();