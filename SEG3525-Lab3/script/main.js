
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function checked(){
	//get boolean value of checked boxe
	var isOrganic = document.getElementById("organicOnly").checked;

	return isOrganic;

}


//the next two funttions where taken from https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);


	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
		var optionArrayProduct = optionArray[1];
		var optionArrayPrice = optionArray[0];
		var optionArrayImage = optionArray[2];

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArrayProduct.length; i++) {

		var productName = optionArrayProduct[i];
		var productP = optionArrayPrice[i];
		var productI = optionArrayImage[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;

		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productP;
		label.appendChild(document.createTextNode(productP)); //productName
		s2.appendChild(label);

 		s2.appendChild(document.createElement("br"));

		var image = document.createElement('img');
		image.setAttribute("src", "apple.jpg");
  	image.setAttribute("width", "105");
  	image.setAttribute("height", "100");
  	image.setAttribute("alt", " Image not Available");
  	s2.appendChild(image);


		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}