let products = [
  { product: "Shampoo", price: 150 },
  { product: "Shirt", price: 550 },
  { product: "Pant", price: 850 },
  { product: "ice-cream", price: 1150 },
];

function getProducts(products) {
  let totall = 0;
  for (product of products) {
    totall = totall + product.price;
  }
  return totall;
}
let setProduct = getProducts(products);
console.log("all products price --> " + setProduct + " Taka");
