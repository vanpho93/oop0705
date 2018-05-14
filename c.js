const numbers = [1, 4, 6, 2, 8, 5, 9];

const people = [
    { name: 'Teo', age: 10, height: 170 },
    { name: 'Ti', age: 12, height: 160 },
    { name: 'Tun', age: 15, height: 150 },
    { name: 'Tuan', age: 14, height: 190 },
    { name: 'Ti', age: 12, height: 160 },
];

Array.prototype.myFindIndex = function(fn) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (fn(element)) return index;
    }
    return -1;
}

const index = people.myFindIndex(person => person.name === 'Ti');
console.log(index);
