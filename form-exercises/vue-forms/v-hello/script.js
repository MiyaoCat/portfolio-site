const bus = new Vue();

new Vue({
	el: "[data-vue='hello']",
		data() {
			return {
				title: "Hello!",
				name: "",
				question: "What's ya name?",
				message: "",
			};
	},

	// methods: {
	// 	yell() {
	// 		if (this.name.trim() == "") {
	// 			alert("I asked for your name!");
	// 		} else {
	// 			this.message = `Hello ${this.name}. Nice to meet you!`;
	// 		}
	// 	},
	// },

	computed: {
		computedMessage() {
			if (this.name.trim() !== "") {
				return `Hello ${this.name}. Nice to meet you!`;
			}
		},
	},

	watch: {
		computedMessage(newValue) {
			bus.$emit('computed-msg', newValue);
		}
	}
});

new Vue({
	el: "[data-vue='hello-output']",
		data() {
			return {
				computedMessage: "",
			};
	},

	mounted() {
		bus.$on("computed-msg", function(newValue) {
			this.computedMessage = newValue;
		}.bind(this));
	}
})
















