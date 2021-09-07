var i = 0;
var txt = "Welcome to Cambridge University Education";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typ").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function locat() {
	var a = document.getElementById('usr').value;
	var b = document.getElementById('psw1').value;
	var c = document.getElementById('psw2').value;
	if(a,b,c==""){
		alert("register your username first");
		return false;
	}
	if(c == b) {
		var data = {user:a,pwd:b};
	console.log(data);
	var hb = [];
	hb.push(data);
	localStorage.setItem("obj",JSON.stringify(hb));
		alert('successfully registered');
	}else{
		alert("password doesn't match");
	}
	document.getElementById("form").reset();
}
function page(){
	 	var x = document.getElementById('name').value;
	 	var y = document.getElementById('pd').value;
	 	var p = JSON.parse(localStorage.getItem('obj'));
	 	for (var i = 0; i <=p.length;  i++) {
if(x == p[i].user && y == p[i].pwd){
	  location.replace('index1.html');
	}else
	{		
	alert('please enter valid username or Create username');
   	}	
	 	}
}
function chang(){
	alert("please signup or Enter correct password")
}
$(document).ready(function(){
  $("#subm").click(function(){
  	var arr = [];
  	var data = JSON.parse(localStorage.getItem("student"));
  		if(data!=null){
  	for(var i = 0; i < data.length; i++){
		arr.push(data[i]);
	}
}
	var a = $('#number').val();	
	var b = $('#name').val();
	var c = $('#age').val();
	var d = $('#email').val();
	var e = $('#dpt').val();
	var f = $('#beh').val();
	var g = $('#cmnt').val();
	if(a,b,c,d,e,f,g == "" && e,f == null){
		alert('please fill the empty fields');
	}else {	
	var datum = {Reg:a, name:b, age:c, email:d, dprt:e, behaviour:f, comment:g};
	console.log(datum);
	arr.push(datum);
	localStorage.setItem("student",JSON.stringify(arr));
	alert('successfully updated');
}
});
});
function lod(){
$(function() {
	var k = ''
	var y = JSON.parse(localStorage.getItem("student"));
	console.log(y);
	 	for (var i = 0; i < y.length;  i++) {
	 	k += '<tr><td>' + y[i].Reg
	 	k += '<td>' + y[i].name
	 	k += '<td>' + y[i].age
	 	k += '<td>' + y[i].email
	 	k += '<td>' + y[i].dprt
	 	k += '<td>' + y[i].behaviour
	 	k += '<td>' + y[i].comment	+ '</td><tr>'
	 	$("#tble").html(k);
	}
});
}
$(document).ready(function(){
  $("#numb").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tble tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});