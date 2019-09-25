var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(x, y) {
  return x - y;
};

var multiply = function(a, b) {
  return a * b;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result=(add(number1, number2));
    $("#output").text(result);

    var number1 = parseInt($("#minus1").val());
    var number2 = parseInt($("#minus2").val());
    var result = (subtract(number1,number2));
    $("#substraction").text(result);
  });
});

// $("#add1").val();
// $("#add2").val();

// var x = parseInt(prompt("Enter any number:"));
// var y = parseInt(prompt("Enter another number:"));
// var result = subtract(x, y);
// alert(x + "-" + y + "=" + result);

// var a = parseInt(prompt("Enter any number:"));
// var b = parseInt(prompt("Enter another number:"));
// var result = multiply(a, b);
// alert(a + "*" + b + "=" + result);
