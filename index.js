// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      const [a, b, c, d] = this.sides;
      return (a === b) && (b === c) && (c === d);
    }
    return false;
  }

  get area() {
    if (this.isValid) {
      const [a] = this.sides;
      return a ** 2;
    }
    return null;
  }
}
