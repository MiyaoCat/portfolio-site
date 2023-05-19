const bus = new Vue();

new Vue({
	el: "[data-vue='bacCalc']",

	data() {
		return {
			instructions: "Fill in the prompts to see if you're too drunk to drive.",
			alcohol: "",
			weight: "",
			gender: "",
			hours: "",
			showMessage: false,
		};
	},
	
	computed: {
		maleR() {
			if (this.gender == 'male') {
				return 0.73;
			}
		},
		femaleR() {
			if (this.gender == 'female') {
				return 0.66;
			}
		},
		calculation() {
			var maleBAC = (this.alcohol*5.14/this.weight*.73)-.015*this.hours;
			if (this.gender == 'male') {
				return maleBAC;
			} else { 
				return (this.alcohol*5.14/this.weight*.66)-.015*this.hours;
			}
		},
		message() {
			var bac = parseFloat(this.calculation);
			var bacFormatted = bac.toLocaleString("en-us", {maximumFractionDigits: 2});
			if (this.weight > 0 && this.gender) {
				return this.calculation >= 0.08 ? `Your BAC is ${bacFormatted}. You're too drunk` : `Your BAC is ${bacFormatted}. Drive carefully!`;
			} else {
				return "Need more info";
			}
		}
	},
	// methods: {
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}, 
	// }
	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue)
		}
	}
});

new Vue({
	el: "[data-vue='outputBacCalc']",

	data() {
		return {
			outputMessage: "",
		}
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.outputMessage = newValue;
		}.bind(this))
	}
})