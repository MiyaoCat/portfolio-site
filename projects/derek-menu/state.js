const state = {
	count: 0,

	increment() {
		this.count++;
		console.log(this.count);
	},

	decrement() {
		this.count--;
		console.log(this.count);
	},

	getCount() {
		return this.count;
	},
};

export default state;
