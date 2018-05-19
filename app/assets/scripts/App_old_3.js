//var Person =require('./modules/Person');
import Person from './modules/Person';
var $ =require('jquery');

alert("ABC 321");

class Adult extends Person{
	payTaxes(){
		console.log(this.name+" owes $0 in taxes");
	}
}

var john =new Person("John Doe","blue");
john.greet();

var jane =new Adult("Jane Smith","red");
jane.greet();
jane.payTaxes();
