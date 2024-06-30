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
