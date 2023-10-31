type Role = 'admin' | 'user' | 'editor';

let roles: Array<Role>;
roles = ['admin', 'editor', 'user'];

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
};

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
}

// const newUser = merge<{ name: string }, { age: number }>({ name: 'asd123' }, { age: 20 });
const newUser = merge({ name: 'asd123' }, { age: 20 });

console.log(newUser.name);
console.log(newUser.age);
