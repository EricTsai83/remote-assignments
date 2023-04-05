/**
 * To calculate the total price of all products after applying a discount.
 * @param {object} data
 */

/*
Solution 1: for loop
*/
// Destructuring assignment
function calculate({discount, products}) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice = totalPrice + products[i].price * (1 - discount);
  }
  return totalPrice;
}
/*
Solution 2: array.reduce()
The reduce() method in JavaScript is used to apply a function to each element
in an array and reduce the array to a single value. It takes two arguments: a
callback function and an optional initial value.
Ex. array.reduce(callback, initialValue);

`{price}` extracts the price property from the current object being processed
by the reduce() method and assigns it to a variable named price
*/
function calculate({discount, products}) {
  const totalPrice = products.reduce(
    // Arrow function expressions
    (total, {price}) => total + price,
    0,
  );
  const discountedTotal = totalPrice * (1 - discount);
  return discountedTotal;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 700},
    {name: "Product 3", price: 250},
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount
