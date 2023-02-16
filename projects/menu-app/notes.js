
function itemDetails(menuItems) {
	var template = "";
	var itemKey = "";
	var found = menuItems.find( function(item) {
  		return item.slug = itemKey;
	});
	menuItems.forEach( function(item) {
		
		if (item.slug === itemKey) {
		template += `
				<h2>${item.title}</h2>
				<p>${item.description}</p>
				<img src="${item.image}" alt="">
		`
		
		}
	})
	
	return template;
}
