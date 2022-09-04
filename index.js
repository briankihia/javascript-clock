deleteButton = document.querySelector(".deleteButton")
allClearButton = document.querySelector(".allClearButton")
numberButton=document.querySelectorAll(".numberButton")
operationButton=document.querySelectorAll(".operationButton")
equalsButton = document.querySelector(".equalsButton")
previousOperationDisplayText = document.querySelector(".previous-operation-display")
currentOperationDisplayText = document.querySelector(".current-operation-display")


class Calculator {
    constructor(previousOperationDisplayText, currentOperationDisplayText) {
        this.previousOperationDisplayText = previousOperationDisplayText
        this.currentOperationDisplayText = currentOperationDisplayText

        this.clear()

    }

    clear() {
        this.currentOperation= ''
        this.previousOperation = ''
        this.operation = undefined

    }

    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0,-1)
    }

    allClear(){
        this.currentOperation = ''
        this.previousOperation = ''
        this.operation = undefined
    }

    updateDisplay(){

      

        this.currentOperationDisplayText.innerText = this.currentOperation

        if (this.operation != null) {
            this.previousOperationDisplayText.innerText = `${this.previousOperation} ${this.operation}`
        } else {
            this.previousOperationDisplayText.innerText = ''
        }


    }

    calculation() {
        let computation

        const prev = parseFloat(this.previousOperation)
        const current = parseFloat(this.currentOperation)

        if(isNaN(prev) || isNaN(current)) return

        switch(this.operation) {
            case '+':
                computation = prev + current
                break;
            
            case '-':
                computation = prev - current
                break;
            
            case '/':
                computation = prev / current
                break;  

            case '%':
                computation = prev % current
                break;  

            case '*':
                computation = prev * current
                 break;

            default:
                return          
            
        }

        this.currentOperation = computation
        this.previousOperation = ''
        this.operation = undefined

    }

    getNumber(number) {
        this.currentOperation = this.currentOperation.toString() + number.toString()


    }

    getOperation(operation) {
        this.operation = operation
        this.previousOperation = this.currentOperation
        this.currentOperation = ''

    }

}


const calculator = new Calculator(previousOperationDisplayText,currentOperationDisplayText)


numberButton.forEach(button => {
    button.addEventListener('click', ()=>{

        calculator.getNumber(button.innerText)
        calculator.updateDisplay()
    
    })
    
    
});


operationButton.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.getOperation(button.innerText)
        calculator.updateDisplay()
    })
})




equalsButton.addEventListener('click', ()=>{
    calculator.calculation()
    calculator.updateDisplay()

})

deleteButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', ()=>{
    calculator.allClear()
    calculator.updateDisplay()
})