function printName(person: { first: string; last: string }): void {
  console.log(`${person?.first} ${person?.last}`);
}
printName({ first: "Syed", last: "Mohd Azam" });

let coordinate: { x: number; y: number } = {
  x: 34,
  y: 4,
};

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
