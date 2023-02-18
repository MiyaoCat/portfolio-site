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

		clicked.closest(".item-card").style.backgroundColor = data.color;
	};

	if (clicked.matches(".item-card[data-item]") ) {
		console.log('Menu item:', data.item);
		
		if (state.currentItem = getItemBySlug(data.item)) {
			setScreen("itemDetails", state);
		};
		
		console.log('Current item:', state.currentItem.title);
	};


	if ( clicked.matches("[data-action='add-item']") ) {
		// console.log(clicked.closest('.item-card').dataset.item)
		addItem( clicked.closest('.item-card').dataset.item )

	}
	//Listen for click on add to cart. Store item in an object. use slug First click add count to new object
	//Additional clicks, add to count

});

setScreen("menu", state);