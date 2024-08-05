// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                display.textContent = '0';
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
            } else if (value === '=') {
                if (firstOperand && operator && currentInput) {
                    secondOperand = currentInput;
                    const result = calculate(firstOperand, operator, secondOperand);
                    display.textContent = result;
                    currentInput = result;
                    operator = '';
                    firstOperand = '';
                    secondOperand = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (firstOperand) {
                    if (operator && currentInput) {
                        secondOperand = currentInput;
                        const result = calculate(firstOperand, operator, secondOperand);
                        display.textContent = result;
                        currentInput = result;
                    }
                }
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, op, b) {
        switch (op) {
            case '+':
                return parseFloat(a) + parseFloat(b);
            case '-':
                return parseFloat(a) - parseFloat(b);
            case '*':
                return parseFloat(a) * parseFloat(b);
            case '/':
                return parseFloat(a) / parseFloat(b);
            default:
                return '';
        }
    }
});
