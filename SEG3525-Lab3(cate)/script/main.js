//the next two funttions where taken from https://www.w3schools.com/howto/howto_js_tab_header.asp
function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//the next two funttions where taken from https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//This functions inspired by https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var v1 = document.getElementById(slct5);
    var m1 = document.getElementById(slct4);
    var w1 = document.getElementById(slct3);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    v1.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
		var optionArrayProduct = optionArray[1];
		var optionArrayPrice = optionArray[0];
		var optionArrayImage = optionArray[2];
    var optionArrayGroup = optionArray[3];

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArrayProduct.length; i++) {

		var productName = optionArrayProduct[i];
		var productP = optionArrayPrice[i];
		var productI = optionArrayImage[i];
    var productG = optionArrayGroup[i];

    if (productG == "veg"){
      // create the checkbox and add in HTML DOM
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "product";
      checkbox.value = productName;

      v1.appendChild(checkbox);

      // create a label for the checkbox, and also add in HTML DOM
      var label = document.createElement('label');
      label.htmlFor = productP;
      label.appendChild(document.createTextNode(productP)); //productName
      v1.appendChild(label);

      v1.appendChild(document.createElement("br"));

      var image = document.createElement('img');
      image.setAttribute("src", productI);
      image.setAttribute("width", "105");
      image.setAttribute("height", "100");
      image.setAttribute("alt", " Image not Available");
      v1.appendChild(image);


      // create a breakline node and add in HTML DOM
      v1.appendChild(document.createElement("br"));

    }else if(productG == "meat"){
       //

    }else if(productG == "wheat"){
        //
    }

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
		image.setAttribute("src", productI);
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
