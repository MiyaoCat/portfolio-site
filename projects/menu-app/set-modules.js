import { menuItems } from "./menu-items.js";

var $outlet = document.querySelector("[data-outlet='main']");

function setScreen(name) {
	$outlet.innerHTML = pages[name];

	console.log("Show: ", name);
}

var pages = {};

pages.home = `
	<h1>Home Page</h1>
`;

pages.other = `
	<h1>Other Page</h1>
`;

function renderMenu(menuItems) {
	var template = "";

	menuItems.forEach( function(item) {
		template += `
			<div class="item-card">
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

pages.menu = `
	<h1>Menu Page</h1>
	${renderMenu(menuItems)}
`;

export { setScreen, $outlet };


