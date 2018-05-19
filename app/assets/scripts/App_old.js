/* -----------------
function person(name,favColor){

console.log("Hi, my name is "+name+" my favorite color is "+favColor+".");
}

var samName ="Sam";
var samFavColor ="blue";

person("Sam","blue");

var sam ={
	name:"Sam",
	favoriteColor:"blue"
}

person(samName, samFavColor);

person(sam.name, sam.favoriteColor);
person("Ann" , "red");
*/
/*-----------------
var john ={
	name:"John Doe",
	favoriteColor:"blue",
	greet: function(){
		console.log("Hi, my name is "+john.name+" my favorite color is "+john.favoriteColor+"!");
	}
}
john.greet();
*/


function Person(fullName, favColor){
	this.name =fullName;
	this.favoriteColor =favColor;
	this.greet =function(){
		console.log("Hello there! My name is "+this.name+" and my favorite color is "+this.favoriteColor+".");
	}
}

var john =new Person("John Doe","blue");
john.greet();

