import { setScreen, $outlet, renderMenu } from "./set-modules.js";
import { state, getItemBySlug } from "./state.js";
import { list as cart, addItem } from "./cart.js";

window.addEventListener("click", function (event) {
	const { target: clicked } = event;
	const data = clicked.dataset;


	if ( clicked.matches("[data-screen]") ) {
		setScreen(data.screen, state);

		document.querySelector("main").style.backgroundColor = data.color;
	};

	if ( clicked.matches("[data-action='add-item']") ) {
		// console.log(clicked);

		// clicked.closest(".item-card").style.backgroundColor = data.color;
		let $itemCard = document.querySelector('.item-card');
		return $itemCard.style.backgroundColor = 'orange';
	};

	if (clicked.matches(".item-card[data-item]") ) {
		console.log('Menu item:', data.item);
		// var found = menuItems.find( function(item) {
			// return item.slug == searchedSlug; 
		// });
		if (state.currentItem == getItemBySlug(data.item)) {

			return `<h1>${data.item}</h1>`
		};
		
		console.log('Current item:', state.currentItem);
	};


	if ( clicked.matches("[data-action='add-item']") ) {
		// console.log(clicked.closest('.item-card').dataset.item)
		addItem( clicked.closest('.item-card').dataset.item )

	}
	//Listen for click on add to cart. Store item in an object. use slug First click add count to new object
	//Additional clicks, add to count

});

setScreen("menu", state);