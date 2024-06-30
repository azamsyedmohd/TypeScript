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

type another = {
  b: number;
};

type obj = {
  a: string;
  y: another;
};

type Point = {
  x: number;
  y: number;
  z: string;
  v: string[];
  w: obj;
  p: null;
  q: undefined;
  r: boolean;
};

const pointExample: Point = {
  x: 34,
  y: 56,
  z: "Syed Mohd Azam",
  v: ["Syed", "Muhammad", "Azam"],
  p: null,
  q: undefined,
  r: true,
  w: {
    a: "Good Job",
    y: {
      b: 54,
    },
  },
};
console.log(pointExample);
