const bus = new Vue();

new Vue({
	el: "[data-vue='pizzaParty']",
	
	data() {
		return {
			instructions: "See how many pizzas to order for your party assuming there's 8 slices per pie.",
			people: "",
			pizzas: "",
			message: "",
			userInputs: "",
		};
	},
	
	computed: {
		outputMessage() {
			let people = parseFloat(this.people);
			let pizzas = parseFloat(this.pizzas);
			let slices = pizzas*8;

			let slicesPerPerson = Math.floor(slices / people);
			let remainder = (slices % people);
			
			if (this.people > 0 && this.pizzas > 0) {
				return `There will be <span>${slicesPerPerson}</span> 🍕 per 💁‍♂️  with <span>${remainder}</span> 🍕 to 🤼 for.`;
			} 
			if (this.people == "" && this.pizzas > 0 ) {
				return "No 💁‍♂️";
			} 
			if (this.pizzas == "" && this.people > 0 ) {
				return "No 🍕";
			} 
			if (this.pizzas == "" && this.people == "" ) {
				return "We need numbers!"
			}
		}
	},

	watch: {
		outputMessage(newValue) {
			bus.$emit('computed-message', newValue)
		}
	}
});

new Vue({
	el: "[data-vue='outputPizzaMessage']",

	data() {
		return {
			outputPizzaMsg: "",
		};
	},

	mounted() {
		bus.$on('computed-message', function(newValue) {
			this.outputPizzaMsg = newValue;
		}.bind(this));
	}
})







