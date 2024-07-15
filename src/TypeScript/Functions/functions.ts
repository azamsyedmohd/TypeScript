function square(num: number) {
  return num * num;
}
const doSomething = (
  person: string = "person",
  age: number,
  isFunny: boolean
) => {
  return `${person} with ${age} is ${isFunny ? "funny" : "not funny"}`;
};

doSomething(undefined, 67, true);

function example(a: number = 0, b?: string, c?: boolean) {
  console.log(a);
  console.log(b);
  console.log(c);
}

example();
example(45, "Azam");
example(56, "Hasan", true);

function multiply(numOne: number, numTwo: number): number {
  return numOne * numTwo;
}

function checkedType(value: number) {
  return Math.random() > 0.5 ? value : value.toString();
}

console.log(checkedType(5));
console.log(checkedType(67));
console.log(checkedType(78));
