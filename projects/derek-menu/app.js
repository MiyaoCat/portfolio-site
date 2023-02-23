import styles from "./styles.scss";

import menuItems from "./data/menu-items.js";
import pages from "./data/pages.js";
import { setData, getData } from "./data/utilities.js";
import { addItem } from "./inventory.js";

import { renderPage, renderItemDetail } from "./rendering.js";

console.clear();

function initialize() {
	if (localStorage.getItem("cart")) {
		// great
	} else {
		localStorage.setItem("cart", "test");
	}

	if (localStorage.getItem("menu")) {
		// great
	} else {
		localStorage.setItem("menu", JSON.stringify(menuItems));
	}
}

initialize();

//////////

window.addEventListener("click", function (event) {
	if (event.target.matches("[data-route]")) {
		let route = event.target.dataset.route;

		console.log(">>> route: ", route);

		if (route == "landing") {
			renderPage(pages[route]);
		}

		if (route == "menu") {
			renderPage(pages[route]);
		}

		if (route == "itemDetail") {
			var searchSlug = event.target.closest("article").dataset.id; // 'apple'

			var found = menuItems.find(function (item) {
				return item.slug == searchSlug; // find the matching item...
			});

			renderItemDetail(found); // render that item...
		}

		if (route == "cart") {
			renderPage(pages[route]);
		}

		if (route == "admin") {
			renderPage(pages[route]);
		}
	}

	if (event.target.matches("[data-action]")) {
		var action = event.target.dataset.action;

		if (action == "add") {
			// var id = event.target.closest("section, item").dataset.id;
			// console.log(`Add ${id} to cart.`);
			// state.cart.push(id);
			// console.log(state.cart);
		}

		if (action == "new") {
			event.preventDefault();

			// ?

			var $form = event.target.closest("form");

			var $name = $form.querySelector("[data-input='name']");
			var $price = $form.querySelector("[data-input='price']");
			var $color = $form.querySelector("[data-input='color']");

			var newItem = {
				name: $name.value,
				price: $price.value,
				color: $color.value,
			};

			addItem(newItem);

			$name.value = "";
			$price.value = "";
			$color.value = "";

			$name.focus();
		}
	}
});

renderPage(pages["admin"]);

export { getData };

//

//

//

//

//

//

//

//

//
