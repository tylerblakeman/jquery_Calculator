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
		if (totalResult) {
			if (buttonClick === "clear") {
				clearDisplay();
			}
		} else {
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
				if (secondNumber && firstNumber) {
					totalResult = equalsFunction();
					console.log(totalResult);
					resultDisplay.text("= " + totalResult);
				}
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
		}
	});
	function clearDisplay() {
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
		firstNumber = parseInt(firstNumber);

		secondNumber = parseInt(secondNumber);
		switch (operator) {
			case "-":
				return firstNumber - secondNumber;
				break;
			case "+":
				return firstNumber + secondNumber;
				break;
			case "x":
				return firstNumber * secondNumber;
				break;
			case "÷":
				return firstNumber / secondNumber;
				break;
			case "^":
				return Math.pow(firstNumber, secondNumber);
				break;
			default:
				break;
		}
	}
});
