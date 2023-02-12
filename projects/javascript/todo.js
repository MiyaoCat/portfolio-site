function GroceryList() {

	this.list = [];
	this.id = 1;

	this.display = function(note = "") {
		console.log(`---${note}`);
		console.log(`All Items: ${this.list}`)
	}

	this.add = function(item) {
		const newItem = {
			id: `a${this.id++}`,
			item = item,
		}

		this.list = [...this.list, newItem];
		this.display(`Added: ${item}`)
	}
}