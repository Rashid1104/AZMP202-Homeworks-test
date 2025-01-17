const BackButton = document.createElement('button');
BackButton.innerText = 'Back';
BackButton.style.position = 'fixed';
BackButton.style.top = '180px';
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
};

const app = document.getElementById('app');
        const textElement = document.createElement('h2');
        textElement.id = 'text';
        textElement.textContent = 'This is the text for changing font size and color.';
        textElement.style.fontSize = '16px';

        const PlusBtn = document.createElement('button');
        PlusBtn.textContent = '+';

        const MinusBtn = document.createElement('button');
        MinusBtn.textContent = '–';

        const Label = document.createElement('label');
        Label.textContent = 'Enter color: ';

        const Input = document.createElement('input');
        Input.type = 'text';
        Input.id = 'Input';
        Input.placeholder = 'Enter color';

        const ColorButton = document.createElement('button');
        ColorButton.textContent = 'Apply';

        app.appendChild(textElement);
        app.appendChild(PlusBtn);
        app.appendChild(MinusBtn);
        app.appendChild(document.createElement('br')); 
        app.appendChild(Label);
        app.appendChild(Input);
        app.appendChild(ColorButton);

        let fontSize = 12;

        PlusBtn.addEventListener('click', () => {
            fontSize += 2;
            textElement.style.fontSize = fontSize + 'px';
        });
        MinusBtn.addEventListener('click', () => {
            fontSize -= 2;
            textElement.style.fontSize = fontSize + 'px';
        });

        ColorButton.addEventListener('click', () => {
const color = Input.value;
textElement.style.color = color;
        });