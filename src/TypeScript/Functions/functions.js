function square(num) {
    return num * num;
}
var doSomething = function (person, age, isFunny) {
    if (person === void 0) { person = "person"; }
    return "".concat(person, " with ").concat(age, " is ").concat(isFunny ? "funny" : "not funny");
};
doSomething(undefined, 67, true);
function example(a, b, c) {
    if (a === void 0) { a = 0; }
    console.log(a);
    console.log(b);
    console.log(c);
}
example();
example(45, "Azam");
example(56, "Hasan", true);
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
function checkedType(value) {
    return Math.random() > 0.5 ? value : value.toString();
}
console.log(checkedType(5));
console.log(checkedType(67));
console.log(checkedType(78));
// Return type of function be void
function printTwice(message) {
    console.log(message);
    console.log(message);
}
printTwice("Syed Mohd Azam");
// Automatic Inference
var colors = ["red", "blue", "yellow", "green", "purple"];
var colorsResults = colors.map(function (color) { return color.toUpperCase(); });
console.log(colorsResults);
// Excercise 1 on Functions
// Write a function called "twoFer" that accepts a person's name.It should return a string in the format "one for <name>, one for me".It no name is provided , it should default to 'you'.
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me!");
}
console.log(twoFer());
console.log(twoFer("Syed Mohd Azam"));
// Write isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year or not.
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
