import { menuItems } from "./menu-items.js";

var state = {
		currentItem: null
	};
// const $body = document.querySelector('header');

function getItemBySlug(searchedSlug) {
	var found = menuItems.find( function(item) {
		return item.slug == searchedSlug; 
	});

	console.log(found);
	return found;
}

export { state, getItemBySlug }

//