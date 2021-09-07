console.log(window);
console.log(navigator.appVersion);
const a = {
	name: 'Ashok',
	course: 'bachelor degree',
	department: 'mechanical'
	myfun: function(){
       return `${this.name} and i completed ${this.course} in ${this.department}`;
	}
}
console.log(Object.values(a));
console.log(Object.keys(a));


function Book(name, author, year){
	this.name: name;
	this.author: auther;
	this.year: year;
}

//prototype
Book.prototype.getAge = function(){
	const years = new Date().getFullYear() - this.year;
	return `${this.name} is ${year} year old`;
}

//revise year
Book.prototype.revise = function(newYear){
	this.year = newYear;
	this.revised = true;
}

const Book1 = Book('Jurassic park','Stepen willium','2019');
const Book2 = Book('King kong','jhon through','2020')
// console.log(Book1.getAge());

Book1.revise('2020')
console.log(Book1);

var a = 45;
var b = 'kumar';
var c = [];
c.push(a,b);
console.log(c);