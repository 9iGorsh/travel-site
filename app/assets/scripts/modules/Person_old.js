﻿function Person(fullName, favColor){
	this.name =fullName;
	this.favoriteColor =favColor;
	this.greet =function(){
		console.log("Hello there! My name is "+this.name+" and my favorite color is "+this.favoriteColor+".");
	}
}
/*
module.exports =Person;*/
exports.example ="Super example value.";
exports.exampleFunction =function(){
	alert("This is an example.");
}