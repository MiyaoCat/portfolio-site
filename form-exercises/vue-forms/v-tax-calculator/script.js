const bus = new Vue();

new Vue({
	el: "[data-vue='taxCalc']",
	
	data() {
		return {
			instructions: `
				<p>Enter your order amount and we'll figure out the total bill, assuming you live in a log cabin in Wiscansin.</p>`,
			order: "",
			state: "",
			showMessage: false,
		};
	},
	
	computed: {
		subTotal() {
			var order = parseFloat(this.order);
			var orderFormatted = order.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			return orderFormatted;
		},
		tax() {
			var taxAmount = this.order*.055;
			var taxAmountFormatted = taxAmount.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			return taxAmountFormatted;
		},
		total() {
			var taxAmount = this.order*.055;
			var total = parseFloat(taxAmount)+parseFloat(this.order);
			var totalFormatted = total.toLocaleString('en-us', {maximumFractionDigits: 2, minimumFractionDigits: 2});
			return totalFormatted;
		},
		checkState() {
			var state = this.state.trim();
			if (state == 'wi' || 
				 state == 'wI' || 
				 state == 'Wi' || 
				 state == 'WI' ||
				 state == 'Wisconsin' ||
				 state == 'wisconsin' ||
				 state == 'WISCONSIN' ||
				 state == 'wiscansin' ||
				 state == 'WISCANSIN') {
				return true;
			}
		},
		message() {
			return (this.checkState ? `Subtotal: $${this.subTotal}.Total tax amount: $${this.tax}. Total bill: $${this.total}.` : `${this.state} is NOT Wisconsin. Can't compute.`);	
		}
	},
	
	// methods: {
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}
	// }

	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue);
		}
	}
});

new Vue({
	el: "[data-vue='outputTaxCalc']",

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

















