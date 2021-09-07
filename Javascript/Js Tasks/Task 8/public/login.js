function locat() {
	var a = document.getElementById('usr').value;
	var b = document.getElementById('psw1').value;
	var c = document.getElementById('psw2').value;
	if(a==null||a==""||b==null||b==""||c==null||c==""){
		alert("register your username first");
		return false;
	}
	if(c == b) {
		var data = {user:a, pwd:c};
	console.log(data);
	var hb = [];
	hb.push(data);
	localStorage.setItem("obj",JSON.stringify(hb));
		alert('successfully registered');
	}else{
		alert("password doesn't match");
	}
}
function page(){
	 	var x = document.getElementById('name').value;
	 	var y = document.getElementById('pd').value;
	 	var p = JSON.parse(localStorage.getItem('obj'));
	 	for (var i = 0; i <=p.length;  i++) {
if(x == p[i].user && y == p[i].pwd){
	  location.replace('https://javascript-task-6.firebaseapp.com');
	}else
	{		
	alert('please enter valid username or mail id');
   	}	
	 	}
}
	