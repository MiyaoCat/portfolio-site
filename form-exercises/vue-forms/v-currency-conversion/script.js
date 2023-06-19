const bus = new Vue();
new Vue({
	el: "[data-vue='currencyConversion']",
	
	data() {
		return {
			instructions: `
				<p class='normal-voice'>We'll be converting Euros to Dollars</p>
				<ol>
					<li class='normal-voice'>1. Enter the number of Euros you're converting.</li>
					<li class='normal-voice'>2. Enter the current exchange rate.</li>
				</ol>`,
			euros: "",
			xRate: "",
			showMessage: false,
		};
	},

	computed: {
		conversion() {
			const number = this.euros*this.xRate/100;
			const numberFormatted = number.toLocaleString('en-us', {style: 'decimal', maximumFractionDigits: 2});
			return numberFormatted;
		},
		message() {
			return `You will have $${this.conversion}🇺🇸💵.`;
		}
	},
	
	// methods: {
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}		
	// },

	watch: {
		message(newValue) {
			bus.$emit('computed-message', newValue);
		}
	}
});

new Vue({
	el: "[data-vue='outputCurrencyConversion']",

	data() {
		return {
			outputMessage: "",
		}
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.outputMessage = newValue;
		}.bind(this));
	}
})