$(document).ready(function() {
	var firstNumber = "";
	var secondNumber = "";
	var operator = "";
	var totalResult = "";
	var operatorArray = ["plus", "minus", "times", "divide", "power"];
	var firstNumDisplay = $("#first-number");
	var secondNumDisplay = $("#second-number");
	var operatorDisplay = $("#operator");
	var resultDisplay = $("#result");

	$("button").on("click", function() {
		var buttonClick = this.getAttribute("value");
		if (operatorArray.includes(buttonClick)) {
			if (firstNumber) {
				operator = buttonClick;
				switch (operator) {
					case "minus":
						operator = "-";
						break;
					case "plus":
						operator = "+";
						break;
					case "times":
						operator = "x";
						break;
					case "divide":
						operator = "÷";
						break;
					case "power":
						operator = "^";
						break;
					default:
						break;
				}
				operatorDisplay.text(operator);
			}
		} else if (buttonClick === "clear") {
            clearDisplay();
		} else if (buttonClick === "equals") {
            equalsFunction();
            totalResult = equalsFunction();
            resultDisplay.text(totalResult);
        
		} else {
			if (operator) {
				secondNumber += buttonClick;
				console.log(secondNumber);
				secondNumDisplay.text(secondNumber);
			} else {
				firstNumber += buttonClick;
				console.log(firstNumber);
				firstNumDisplay.text(firstNumber);
			}
		}
    });
    function clearDisplay(){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        totalResult = "";
        operatorDisplay.text(operator);
        firstNumDisplay.text(firstNumber);
        secondNumDisplay.text(secondNumber);
        resultDisplay.text(totalResult);
    }

    function equalsFunction() {
        switch (operator) {
            case "minus":
                return firstNumber-secondNumber;
                break;
            case "plus":
                return firstNumber+secondNumber;
                break;
            case "times":
                return firstNumber*secondNumber;
                break;
            case "divide":
                return firstNumber/secondNumber;
                break;
            case "power":
                return Math.pow(firstNumber,secondNumber);
                break;
            default:
                break
    }
});
