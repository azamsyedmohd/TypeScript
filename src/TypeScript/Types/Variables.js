var batsmanName = "Sir Vivian Richards";
batsmanName = "Sachin Tendulkar";
// batsmanName = 9; // Type 'number' is not assignable to type 'string'.
var numCatLives = 9;
numCatLives += 2.4;
// numCatLives = "Virat Kohli"; // Type 'string' is not assignable to type 'number'.
var gameOver = true;
gameOver = false;
// gameOver = "true"; // Type 'string' is not assignable to type 'boolean'.
var oneVariable = null;
var secondVariable = undefined;
// Type Inference
var value = "Sunil Gavaskar";
value = "Sachin Tendulkar";
value = "Virat kohli";
// value = true; //  Type 'boolean' is not assignable to type 'string'.
// Any type --> stops checking and type inference.
var thing = "Hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();
// Usage of Type Annotation
var movies = ["Mughal-e-Azam", "Sholay", "Zanjeer", "Deewar"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Mughal-e-Azam") {
        foundMovie = movie;
    }
}
