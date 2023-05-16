const bus = new Vue();

new Vue({
	el: "[data-vue='madLib']",
	
	data() {
		return {
			noun: "",
			verb: "",
			adjective: "",
			adverb: "",
			title: "Mad Libs",
		};
	},
	
	computed: {
		message() {
			if (this.noun && this.verb && this.adjective && this.adverb) {
				return `Do you ${this.verb} your ${this.adjective} ${this.noun} ${this.adverb}? That's silly.`;
			}
		}
	}, 

	watch: {
		message(outputMessage) {
			bus.$emit("computed-message", outputMessage);
		}
	}
});

new Vue({
	el: "[data-vue='outputMadLibs']",

	data() {
		return {
			computedMessage: "",
		};
	},

	mounted() {
		bus.$on("computed-message", function(outputMessage) {
			this.computedMessage = outputMessage;
		}.bind(this));
	}
})