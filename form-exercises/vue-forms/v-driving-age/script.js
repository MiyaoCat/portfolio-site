const bus = new Vue();

new Vue({
	el: "[data-vue='drivingAge']",
	
	data() {
		return {
			title: "Legal Driving Age",
			instructions: "Enter your age to see if you're old enough to legally drive or need to be legally driven.",
			age: "",
			style: false,
			showMessage: false,
		};
	},
	
	computed: {
	  verifyAge() {
		 return this.age >= 16 ? "🫵 🚗 ✅" : "You must be driven";
	  },
	},
  
	// methods: {
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}, 
	// }

	watch: {
		verifyAge(newValue) {
			bus.$emit("computed-message", newValue)
		}
	},
});

new Vue({
	el: "[data-vue='outputDrivingAge']",

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