function myfunction(){
	var arr = [];
	var data = JSON.parse(localStorage.getItem("fruit"));
	if(data!=null){
	for(var i=0; i < data.length; i++){
		arr.push(data[i]);
	}
}
	var a = document.getElementById('name').value;
	var b = document.getElementById('price').value;
	if(a,b==""){
		alert('please fill the items');
	}else {	
	var datum = {name:a, price:b};
	arr.push(datum);
	localStorage.setItem("fruit",JSON.stringify(arr));
	alert('successfully updated');
}
}
function myfun() {
	var x = '';
	var y = JSON.parse(localStorage.getItem("fruit"));
	 	for (var i = 0; i < y.length;  i++) {
	 	x += '<tr><td class="count">' + ''
	 	x +='<td>' + y[i].name
	 	x += '<td>' + y[i].price + '</td></tr>'
	 document.getElementById('detail').innerHTML = x;
	}
}
