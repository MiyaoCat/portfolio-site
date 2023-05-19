const bus = new Vue();

new Vue({
	el: "[data-vue='tempConverter']",
	
	data() {
		return {
			instructions: "Convert the temperature from Fahrenheit to Celsius or vice versa.",
			temperature: "",
			tempType: "",
			showMessage: false,
		};
	},
	
	computed: {
		calculation() {
			if (this.tempType == 'fahrenheit') {
				return (this.temperature-32)*5/9;
			} else {
				return (this.temperature*9/5)+32;
			}
		
	},
		
	message() {
		if (this.temperature && this.tempType) {
			var tempFormatted = this.calculation.toFixed(2);
			return this.tempType == 'fahrenheit' ? `That will be ${tempFormatted} deg C` : `That will be ${tempFormatted} deg F.`;
		} else {
			return 'Not enough info';
			}
		}
	},
	
	methods: {
		handleEnterKey(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
			}
		}
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}, 
	},

	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue);
		}
	},
});

new Vue({
	el: "[data-vue='outputTempConverter']",

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


