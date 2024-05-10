var Calculator = /** @class */ (function () {
    function Calculator() {
        this.current = '';
        this.previous = '';
        this.operator = null;
    }
    Calculator.prototype.numClicked = function (num) {
        this.current += num;
        this.updateDisplay();
    };
    Calculator.prototype.opClicked = function (op) {
        if (this.current !== '') {
            this.previous = this.current;
            this.current = '';
            this.operator = op;
        }
    };
    Calculator.prototype.clear = function () {
        this.current = '';
        this.previous = '';
        this.operator = null;
        this.updateDisplay();
    };
    Calculator.prototype.calculate = function () {
        var result;
        switch (this.operator) {
            case '+':
                result = parseFloat(this.previous) + parseFloat(this.current);
                break;
            case '-':
                result = parseFloat(this.previous) - parseFloat(this.current);
                break;
            case '*':
                result = parseFloat(this.previous) * parseFloat(this.current);
                break;
            case '/':
                result = parseFloat(this.previous) / parseFloat(this.current);
                break;
            default:
                return;
        }
        this.current = result.toString();
        this.previous = '';
        this.operator = null;
        this.updateDisplay();
    };
    Calculator.prototype.updateDisplay = function () {
        var display = document.getElementById('display');
        display.value = this.current;
    };
    return Calculator;
}());
var calc = new Calculator();
