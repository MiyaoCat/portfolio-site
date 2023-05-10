new Vue({
	el: "[data-vue='printQuote']",
	
	data() {
		return {
			title: "Printing Quotes",
			quote: "",
			author: "",
		};
	},
	
	computed: {
		message() {
			if (this.quote && this.author) {
				return `<span>${this.author}</span> once said <span>"${this.quote}"</span>.`;
			}
		}
	}
});