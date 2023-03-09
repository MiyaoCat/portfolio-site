new Vue({
	el: "[data-vue='countingChar']",
	
	data() {
		return {
			string: "",
			title: "Counting Characters",
		};
	},
	
	computed: {
		countWithSpaces() {
			return this.string.length;
		},
		
		countCharOnly() {
			var noSpaces = this.string.replace(/ /g, "");
			return noSpaces.length;
		},
		
		message() {
			if (this.countCharOnly) {
				return `Your string is ${this.countCharOnly} characters long WITHOUT spaces. Cool.`;
			}
		},
		message2() {
			if (this.countWithSpaces) {
				return `Your string is ${this.countWithSpaces} characters long WITH spaces. Cool.`;
			}
		}
	}
	
});