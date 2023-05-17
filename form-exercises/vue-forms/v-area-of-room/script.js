const bus = new Vue();

new Vue({
	el: "[data-vue='areaOfRoom']",
	
	data() {
		return {
			description: "Let's find the area of a rectangular room",
			length: "",
			width: "",
			outputAreaMsg: "",
		};
	},

	// computed: {

	// 	message() {
	// 		let areaInFeet = (this.length*this.width);
	// 		let areaInMeters = (areaInFeet*0.09290304).toFixed(2);
			
	// 		if (this.length > 0 && this.width > 0) {
	// 			return `Your room is <span>${areaInFeet}</span> 🟪🦶 or <span>${areaInMeters} 🟩 meters</span>.`;
	// 		} 
			// if (this.length == "" && this.width > 0 ) {
			// 	this.message = "no length";
			// } 
			// if (this.width == "" && this.length > 0 ) {
			// 	this.message = "no width";
			// } 
			// if (this.width == "" && this.length == "" ) {
			// 	this.message = "We need numbers!"
			// }
		// }
	// },

	methods: {
    outputMessage() {
      let areaInFeet = this.length * this.width;
      let areaInMeters = (areaInFeet * 0.09290304).toFixed(2);

      if (this.length > 0 && this.width > 0) {
        this.userInputs = `You entered: ${this.length} feet length and ${this.width} feet width.`;
        this.outputAreaMsg = `Your room is ${areaInFeet} 🟪🦶 or ${areaInMeters} 🟩 meters.`;
      } else {
        this.userInputs = "";
        this.outputAreaMsg = "";
      }
    },
	},
	
	watch: {
		outputAreaMsg(newValue) {
			bus.$emit('computed-message', newValue)
		}
	}	
});

new Vue({
	el: "[data-vue='outputAreaOfRoom']",

	data() {
		return {
			outputAreaMsg: "",
		};
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.outputAreaMsg = newValue;
		}.bind(this));
	}	
})










