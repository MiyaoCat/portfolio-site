import { menuItems } from "./menu-items.js";
import { state, getItemBySlug } from "./state.js";

var $outlet = document.querySelector("[data-outlet='main']");

function setScreen(name, state) {
		$outlet.innerHTML = pages[name];
		console.log("Show: ", name);		

}

// function renderMenu(menuItems) {
// 	var template = "";

// 	menuItems.forEach( function(item) {
// 		template += `
// 			<div class="item-card" data-screen="itemDetails" data-item="${item.slug}">
// 				<h2>${item.title}</h2>
// 				<p>${item.description}</p>
// 				<button data-action='add-item' data-color="blue">
// 					Add to Cart
// 				</button>
// 			</div>
// 		`;
// 	})

// 	return template;
// }


// - - - PAGE SETUP - - - - - - - - -   
var pages = {};

pages.menu = `
	<h1>Menu Page</h1>
	${renderMenu(menuItems)}
`;

pages.itemDetails = `
	<div class="itemDetails" data-modal="">
		<h1>Item Details</h1>
		${state.currentItem}
		<button data-screen="menu">Back</button>
		<button data-action='add-item'>
			Add to Cart
		</button>
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


