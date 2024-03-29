const bus = new Vue();

new Vue({
	el: "[data-vue='bmiCalc']",
	
	data() {
		return {
			instructions: "Enter your height and weight to calculate your Body Mass Index. Use the slider to select your weight. According to the CDC a healthy BMI is between 18.5 and 25.",
			feet: "",
			inches: "", 
			weight: "100",
			showMessage: false,
		};
	},
	
	computed: {
		totalInches() {
			return parseFloat(this.feet*12)+parseFloat(this.inches);
		},
		bmi() {
			var bmiCalc = this.weight/(this.totalInches*this.totalInches)*703;
			var bmiFormatted = bmiCalc.toFixed(2);
			return bmiFormatted;
		},
		message() {
			if (this.feet > 0 && this.inches && this.weight) {
				if (this.bmi < 18.5) {
					return `Your BMI is ${this.bmi}. You need to eat more!`;
				}
				if (this.bmi > 25) {
					return `Your BMI is ${this.bmi}. According to the calculation, you're BMI is too high.`;
				} else {
					return `Your BMI is ${this.bmi}. You're juuuust right.`
				}
			} else {
				return '<p class="bad">Need more info</p>';
			}
		}		
	},
	
	// methods: {
	// 	messageHandler() {
	// 		event.preventDefault();
	// 		this.showMessage = true;
	// 	}, 
	// }
	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue);
		}
	},
});

new Vue({
	el: "[data-vue='outputBmiCalc']",

	data() {
		return {
			outputMessage: "",
		}
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.outputMessage = newValue;
		}.bind(this));
	},
})










