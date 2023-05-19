const bus = new Vue();
new Vue({
	el: "[data-vue='currencyConversion']",
	
	data() {
		return {
			instructions: `
				<p>We'll be converting Euros to Dollars</p>
				<ol>
					<li>Enter the number of Euros you're converting</li>
					<li>Enter the current exchange rate</li>
				</ol>`,
			euros: "",
			xRate: "",
			showMessage: false,
		};
	},

	computed: {
		conversion() {
			return this.euros*this.xRate/100;
		},
		message() {
			return `You will have $${this.conversion.toFixed(2)}🇺🇸💵.`;
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