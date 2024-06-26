var employeeObject = {
    id: 357,
    name: "Mosh Hamedani",
    retire: function (date) {
        console.log("I am displaying a Date type object : ", date);
    },
};
employeeObject.name = "Syed Mohd Azam";
console.log(employeeObject);
