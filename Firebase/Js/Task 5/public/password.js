function login() {
	var x = document.getElementById('new').value;
	var y = document.getElementById('confirm').value;
	var z = document.getElementById('demo');
	if (x === y) {
		a = 'signup successful!';
		window.replace('https://bootstrap-task-5.firebaseapp.com/');
	}else {
		a = 'passwords are not same!';
	}
	z.innerHTML = a;
}