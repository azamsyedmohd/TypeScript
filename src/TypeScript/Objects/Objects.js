function printName(person) {
    console.log("".concat(person === null || person === void 0 ? void 0 : person.first, " ").concat(person === null || person === void 0 ? void 0 : person.last));
}
printName({ first: "Syed", last: "Mohd Azam" });
var coordinate = {
    x: 34,
    y: 4,
};
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
