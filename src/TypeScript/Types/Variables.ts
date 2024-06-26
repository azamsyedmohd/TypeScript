let batsmanName: string = "Sir Vivian Richards";
batsmanName = "Sachin Tendulkar";
// batsmanName = 9; // Type 'number' is not assignable to type 'string'.

let numCatLives: number = 9;
numCatLives += 2.4;
// numCatLives = "Virat Kohli"; // Type 'string' is not assignable to type 'number'.

let gameOver: boolean = true;
gameOver = false;
// gameOver = "true"; // Type 'string' is not assignable to type 'boolean'.
const oneVariable: null = null;
const secondVariable: undefined = undefined;

// Type Inference

let value = "Sunil Gavaskar";
value = "Sachin Tendulkar";
value = "Virat kohli";
// value = true; //  Type 'boolean' is not assignable to type 'string'.

// Any type --> stops checking and type inference.
let thing: any = "Hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();
