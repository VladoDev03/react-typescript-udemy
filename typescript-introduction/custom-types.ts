type CalcFn = (a: number, b: number) => number;

function add(a: number, b: number): number {
    return a + b;
}

function calculate(a: number, b: number, calcFn: CalcFn) {
    calcFn(a, b);
}

console.log(calculate(2, 3, add));

type StringOrNumber = string | number;

let id: StringOrNumber = 'asd';
id = 123;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: StringOrNumber;
};

const user: User = {name: 'Me', age: 20, isAdmin: true, id: 123};
user.id = '123';
