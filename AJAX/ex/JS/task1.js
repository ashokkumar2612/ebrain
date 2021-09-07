
	$(function(){
		$.ajax({
			type : 'GET',
			url : 'https://5d3c1d02301f26001416ac6c.mockapi.io/example',
			datatype : 'json',

			success:function(value){
			console.log(value);
		}
	});

		$('button').click(function(){
			$.ajax();
			var data = {
				Name : $('#in1').val(),
				Email : $('#in2').val(),
				Age : $('#in3').val(),
				Gender : $('#in4').val()
				
			}
			console.log(data);

			$.post('https://5d3c1d02301f26001416ac6c.mockapi.io/example',data);
			location.replace('index.html');
		})
	});
	

	
