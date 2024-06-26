type Customer = {
  id: number;
  name?: string;
  designation?: string;
};
function getCustomer(id: number): Customer | null | undefined {
  if (id === 0) {
    return null;
  } else if (id === 1) {
    return { id: 1 };
  } else if (id === 2) {
    return { id: 2, name: "Mosh-Hamedani" };
  } else if (id === 3) {
    return {
      id: 3,
      name: "Abdul-Ahad-Mirza",
      designation: "Government-Employee",
    };
  } else {
    return undefined;
  }
}

const customerZero = getCustomer(0);
console.log(customerZero?.id, customerZero?.name, customerZero?.designation);
const customerOne = getCustomer(1);
console.log(customerOne?.id, customerOne?.name, customerOne?.designation);
const customerTwo = getCustomer(2);
console.log(customerTwo?.id, customerTwo?.name, customerTwo?.designation);
const customerThree = getCustomer(3);
console.log(customerThree?.id, customerThree?.name, customerThree?.designation);
const customerFour = getCustomer(4);
console.log(customerFour?.id, customerFour?.name, customerFour?.designation);
