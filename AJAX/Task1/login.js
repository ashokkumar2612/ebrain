// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
$(document).ready(function(){
    $('#butter').click(function(){
        $.ajax();
    var a = $('#uname').val();
    var b = $('#email').val();
    var c = $('#pwd1').val();
    var d = $('#pwd2').val();
    if(a,b,c,d == "" || null){
        alert("Checking...")
    }else{
    var data = {name:a, email:b, pwd:c, pwd1:d};
    $.post("https://5e3bf5b5f2cb3000143918b4.mockapi.io/hello", data);
    $("form").trigger("reset");
}
    });
  });
$(function(){
    $("#hell").click(function(){
    let data;
    var x =$("#name").val();
    var y =$("#pd").val();
    $.ajax({
        type : 'GET',
        url : 'https://5e3bf5b5f2cb3000143918b4.mockapi.io/hello',
        datatype : 'json',
        success : function(value){
            data = value;
            for(let i = 0; i < data.length; i++){
                if(x == data[i].name && y == data[i].pwd){
      location.replace('https://reactjs.org/tutorial/tutorial.html');
      return false;
    }
}
}
});
});
});