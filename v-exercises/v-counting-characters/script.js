new Vue({
	el: "[data-vue='countingChar']",
	
	data() {
		return {
			string: "",
			title: "Counting Characters",
		};
	},
	
	methods: {
		countWords(str) {
  			return str.trim().split(/\s+/).length;
		},
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
				return `Total characters WITHOUT spaces: ${this.countCharOnly}`;
			}
		},
		message2() {
			if (this.countWithSpaces) {
				return `Total characters WITH spaces: ${this.countWithSpaces}`;
			}
		},
		message3() {
			return `Word count: ${this.countWords(this.string)}`;
		}
	}
	
});

