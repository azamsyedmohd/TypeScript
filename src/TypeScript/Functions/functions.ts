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

// Return type of function be void

function printTwice(message: string) {
  console.log(message);
  console.log(message);
}

printTwice("Syed Mohd Azam");

// Automatic Inference

const colors = ["red", "blue", "yellow", "green", "purple"];
const colorsResults = colors.map((color) => color.toUpperCase());
console.log(colorsResults);

// Excercise 1 on Functions

// Write a function called "twoFer" that accepts a person's name.It should return a string in the format "one for <name>, one for me".It no name is provided , it should default to 'you'.

function twoFer(name: string = "you") {
  return `one for ${name}, one for me!`;
}
console.log(twoFer());
console.log(twoFer("Syed Mohd Azam"));

// Write isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year or not.

function isLeapYear(year: number): boolean {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
console.log(isLeapYear(300));
