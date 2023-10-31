function printText(text: string): void {
    console.log(text);
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
    calcFn(a, b);
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, subtract));
console.log(calculate(2, 3, multiply));
console.log(calculate(2, 3, divide));
