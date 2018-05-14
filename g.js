const numbers = [1, 4, 6, 2, 8, 5, 9, 100];

const people = [
    { name: 'Teo', age: 10, height: 170 },
    { name: 'Ti', age: 12, height: 160 },
    { name: 'Tun', age: 15, height: 150 },
    { name: 'Tuan', age: 14, height: 190 },
];

// console.log(numbers.sort((a, b) => a - b));

console.log(people.sort((a, b) => a.age - b.age));
