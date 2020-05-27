
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
{
  name: "brocoli",
  vegetarian: true,
  glutenFree: true,
  price: 1.99,
  organic: true
},
{
  name: "bread",
  vegetarian: true,
  glutenFree: false,
  price: 2.35,
  organic: true
},
{
  name: "salmon",
  vegetarian: false,
  glutenFree: true,
  price: 10.00,
  organic: true
},
{
  name: "pomme",
  vegetarian: true,
  glutenFree: true,
  price: 0.89,
  organic: true

},

{
  name: "poulet",
  vegetarian: false,
  glutenFree: true,
  price: 9.99,
  organic: false
},
{
  name: "lait",
  vegetarian: true,
  glutenFree: true,
  price: 2.99,
  organic: false
},

{
  name: "biscuit",
  vegetarian: true,
  glutenFree: false,
  price: 2.75,
  organic: false

},
{
  name: "noix",
  vegetarian: true,
  glutenFree: true,
  price: 1.99,
  organic: true

},
{
  name: "beurre",
  vegetarian: true,
  glutenFree: true,
  price: 3.55,
  organic: false
},
{
  name: "ton",
  vegetarian: false,
  glutenFree: true,
  price: 7.99,
  organic: true
}
];

let isOrganic = false;

function checked(){

	 isOrganic = document.getElementById("organicOnly").checked;

}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
let product_names = [];
let product_sorted_with_price = [];
let names = [];

for (let i= 0; i<prods.length; i+=1) {
  if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){

    if(isOrganic = false ){
      product_names.push(prods[i]);
    }else{
      if (prods[i].organic == isOrganic){
        product_names.push(prods[i]);
      }

    }
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

 return [product_sorted_with_price, names];

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
