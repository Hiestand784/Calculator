// Define operations
export type Operator = '+' | '-' | '*' | '/' | '%';

export class MathOperations {
    static calculate(num1: number, num2: number, operator: Operator): number {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return NaN;
                }
                return num1 / num2;
            case '%':
                return num1 % num2;
            default:
                // Operator error flag
                throw new Error(`Unsupported operator: ${operator}`);
        }
    }
}
