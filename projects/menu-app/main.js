import { setScreen, $outlet, renderMenu } from "./set-modules.js";


// const $body = document.querySelector('header');

window.addEventListener("click", function (event) {
	
	if ( event.target.matches("[data-screen]") ) {
		setScreen(event.target.dataset.screen);

		document.querySelector("main").style.backgroundColor = event.target.dataset.color;
	};

	if ( event.target.matches("[data-action='add-item']") ) {
		// console.log(event.target);

		event.target.closest(".item-card").style.backgroundColor = event.target.dataset.color;
	};

	if (event.target.matches(".item-card" && "[data-item]") ) {
			
	};

})

