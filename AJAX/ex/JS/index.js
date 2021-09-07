
$(function(){
	let data;
	$.ajax({
		type : 'GET',
		url : 'https://5d3c1d02301f26001416ac6c.mockapi.io/example',
		datatype : 'json',

		success : function(value){
			data = value;
			for(let i = 0; i < data.length; i++){
				console.log(data[i]);
				$('tbody').append("<tr><td>"+data[i].Name+"</td>"+"<td>"+data[i].Email+"</td>"+"<td>"+data[i].Age+"</td>"+"<td>"+data[i].Gender+"</td>"+'<td>'+'<button type="button" id="button" value='+data[i].id+'>'+'<i class="far fa-times-circle"></i>'+'</button>'+'</td></tr>');
			}
		}
	});
});

$(function(){
	$('button').click(function(){
		location.replace('Register.html');
	});
});

$(document).on("click", "#button" , function(event) {
       var id=event.target.value
       
		swal({
		  title: "Are you sure?",
		  text: "Once deleted, you will not be able to recover this imaginary file!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})

		.then((willDelete) =>{
			if(willDelete){
				$.ajax({
					type : 'DELETE',
					url : 'https://5d3c1d02301f26001416ac6c.mockapi.io/example/'+id,
					dataType : 'json',

					success : function(value){
						console.log(value)
					}
				});
				swal('Deleted Successfully',{
					icon : 'success',
				});
				setInterval(() =>{
					location.reload();
				},2000
				)
			}
			else {
				swal('Your file is safe')	;
			}
		});
});