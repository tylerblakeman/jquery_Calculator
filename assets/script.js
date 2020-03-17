$(document).ready(function() {

var firstNumber = "" 
var secondNumber = ""
var operator = ""
var totalResult = ""
var operatorArray = ["plus", "minus", "times", "divide", "power"]


$("button").on("click", function(){
var buttonClick = this.getAttribute("value");
if (operatorArray.includes(buttonClick)){

}
else if (buttonClick === "clear" || buttonClick === "equals"){

}
else {
    if (operator) {
    
    } 
else {

firstNumber += buttonClick
console.log(firstNumber)
}
}
}
})




});

