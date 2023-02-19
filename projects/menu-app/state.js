import { menuItems } from "./menu-items.js";

var state = 
	{
		currentItem: null
	};

function getItemBySlug(searchedSlug) {
	var found = menuItems.find( function(item) {
		return item.slug == searchedSlug; 
	});

	console.log('getItemBySlug:', found);
	return found;
}

export { state, getItemBySlug }
