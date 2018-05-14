class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointB.x - this.pointA.x;
        const dy = this.pointB.y - this.pointA.y;
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
        const lineAB = new Line(this.pointA, this.pointB);
        const lineBC = new Line(this.pointB, this.pointC);
        const lineAC = new Line(this.pointA, this.pointC);
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
