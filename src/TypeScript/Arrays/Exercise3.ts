// Create a Product type that contains a name and a price.
// An example of product could be:
// {name:"coffee mug",price:11.50}.
// Write a function called getTotal that accepts an array of Product types.And it should return the sum of all the products prices.

type Product = {
  name: string;
  price: number;
};

function getTotal(product: Product[]): number {
  let sum: number = 0;
  for (const value of product) {
    sum += value.price;
  }
  return sum;
}
