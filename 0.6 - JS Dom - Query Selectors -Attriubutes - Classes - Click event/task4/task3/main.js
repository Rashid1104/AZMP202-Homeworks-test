const BackButton = document.createElement('button');
BackButton.innerText = 'Back'
BackButton.style.position = 'fixed';
BackButton.style.top = '90px';
BackButton.style.left = '20px';
BackButton.style.backgroundColor = 'cadetblue'
BackButton.style.border = 'none';
BackButton.style.color = 'white';
BackButton.style.padding = '10px';
BackButton.style.fontSize = '1rem';
BackButton.style.cursor = 'pointer';
document.body.appendChild(BackButton);

BackButton.onclick = () => {
    location.href = '../task4.html'
}

const MainPart = document.createElement('div');
MainPart.id = 'calculator';
MainPart.className = 'calculator';
MainPart.style.width = '400px';
MainPart.style.height = '550px';
MainPart.style.backgroundColor = '#FFE3C7';
document.body.appendChild(MainPart);

const textPart = document.createElement('h2');
textPart.textContent = 'Simple Calculator';
textPart.style.fontSize = '2rem';
MainPart.appendChild(textPart);

const display = document.createElement('div');
display.id = 'display';
display.className = 'display';
display.innerText = '0';
display.style.width = '350px';
display.style.backgroundColor = 'black';
display.style.color = 'white';
display.style.textAlign = 'right';
display.style.padding = '10px';
display.style.marginBottom = '10px';
display.style.borderRadius = '5px';
MainPart.appendChild(display);

const value1 = document.createElement('input');
value1.id = 'value1';
value1.className = 'input-field';
value1.type = 'number';
value1.placeholder = 'Value1';
value1.style.width = '150px';
value1.style.margin = '5px';
MainPart.appendChild(value1);

const value2 = document.createElement('input');
value2.id = 'value2';
value2.className = 'input-field';
value2.type = 'number';
value2.placeholder = 'Value2';
value2.style.width = '150px';
value2.style.margin = '5px';
MainPart.appendChild(value2);

const addButton = document.createElement('button');
addButton.className = 'button';
addButton.innerText = 'Addition';
addButton.onclick = () => calculate('addition');
MainPart.appendChild(addButton);

const subtractButton = document.createElement('button');
subtractButton.className = 'button';
subtractButton.innerText = 'Substract';
subtractButton.onclick = () => calculate('substract');
MainPart.appendChild(subtractButton);

const multiplyButton = document.createElement('button');
multiplyButton.className = 'button';
multiplyButton.innerText = 'Multiply';
multiplyButton.onclick = () => calculate('multiply');
MainPart.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.className = 'button';
divideButton.innerText = 'Division';
divideButton.onclick = () => calculate('division');
MainPart.appendChild(divideButton);

const resetButton = document.createElement('button');
resetButton.className = 'button reset';
resetButton.innerText = 'Reset';
resetButton.style.backgroundColor = '#ff7043';
resetButton.style.color = 'white';
resetButton.onclick = () => calculate('reset');
MainPart.appendChild(resetButton);

function calculate(operation) {
    const num1 = parseFloat(value1.value);
    const num2 = parseFloat(value2.value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        display.innerText = 'Please enter valid numbers';
        return;
    }

    switch (operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'substract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'division':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        case 'reset':
            value1.value = '';
            value2.value = '';
            result = 0;
            break;
        default:
            result = 'Invalid operation';
    }
    display.innerText = result;
}


