function update(value) {
  //Type the code here.
  document.myForm.screen.value += value;
}
function delet(value) {
	document.myForm.screen.value = myForm.screen.value.substring(0,myForm.screen.value.length - 1);
}
function result(VALUE) {
  document.myForm.screen.value = eval(document.myForm.screen.value);
  return;
}
function form_reset() {
  //Type the code here.
    document.myForm.screen.value = '';
}