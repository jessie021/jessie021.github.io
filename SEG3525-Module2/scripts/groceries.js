
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "brocoli",
  vegetarian: true,
  glutenFree: true,
  price: 1.99
},
{
  name: "bread",
  vegetarian: true,
  glutenFree: false,
  price: 2.35
},
{
  name: "salmon",
  vegetarian: false,
  glutenFree: true,
  price: 10.00
},
{
  name: "pomme",
  vegetarian: true,
  glutenFree: true,
  price: 0.80
},

{
  name: "poulet",
  vegetarian: false,
  glutenFree: true,
  price: 9.00
},
{
  name: "lait",
  vegetarian: true,
  glutenFree: true,
  price: 2.00
},

{
  name: "biscuit",
  vegetarian: true,
  glutenFree: false,
  price: 2.75
},
{
  name: "noix",
  vegetarian: true,
  glutenFree: true,
  price: 1.00
},
{
  name: "beurre",
  vegetarian: true,
  glutenFree: true,
  price: 3.50
},
{
  name: "ton",
  vegetarian: false,
  glutenFree: true,
  price: 7.99
}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
let product_names = [];

for (let i=0; i<prods.length; i+=1) {
  if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
    product_names.push(prods[i].name);
  }
  else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
    product_names.push(prods[i].name);
  }else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (restriction == "GlutenFree") && (prods[i].glutenFree == true)){
    product_names.push(prods[i].name);
  }
  else if (restriction == "None"){
    product_names.push(prods[i].name);
  }
}
return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
totalPrice = 0;
for (let i=0; i<products.length; i+=1) {
  if (chosenProducts.indexOf(products[i].name) > -1){
    totalPrice += products[i].price;
  }
}
return totalPrice;
}