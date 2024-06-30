function square(num) {
    return num * num;
}
var doSomething = function (person, age, isFunny) {
    if (person === void 0) { person = "person"; }
    return "".concat(person, " with ").concat(age, " is ").concat(isFunny ? "funny" : "not funny");
};
doSomething(undefined, 67, true);
