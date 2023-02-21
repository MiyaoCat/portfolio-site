import { pages } from "./pages2.js";
import { menuItems } from './menu-items.js';
import { renderMenu } from "./render2.js";

window.addEventListener('click', function(event) {
	if ( event.target.matches('[data-screen]') ) {
		document.querySelector('main').style.backgroundColor = event.target.dataset.color;

		console.log(event.target);
	}

	if (event.target.matches('[data-screen="menu"]') ) {
		renderMenu();
	}
})