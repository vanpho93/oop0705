const numbers = [1, 4, 6, 2, 8, 5, 9];

const people = [
    { name: 'Teo', age: 10, height: 170 },
    { name: 'Ti', age: 12, height: 160 },
    { name: 'Tun', age: 15, height: 150 },
    { name: 'Tuan', age: 14, height: 190 },
];

// findIndex, filter, map
// some, every, find, sort, reduce
// console.log(people.some(person => person.age > 19));
// console.log(people.every(person => person.age > 10));
// console.log(people.find(person => person.name === 'Tun'));
// console.log(numbers.reduce((a, b) => a + b));
console.log(people.map(p => p.age).reduce((a, b) => a + b));
