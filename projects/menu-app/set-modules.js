import { menuItems } from "./menu-items.js";

var $outlet = document.querySelector("[data-outlet='main']");

function setScreen(name) {
	$outlet.innerHTML = pages[name];
	console.log("Show: ", name);
}

function renderMenu(menuItems) {
	var template = "";

	menuItems.forEach( function(item) {
		template += `
			<div class="item-card" data-screen="itemDetails" data-item="${item.slug}">
				<h2>${item.title}</h2>
				<p>${item.description}</p>
				<button data-action='add-item' data-color="blue">
					Add to Cart
				</button>
			</div>
		`;
	})

	return template;
}


var itemKey = "salmon";
var found = menuItems.find( function(item) {
	return item.slug == itemKey; 
});

// - - - PAGE SETUP - - - - - - - - -   
var pages = {};

pages.menu = `
	<h1>Menu Page</h1>
	${renderMenu(menuItems)}
`;

pages.itemDetails = `
	<div class="itemDetails" data-modal="">
		<h1>Item Details</h1>
		
			<h1>${found.title}</h1>
			<p>${found.description}</p>
			<img src="${found.image}" alt="">
		<button data-screen="menu">Back</button>
	</div>
`;

pages.home = `
	<h1>Home Page</h1>
`;

pages.other = `
	<h1>Other Page</h1>
`;


// - - - EXPORT - - - - - - - - -   
export { setScreen, $outlet, renderMenu };


