function addItem(item) {
	var menu = getData("menu");
	menu.push(item); // add it to the menu
	setData("menu", menu); // save
}

export { addItem };
