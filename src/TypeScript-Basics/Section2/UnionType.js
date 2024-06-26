function weight(weight) {
    // Type Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.3;
    }
}
console.log(weight(20));
console.log(weight("20kg"));
