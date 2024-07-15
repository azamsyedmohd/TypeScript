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
