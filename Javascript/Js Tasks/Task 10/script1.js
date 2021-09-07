	var array =[];
function selec(){
	var option = document.getElementById('items').value;
	var quantity = document.getElementById('qnty').value;
	var amount = '';
	var price = '';
	var total = '';
	var value = JSON.parse(localStorage.getItem("fruit"));
	for (var i = 0; i < value.length; i++) {
		console.log(value[i]);
	var op = "<option>"+value[i].name+"</option>"
	document.getElementById('items').innerHTML += op;
	}
	for (var j = 0; j < value.length; j++) {
		if(option == value[j].name){
			price = value[j].price;
			amount = quantity * price;
			array.push(amount);
		}
	}
	var data = {
		name:option,
		price:quantity,
		amount:amount
	}
	for (var k=0; k<array.length;k++) {
		var a = array[k];
			total = eval(total+a)	
		}
		document.getElementById('amount').value = total;
		document.getElementById('fruit').innerHTML += "<tr><td>"+data.name+"</td>"+"<td>"+data.price+"</td>"+"<td>"+data.amount+"</td></tr>"
        
}
