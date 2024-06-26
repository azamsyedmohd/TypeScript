function greet(name: string | null | undefined) {
  console.log(name?.toLowerCase());
}
greet(undefined); // undefined
greet(null); // undefined
greet("Syed Mohd Azam"); // syed mohd azam

function greets(name: string | null | undefined) {
  if (name) {
    console.log(name.toLowerCase());
  } else {
    console.log("Hola!");
  }
}
greets("Syed Mohd Azam"); // "syed mohd azam"
greets(null); // "Hola"
greets(undefined); // "Hola"
