const bus = new Vue();

new Vue({
	el: "[data-vue='paintCalc']",
	
	data() {
		return {
			instructions: "See how many gallons of paint the ceiling of a room needs assuming one gallon covers 350 square feetsies.",
			width: "",
			length: "",
			userInputs: "",
		};
	},
	
	computed: {
		outputMessage() {
			let area = parseFloat(this.width*this.length);
			let gallon = 360;
			let gallonsNeeded = Math.ceil(area/gallon);
			
			if (this.length > 0 && this.width > 0) {
				return `Your ceiling is ${area} square 🦶 which means you'll need ${gallonsNeeded} 🪣 of 🎨. Don't ask me for help!`;
			}
			if (this.length == "" || this.length == 0 ) {
				return "no length";
			} 
			if (this.width == "" || this.width == 0) {
				return "no width";
			}

			if (this.width == "" || this.width == 0 ) {
				if (this.length == "" || this.length == 0 ) {
					return "We need numbers!";
				}
			}
		}
	},

	watch: {
		outputMessage(newValue){
			bus.$emit("computed-message", newValue);
		}
	}
});


new Vue({
	el: "[data-vue='outputPaintCalc']",

	data() {
		return {
			computedMessage: "",
		};
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.computedMessage = newValue;
		}.bind(this));
	}	
})







