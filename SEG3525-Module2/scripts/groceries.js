
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
  organic: false

},
{
  name: "salmon",
  vegetarian: false,
  glutenFree: true,
  price: 10.00,
  organic: true,
},
{
  name: "pomme",
  vegetarian: true,
  glutenFree: true,
  price: 0.80,
  organic: true

},

{
  name: "poulet",
  vegetarian: false,
  glutenFree: true,
  price: 9.00,
  organic: false
},
{
  name: "lait",
  vegetarian: true,
  glutenFree: true,
  price: 2.00,
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
  price: 1.00,
  organic: true

},
{
  name: "beurre",
  vegetarian: true,
  glutenFree: true,
  price: 3.50,
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

var globalOrganicTrue;

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function checked(){

  //code suivant inspirer du lien https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
  var organicTrue = document.getElementsById("organicOnly").checked;

  globalOrganicTrue = organicTrue;


}

function restrictListProducts(prods, restriction) {
let product_names = [];

for (let i=0; i<prods.length; i+=1) {
  if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) ){

    if (globalOrganicTrue == true){
      if ((prods[i].organic == true)){
        product_names.push(prods[i].name+ prods[i].price);
      }
    }else{
      product_names.push(prods[i].name+ prods[i].price);
    }

  }
  else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){

    if (globalOrganicTrue == true){
      if ((prods[i].organic == true)){
        product_names.push(prods[i].name+  " " + prods[i].price);
      }
    }else{
      product_names.push(prods[i].name +  " " + prods[i].price);
    }
  }else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].vegetarian == true)  && (prods[i].glutenFree == true) ){
    if (globalOrganicTrue == true){
      if ((prods[i].organic == true)){
        product_names.push(prods[i].name +   " " + prods[i].price);
      }
    }else{
      product_names.push(prods[i].name + " " + prods[i].price);
    }
  }
  else if (restriction == "None" ){

    if (globalOrganicTrue == true){
      if ((prods[i].organic == true)){
        product_names.push(prods[i].name + prods[i].price);
      }
    }else{
      product_names.push(prods[i].name + prods[i].price);
    }
  }
}

//inspired by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
product_names = product_names.sort(function (a, b) {
  return a.price - b.price;
});

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
