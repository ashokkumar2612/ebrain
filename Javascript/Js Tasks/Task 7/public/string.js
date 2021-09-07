function lower() {
	var a = document.getElementById('lo').value;
	var b = a.toLowerCase();
	document.getElementById('lower').innerHTML = b;
}
function upper() {
	var a = document.getElementById('lo').value;
	var b = a.toUpperCase();
	document.getElementById('lower').innerHTML = b;
}
function alp() {
	var a = document.getElementById('lo').value;
	var b = a.split("");
	var c = b.sort();
	var res = c.join("");
	document.getElementById('lower').innerHTML = res;
}