function addChar(value) {
  document.calculator.display.value += value;
}
function result(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = eval(x);
  return;
}
function cancel() {
  document.calculator.display.value = '';
}
function del(value) {
  let x = calculator.display.value.length;
  document.calculator.display.value = calculator.display.value.substring(0, x - 1);
}
function pi(value) {
  document.calculator.display.value = Math.PI;
}
function power(value) {
  document.calculator.display.value = Math.pow(document.calculator.display.value,document.calculator.display.value);
}
function round(value) {
  document.calculator.display.value = Math.round(document.calculator.display.value);
}
function sqrt(value) {
 document.calculator.display.value = Math.sqrt(document.calculator.display.value); 
}
function sqr(value) {
 var x = document.calculator.display.value;
 document.calculator.display.value = x * x; 
}
function factorial() {
        var n = document.calculator.display.value;
             ans = 1;
            for (var i = 1; i <= n; i++) { 
                ans = ans * i; 
        }
        document.calculator.display.value = ans;
}
function cos(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.cos(x * Math.PI / 180);
}
function sin(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.sin(x * Math.PI / 180);
}
function log(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.log(x);
}
function exp(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.exp(x);
}
function log(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value = Math.log(x);
}
function deg(value) {
  var x = document.calculator.display.value;
  document.calculator.display.value =(x * 180 / Math.PI);
}