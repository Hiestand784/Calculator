import { MathOperations, Operator } from './Operations'

export class CalculatorController {
    // State Properties
    private currentOperand: string = '0';
    private previousOperand: string = '';
    private activeOperator: Operator | null = null;
    private shouldResetScreen: boolean = false;

    getDisplayValue(): string {
        return this.currentOperand;
    }

    // Handle User Input
    appendNumber(number: string): void {
        if (number === '.' && this.currentOperand.includes('.')) return;

        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
            return;
        }

        if (this.shouldResetScreen) {
            this.currentOperand = number === '.' ? '0.' : number;
            this.shouldResetScreen = false;
        } else {
            this.currentOperand += number;
        }
    }

    // Math Operation
    chooseOperation(operator: Operator): void {
        if (this.currentOperand === '') return;

        if (this.previousOperand !== '') {
            this.compute();
        }
        this.activeOperator = operator;
        this.previousOperand = this.currentOperand;
        this.shouldResetScreen = true;
    }

    //Calculation
    compute(): void {
        if (!this.activeOperator || this.previousOperand === '') return;

        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        const result = MathOperations.calculate(prev, current, this.activeOperator);

        if (isNaN(result)) {
            this.currentOperand = 'Error';
        } else {
            this.currentOperand = Number(result.toFixed(8)).toString();
        }

        this.activeOperator = null;
        this.previousOperand = '';
        this.shouldResetScreen = true;
    }

    // Reset Display Grid
    clear(): void {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.activeOperator = null;
        this.shouldResetScreen = false;
    }
}