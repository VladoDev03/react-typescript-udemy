let userName: string = 'Me';
let userAge: number = 20;
let isSmart: boolean = true;
// let hobbies: string[] = [
//     'Gym',
//     'Swimming',
//     'Rubik\'s cubes',
//     'Coding',
//     'Guitar',
//     'Taekwon-do',
//     'Blender 3D',
//     'Photoshop Graphic Design'
// ];

let userId: string | number = 'abc';
userId = 123;

// let user = {
//     name: 'Me',
//     age: 20,
//     isAdmin: true,
//     id: 'abc123'
// }

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

user = {
    name: 'Me',
    age: 20,
    isAdmin: true,
    id: 'abc123'
};

// let hobbies: Array<string>;
let hobbies: string[]; // Same thing

hobbies = [
    'Gym',
    'Swimming',
    'Rubik\'s cubes',
    'Coding',
    'Guitar',
    'Taekwon-do',
    'Blender 3D',
    'Photoshop Graphic Design'
];
