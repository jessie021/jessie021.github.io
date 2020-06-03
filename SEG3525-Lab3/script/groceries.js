
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "Brocoli",
  vegetarian: true,
  glutenFree: true,
  price: 1.99,
  organic: "false",
  image: "broccoli.jpg"

},
{
  name: "Bread",
  vegetarian: true,
  glutenFree: false,
  price: 2.35,
  organic: "true",
  image: "bread.jpg"
},
{
  name: "Salmon",
  vegetarian: false,
  glutenFree: true,
  price: 10.00,
  organic: "true",
  image: "salmon.jpg"
},
{
  name: "Apple",
  vegetarian: true,
  glutenFree: true,
  price: 0.89,
  organic: "true",
  image: "apple.jpg"

},

{
  name: "Chicken",
  vegetarian: false,
  glutenFree: true,
  price: 9.99,
  organic: "false",
  image: "chicken.png"
},
{
  name: "Milk",
  vegetarian: true,
  glutenFree: true,
  price: 2.99,
  organic: "false",
  image: "milk.jpg"
},

{
  name: "Cookies",
  vegetarian: true,
  glutenFree: false,
  price: 2.75,
  organic: false,
  image: "cookie.jpg"

},
{
  name: "Nuts",
  vegetarian: true,
  glutenFree: true,
  price: 1.99,
  organic: "true",
  image: "nuts.jpg"

},
{
  name: "Butter",
  vegetarian: true,
  glutenFree: true,
  price: 3.55,
  organic: "false",
  image: "butter.jpg"
},
{
  name: "Tuna",
  vegetarian: false,
  glutenFree: true,
  price: 7.99,
  organic: "true",
  image: "tuna.jpg"
}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
let product_names = [];
let product_sorted_with_price = [];
let image = [];
let names = [];

for (let i= 0; i<prods.length; i+=1) {

  if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
    product_names.push(prods[i]);
  }
  else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
    product_names.push(prods[i]);
  }
  else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].vegetarian == true)  && (prods[i].glutenFree == true) ){
    product_names.push(prods[i]);
  }

  else if (restriction == "None"){
    product_names.push(prods[i]);
  }
  else if (restriction == "Organic"){
    if (prods[i].organic == "true"){
      product_names.push(prods[i]);
    }
  }
}

//inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 product_names = product_names.sort(function (a, b) {
    return a.price - b.price;
 });

 for (let i = 0; i < product_names.length; i+=1){
   product_sorted_with_price.push(product_names[i].price + "-" + product_names[i].name)
 }

 for (let i = 0; i < product_names.length; i+=1){
   names.push(product_names[i].name)
 }
 for (let i = 0; i < product_names.length; i+=1){
   image.push(product_names[i].image)
 }

 return [product_sorted_with_price, names, image];

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
