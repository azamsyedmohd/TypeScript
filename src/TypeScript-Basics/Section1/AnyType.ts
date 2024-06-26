let sales: number = 123456789;
let course: string = "TypeScript";
let isPublished: boolean = true;
// sales = "String"; // Type string is not assignable to type number.
let level;
level = 789;
level = "String";
level = true;

function funcName(document: any) {
  console.log(document);
}
console.log(sales);
console.log(course);
console.log(isPublished);
funcName("Azam");
funcName(100);
funcName(true);
