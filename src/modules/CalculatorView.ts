import { CalculatorController } from './CalculatorController';
import { Operator } from './Operations';

export class CalculatorView {
    private controller: CalculatorController;
    private displayElement: HTMLElement;
    private containerElement: HTMLElement;
    private historyElement: HTMLElement;

    constructor() {
        this.controller = new CalculatorController();
        this.displayElement = document.getElementById('display-screen') as HTMLElement;
        this.containerElement = document.getElementById('buttons-container') as HTMLElement;
        this.historyElement = document.getElementById('display-history') as HTMLElement;

        this.setupEvents();
    }

    private setupEvents(): void {
        this.containerElement.addEventListener('click', (event: MouseEvent) => {
            const clickedElement = event.target as HTMLElement;

            console.log("Element Clicked:", clickedElement.tagName, clickedElement);

            if (clickedElement.tagName !== 'BUTTON') return;
            const type = clickedElement.dataset.type;
            const value = clickedElement.dataset.value;

            console.log(`Extracted Attributes -> Type: ${type}, Value: ${value}`);

            if (!type || !value) return;
            this.processInput(type, value);

            // Refresh
            this.render();

            console.log("Current Controller Display Value:", this.controller.getDisplayValue());

        });
    }

    private processInput(type: string, value: string): void {
        switch (type) {
            case 'number':
                this.controller.appendNumber(value);
                break;
            case 'operator':
                this.controller.chooseOperation(value as Operator);
                break;
            case 'equals':
                this.controller.compute();
                break;
            case 'clear':
                this.controller.clear();
                break;
        }
    }

    private render(): void {
        this.displayElement.textContent = this.controller.getDisplayValue();
        this.historyElement.textContent = this.controller.getHistoryValue();
    }
}