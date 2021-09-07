$(document).ready(function(){
	$("#submit").click(function(){
		var arr = []
	var l = '<button type="button" class="material-icons  btne mt-5" style="font-size:20px;color:red">delete</button>';
	var p = '<button type="button" class="btn btnr btn-success btn-sm"><span class="glyphicon glyphicon-ok"></span>Ok</button>';
		var c = JSON.parse(localStorage.getItem("values"));
		if(c!= null){
		for (var i = 0; i < c.length; i++) {
			arr.push(c[i]);
		}
	}
		var a = $("input").val();
		if (a==""||a==null) {
			alert("please Enter the field")
		}
	else{
			var b = {value:a, del:l, ok:p};
			arr.push(b);
			localStorage.setItem("values",JSON.stringify(arr));
				var d = "";
	for(var i = 0; i < arr.length; i++) {
		d =  "<li>"+ arr[i].value + arr[i].del + arr[i].ok +"</li>";
	}
	$("form").trigger("reset");
	$("#one").append(d);
  $('.btne').click(function(){
  $(this).closest('li').remove();
});
  	$('.btnr').click(function(){
  		$(this).closest('li').detach();
  $(this).closest('li').appendTo("#too");
  $(this).css("display","none");
});
  }
	});
	// $("input").on("click focusin",function(){
 //     this.value = "";
	// });
});