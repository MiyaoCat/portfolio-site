const bus = new Vue();

new Vue({
	el: "[data-vue='passwordValidation']",
	
	data() {
		return {
			instructions: "",
			password: "",
			style: false,
			showMessage: false,
		};
	},
	
	computed: {
		validatePassword() {
			trimPassword = this.password.trim();
			if (trimPassword === 'Sesame') {
				return true;
			} else {
				return false;
			}
		},
		message() {
			if (this.validatePassword) {
				return "✅ You may enter ✅";
				this.style = true;
			} else {
				return "🙅🏽‍♀️ 🚫 DENIED ❌ 🙅‍♂️";
				this.style = false;
			}
		}
	},
		  
	// methods: {
		
	// 	messageHandler() {
	// 		event.preventDefault();
	// 		this.showMessage = true;
	// 	}, 
	// },

	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue)
		}
	},
});

new Vue({
	el: "[data-vue='outputPassword']",

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




