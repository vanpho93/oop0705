class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        const { x, y } = this;
        return Math.sqrt(x * x + y * y)
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const { pointA, pointB } = this;
        const dx = pointB.x - pointA.x;
        const dy = pointB.y - pointA.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const { pointA, pointB, pointC } = this;
        const lineAB = new Line(pointA, pointB);
        const lineBC = new Line(pointB, pointC);
        const lineAC = new Line(pointA, pointC);
        return lineAB.getLength() + lineBC.getLength() + lineAC.getLength();
    }
}

const pointA = new Point(1, 0);
const pointB = new Point(0, 1);
const pointC = new Point(0, 0);
// const lineAB = new Line(pointA, pointB);
// console.log(lineAB.getLength());
const trABC = new Triangle(pointA, pointB, pointC);
console.log(trABC.getPerimeter());

// const person = { name: 'Teo', school: { name: 'KP', address: '92 LRT' } };
// const name = person.school.name;
// const address = person.school.address;
// const { name, address } = person.school;
// console.log(name, address);
