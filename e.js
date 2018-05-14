const numbers = [1, 4, 6, 2, 8, 5, 9];

const people = [
    { name: 'Teo', age: 10, height: 170 },
    { name: 'Ti', age: 12, height: 160 },
    { name: 'Tun', age: 15, height: 150 },
    { name: 'Tuan', age: 14, height: 190 },
];

// console.log(numbers.filter(num => num % 2 === 1));
// console.log(people.filter(person => person.age > 13));
Array.prototype.myFilter = function(fn) {
    const output = [];
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) output.push(element);
    }
    return output;
}

// console.log(numbers.myFilter(num => num % 2 === 1));
// console.log(people.myFilter(person => person.age > 13));
