let employee: {
  readonly id: number;
  name: string;
  retire: (parameter: Date) => void;
} = {
  id: 1,
  name: "Syed Mohd Azam",
  retire: (param: Date) => {
    console.log(param);
  },
};
employee.name = "Mosh Hamedani";
// employee.id = 0;
