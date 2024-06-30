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

interface Person {
  readonly id?: number;
  firstName: string;
  lastName: string;
  nickName?: string;
}

const person: Person = {
  id: 45,
  firstName: "Syed Muhammad",
  lastName: "Azam",
  nickName: "Syed Mohd Azam",
};
console.log(person);

interface Dog {
  name: string;
  age: number;
}
interface Dog {
  breed: string;
  bark: () => string;
}
const dogObject: Dog = {
  name: "Elton",
  age: 2,
  breed: "Australian Shepherd",
  bark: () => {
    return "Bow!! Bow!!";
  },
};
console.log(dogObject);
console.log(dogObject.bark());

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const puppy: ServiceDog = {
  name: "Golu-Golu",
  age: 1,
  breed: "German Shepherd",
  bark: function () {
    return `${this.name}is ${this.breed}`;
  },
  job: "bomb",
};
console.log(puppy);

// Multiple Inheritence between Interfaces
interface Human {
  name: string;
}
interface EmployeeInterface {
  readonly id: number;
  email: string;
}
interface Engineer extends Human, EmployeeInterface {
  level: string;
  languages: string[];
}
const engineer: Engineer = {
  id: 23456,
  name: "Syed Mohd Azam",
  email: "smazsamamu@gmail.com",
  level: "Senior Software Engineer",
  languages: ["JavaScript", "Python", "TypeScript"],
};
