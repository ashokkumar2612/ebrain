function myfun() { 
    const student = {
    "profile" : {
	"name" : "",
	"fathername" : "",
	"address" : "",
	"email" : "",
	"phone" : "",
	"college" : ""},
	"UG" : {
	 "I_year" : {
		"physics" : "",
		"chemistry" : "",
		"mathematics" : ""},
		"II_year" : {
		"thermodynamics" :"",
		"thermal" :"",
		"english" : ""},
		"III_year" : {
		"machinary" : '',
		"automobile" : "",
		"ethics" : ""},
	},
	  "PG" : {
	    "I_year" : {
		"physics" : "",
		"chemistry" : "",
		"mathematics" : ""},
		"II_year" : {
		"thermodynamics" :"",
		"thermal" :"",
		"english" : ""},
		"III_year" : {
		"machinary" : "",
		"automobile" : "",
		"ethics" :""
	}
}
}
student.profile.name = document.getElementById('a').value;
student.profile.fathername = document.getElementById('b').value;
student.profile.address = document.getElementById('c').value;
student.profile.email = document.getElementById('d').value;
student.profile.phone = document.getElementById('e').value;
student.profile.college = document.getElementById('f').value;
student.UG.I_year.physics = document.getElementById('g').value;
student.UG.I_year.chemistry = document.getElementById('h').value;
student.UG.I_year.mathematics = document.getElementById('i').value;
student.UG.II_year.thermodynamics = document.getElementById('j').value;
student.UG.II_year.thermal = document.getElementById('k').value;
student.UG.II_year.english = document.getElementById('l').value;
student.UG.III_year.machinary = document.getElementById('m').value;
student.UG.III_year.automobile = document.getElementById('n').value;
student.UG.III_year.ethics = document.getElementById('o').value;
student.PG.I_year.physics = document.getElementById('p').value;
student.PG.I_year.chemistry = document.getElementById('q').value;
student.PG.I_year.mathematics = document.getElementById('r').value;
student.PG.II_year.thermodynamics = document.getElementById('s').value;
student.PG.II_year.thermal = document.getElementById('t').value;
student.PG.II_year.english = document.getElementById('u').value;
student.PG.III_year.machinary = document.getElementById('v').value;
student.PG.III_year.automobile = document.getElementById('w').value;
student.PG.III_year.ethics = document.getElementById('x').value;
alert("Your form is submitted successfully");
console.log(student);
}