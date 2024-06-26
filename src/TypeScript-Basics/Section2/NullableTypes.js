function greet(name) {
    console.log(name === null || name === void 0 ? void 0 : name.toLowerCase());
}
greet(undefined); // undefined
greet(null); // undefined
greet("Syed Mohd Azam"); // syed mohd azam
function greets(name) {
    if (name) {
        console.log(name.toLowerCase());
    }
    else {
        console.log("Hola!");
    }
}
greets("Syed Mohd Azam");
greets(null);
greets(undefined);
