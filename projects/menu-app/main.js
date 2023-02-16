import { setScreen, $outlet, renderMenu } from "./set-modules.js";
import { state, getItemBySlug } from "./state.js";
import { list as cart, addItem } from "./cart.js";

window.addEventListener("click", function (event) {
	

	if ( event.target.matches("[data-action='add-item']") ) {
		// console.log(event.target);

		event.target.closest(".item-card").style.backgroundColor = event.target.dataset.color;
	};

	if (event.target.matches(".item-card" && "[data-item]") ) {
			console.log(event.target.dataset.item);
			state.currentItem = getItemBySlug(event.target.dataset.item);
			console.log(state.currentItem);
	};

	if ( event.target.matches("[data-screen]") ) {
		setScreen(event.target.dataset.screen, state);

		document.querySelector("main").style.backgroundColor = event.target.dataset.color;
	};

	if ( event.target.matches("[data-action='add-item']") ) {
		console.log(event.target.closest('.item-card').dataset.item)
		addItem( event.target.closest('.item-card').dataset.item )

	}
	//Listen for click on add to cart. Store item in an object. use slug First click add count to new object
	//Additional clicks, add to count

})

