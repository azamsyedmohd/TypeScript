type PointOne = {
  x: number;
  y: number;
};

const numOne: PointOne = { x: 34, y: 56 };

interface PointTwo {
  x: number;
  y: number;
}

const numTwo: PointTwo = { x: Math.random() * 2, y: Math.random() * 3 };
console.log(numOne);
console.log(numTwo);
