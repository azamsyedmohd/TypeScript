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
