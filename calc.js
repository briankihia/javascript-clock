previousDataDisplay = document.querySelector('.data-previous-display')
currentDataDisplay = document.querySelector('.data-current-display')
numberButton = document.querySelectorAll('.data-number-button')
operatorButton = document.querySelectorAll('.data-operator-button')
equalButton = document.querySelector('.data-equal-button')
deleteButton = document.querySelector('.data-delete-button')
allClearButton = document.querySelector('.data-all-clear-button')


class Calculator {
    constructor(previousDataDisplay, currentDataDisplay) {
        this.previousDataDisplay = previousDataDisplay
        this.currentDataDisplay = currentDataDisplay

        this.clear()
    }

    appendNumber(number){

        if(number === '.' && this.currentData.includes('.')) return

        this.currentData =this.currentData.toString() + number.toString()

    }

    clear(){
        this.currentData =''
        this.previousData= ''
        this.operator = undefined
    }

    delete(){
        this.currentData = this.currentData.toString().slice(0,-1)
    }

    appendOperator(operator){

        if(this.currentData ==='') return

        if(this.previousData != '') {
            this.calculations()
        }

        this.operator = operator
        this.previousData = `${this.currentData} ${this.operator}`
        this.currentData = ''

    }



   calculations(){

    let compute
    const prev = parseFloat(this.previousData)
    const current = parseFloat(this.currentData) 


    switch(this.operator) {
        case '+':
            compute = prev + current
            break

        case '-':
            compute = prev - current
            break

        case '/':
            compute = prev / current
            break

        case '%':
            compute = prev % current
            break

        case '*':
            compute = prev * current
            break

        default:
            return

    }

    this.previousData = ''
    this.currentData = compute
    this.operator = undefined
        
   } 
 




    updateDisplay(){
        this.currentDataDisplay.innerText = this.currentData

        this.previousDataDisplay.innerText = this.previousData
    }


    

}

const calculator = new Calculator(previousDataDisplay,currentDataDisplay)


numberButton.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    
});


operatorButton.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendOperator(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})

equalButton.addEventListener('click', ()=>{
    calculator.calculations()
    calculator.updateDisplay()
})