var add = function(number1,number2){
    return number1+number2;
    };
    alert("ADDITION");
    var number1 = parseInt(prompt("Enter any number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = add(number1,number2);
    alert(number1 + "+" + number2 + "=" + result);

var subtract = function(x,y){
    return x-y;
};
alert("SUBSTRACTION");
var x = parseInt(prompt("Enter any number:"));
var y = parseInt(prompt("Enter another number:"));
var result = subtract(x,y);
alert(x + "-" + y + "=" +result);

var multiply = function(a,b){
    return a*b;
};
alert("MULTIPLICATION")
var a = parseInt(prompt("Enter any number:"));
var b = parseInt(prompt("Enter another number:"));
var result=multiply(a,b);
alert(a + "*" + b + "=" + result ); 