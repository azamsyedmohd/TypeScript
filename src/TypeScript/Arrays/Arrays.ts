const activeUsers: [] = [];
const names: string[] = [];
names.push("Syed Mohd Azam");
names.push("Syed Hasan Uddin");
names.push("Syed Aqib Uddin");
const ages: number[] = [];
ages.push(23);
ages.push(56);
ages.push(79);
ages.push(147);
console.log(activeUsers);
console.log(names);
console.log(ages);

// Another syntax for arrays

const numberedValues: Array<number> = [];
numberedValues.push(197);
numberedValues.push(207);

type PointType = {
  x: number;
  y: number;
};

const pointTypeValues: PointType[] = [];
pointTypeValues.push({ x: 78, y: 89 });
pointTypeValues.push({ x: 87, y: 98 });
console.group(pointTypeValues);
