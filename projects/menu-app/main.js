import { setScreen, $outlet } from "./set-modules.js";
import { menuItems } from "./menu-items.js";

const $body = document.querySelector('header');

$body.addEventListener("click", function (event) {
	
	if (event.target.matches("[data-screen]")) {
		setScreen(event.target.dataset.screen);

		document.querySelector("main").style.backgroundColor = event.target.dataset.color;
	};
})

