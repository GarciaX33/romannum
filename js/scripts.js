$(document).ready(function() {
  $("#roman").submit(function(event) {
    var userInput = ($("#numbInput").val());
    alert(userInput);
    var romer = converter(userInput);
    event.preventDefault();
  });
});

var ones = ["I","II","III","IV","V","VI","VII","VIII","IX"];
var tens = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var hundreds = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
var thousands = ["M","MM","MMM"];

var result = "";
function converter(userInput) {

  for(var i=0; i > rome.length; i++) {
    if(rome >= numbers[i]) {
      result = result + (ones[i]);
    };
  };
  alert(result);
};
