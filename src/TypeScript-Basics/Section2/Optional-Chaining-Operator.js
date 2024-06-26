function getCustomer(id) {
    if (id === 0) {
        return null;
    }
    else if (id === 1) {
        return { id: 1 };
    }
    else if (id === 2) {
        return { id: 2, name: "Mosh-Hamedani" };
    }
    else if (id === 3) {
        return {
            id: 3,
            name: "Abdul-Ahad-Mirza",
            designation: "Government-Employee",
        };
    }
    else {
        return undefined;
    }
}
var customerZero = getCustomer(0);
console.log(customerZero === null || customerZero === void 0 ? void 0 : customerZero.id, customerZero === null || customerZero === void 0 ? void 0 : customerZero.name, customerZero === null || customerZero === void 0 ? void 0 : customerZero.designation);
var customerOne = getCustomer(1);
console.log(customerOne === null || customerOne === void 0 ? void 0 : customerOne.id, customerOne === null || customerOne === void 0 ? void 0 : customerOne.name, customerOne === null || customerOne === void 0 ? void 0 : customerOne.designation);
var customerTwo = getCustomer(2);
console.log(customerTwo === null || customerTwo === void 0 ? void 0 : customerTwo.id, customerTwo === null || customerTwo === void 0 ? void 0 : customerTwo.name, customerTwo === null || customerTwo === void 0 ? void 0 : customerTwo.designation);
var customerThree = getCustomer(3);
console.log(customerThree === null || customerThree === void 0 ? void 0 : customerThree.id, customerThree === null || customerThree === void 0 ? void 0 : customerThree.name, customerThree === null || customerThree === void 0 ? void 0 : customerThree.designation);
var customerFour = getCustomer(4);
console.log(customerFour === null || customerFour === void 0 ? void 0 : customerFour.id, customerFour === null || customerFour === void 0 ? void 0 : customerFour.name, customerFour === null || customerFour === void 0 ? void 0 : customerFour.designation);
