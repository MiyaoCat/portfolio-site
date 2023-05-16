const bus = new Vue();

new Vue({
	el: "[data-vue='simpleMath']",
	
	data() {
		return {
			title: "Simple Math",
			number: "",
			number2: "",
			showMessage: false,
		};
	},
	
	computed: {
		userInputMessage() {
			if (this.number && this.number2) {
				return `${this.number} & ${this.number2}`
			}
		},
		add() {
			const number = (parseFloat(this.number)+parseFloat(this.number2));
			const numberFormatted = number.toLocaleString('en-us', {style: 'decimal', maximumFractionDigits: 2});
			return numberFormatted;
		},
		subtract() {
			const number = (this.number-this.number2);
			const numberFormatted = number.toLocaleString('en-us', {style: 'decimal', maximumFractionDigits: 2});
			return numberFormatted;
		},
		multiply() {
			const number = (this.number*this.number2);
			const numberFormatted = number.toLocaleString('en-us', {style: 'decimal', maximumFractionDigits: 2});
			return numberFormatted;
		},
		divide() {
			const number = (this.number/this.number2).toFixed(2);
			const numberFormatted = number.toLocaleString('en-us', {style: 'decimal', maximumFractionDigits: 2});
			return numberFormatted;
		},
		
		message() {
			if (this.number !== "" && this.number2 !== "") {
				return `
					Added: ${this.add}
					Subtracted: ${this.subtract}
					Multiplied: ${this.multiply}
					Divided: ${this.divide}
				`;
			}
			if (this.number == "" && this.number2 > 0 ) {
				return "Missing the top number";
			} 
			if (this.number2 == "" && this.number > 0 ) {
				return "Missing the bottom number";
			} 		
		},
	},
	
	// methods: {
	// 	showMessageHandler() {
	// 		this.showMessage = true;
	// 	}
	// }

	watch: {
		message(newValue) {
			bus.$emit('computed-message', newValue);
		}
	}
});

new Vue({
	el: "[data-vue='outputSimpleMath']",

	data() {
		return {
			outputMessage: "",
		};
	},

	mounted() {
		bus.$on('computed-message', function(newValue) {
			this.outputMessage = newValue;
		}.bind(this))
	}
})