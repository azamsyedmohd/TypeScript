type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employeeObject: Employee = {
  id: 357,
  name: "Mosh Hamedani",
  retire: (date: Date) => {
    console.log("I am displaying a Date type object : ", date);
  },
};

employeeObject.name = "Syed Mohd Azam";
console.log(employeeObject);
