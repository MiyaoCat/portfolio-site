import { menuItems } from "./menu-items.js";



menuItems.forEach( function(item) {
		return `
			<ul>
				<li>${item.title}</li>
				<li>${item.description}</li>
				<li>${item.price}</li>
				<li>${item.image}</li>
			</ul>
		`;
	});


var $outlet = document.querySelector("[data-outlet='main']");

function setScreen(name) {
	$outlet.innerHTML = pages[name];

	console.log("Show: ", name);
}

var pages = {};

pages.home = `
	<h1>Home Page</h1>

	<button>Login</button>
`;

pages.menu = `
	<h1>Menu Page</h1>
	<div>${menuItems[0].title}</div>
	<div>${menuItems[0].description}</div>
	<div>${menuItems[0].price}</div>
	<div>${menuItems[0].image}</div>
`

export { setScreen, $outlet };