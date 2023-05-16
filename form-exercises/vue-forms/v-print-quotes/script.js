const bus = new Vue();

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
				return `${this.author} once said "${this.quote}".`;
			}
		}
	},

	watch: {
		message(newValue) {
			bus.$emit('computed-message-linked', newValue);
		}
	}
});

new Vue({
	el: "[data-vue='outputPrintQuote']",

	data() {
		return {
			computedMessage: "",
		}
	},

	mounted() {
		bus.$on("computed-message-linked", function(newValue) {
			this.computedMessage = newValue;
		}.bind(this));
	}
})