class Calculator {
    constructor(ancienCalcule, calculeActuel) {

        this.ancienCalculeElementText = ancienCalcule;
        this.calculeActuelElementText = calculeActuel;
        this.clear();
    }
    clear() {
        this.calculeActuel = '';
        this.ancienCalcule = '';
        this.operation = undefined;

    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.calculeActuel.includes('.')) return


        this.calculeActuel = this.calculeActuel.toString() + number.toString();




    }
    ChooseOperation(operation) {
        if (this.calculeActuel === '') return
        this.operation = operation;
        this.ancienCalcule = this.calculeActuel;
        this.calculeActuel = '';
    }
    compute() {

    }
    updateDisplay() {
        this.calculeActuelElementText.innerText = this.calculeActuel;
        this.ancienCalculeElementText.innerText = this.ancienCalcule;

    }

}


const numberButtons = document.querySelectorAll('[data-number]');
const buttonOperation = document.querySelectorAll('[data-operation]');

const buttonDelete = document.querySelector('[data-delete]');
const buttonEqual = document.querySelector('[data-equals]');
const buttonAllClear = document.querySelector('[data-all-clear]');
const ancienCalcule = document.querySelector('[data-ancienCalcule]');
const calculeActuel = document.querySelector('[data-nouveauCalcule]');

const calculator = new Calculator(ancienCalcule, calculeActuel);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
});

buttonOperation.forEach(button => {
    button.addEventListener('click', () => {

        calculator.ChooseOperation(button.innerText)
        calculator.updateDisplay();
    })
});