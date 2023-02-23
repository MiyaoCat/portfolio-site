import menuItems from "./data/menu-items.js";
import state from "./state.js";

import { getData } from "./app.js";

function renderPage(template) {
	document.querySelector('[data-outlet="main"]').innerHTML = template;
}

function renderItem(item) {
	return `
		<article class='item' data-id='${item.slug}'>
			<h2>${item.name}</h2>
			<p>$${item.price}</p>

			<button data-route='itemDetail'>Details<idutton>
		</article>
	`;
}

function renderMenu() {
	return getData("menu")
		.map(function (item) {
			return renderItem(item);
		})
		.join("");
	// just a little tidier than forEach.. but also a little more mysterious
}

function renderItemDetail(item) {
	document.querySelector('[data-outlet="main"]').innerHTML = `
		<article data-action='add'>
			<h1>${item?.name}</h1>

			<h1>$${item?.price}</h1>

			<button data-route='menu'>Back</button>
			<button data-action='add'>Add to cart</button>
		</article>
	`;
}

export { renderPage, renderItem, renderMenu, renderItemDetail };
