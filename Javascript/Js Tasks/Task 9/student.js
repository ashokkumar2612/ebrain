function myfunction(){
	var arr = [];
	var data = JSON.parse(localStorage.getItem("student"));
	if(data!=null){
	for(var i=0; i < data.length; i++){
		arr.push(data[i]);
	}
}
	var a = document.getElementById('name').value;
	var b = document.getElementById('age').value;
	var c = document.getElementsByName('gender');
	var d = document.getElementById('email').value;
	var e = document.getElementById('college').value;
	var f = document.getElementById('dprt').value;
	var g = document.getElementById('cgpa').value;
	for(i =0; i < c.length; i++){
		if(c[i].checked)
			var x = c[i].value; 
	}
	if(a==""||a==""||b==""||b==""||c==""||c==""||d==""||d==""){
		alert('please fill the all details');
	}else {	
	var datum = {name:a, age:b, gender:x, email: d, college:e, department:f, cgpa:g};
	arr.push(datum);
	localStorage.setItem("student",JSON.stringify(arr));
	alert('successfully updated');
	window.open('index1.html');
}
}
function myfun() {
	var k = ''
	var y = JSON.parse(localStorage.getItem("student"));
	 	for (var i = 0; i < y.length;  i++) {
	 	k += '<tr><td>' + y[i].name
	 	k += '<td>' + y[i].age
	 	k += '<td>' + y[i].gender
	 	k += '<td>' + y[i].email
	 	k += '<td>' + y[i].college
	 	k += '<td>' + y[i].department
	 	k += '<td>' + y[i].cgpa	+ '</td></tr>'
	 document.getElementById('details').innerHTML = k;
	}
}