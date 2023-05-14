const bus = new Vue();

new Vue({
	el: "[data-vue='countChar']",
	
	data() {
		return {
			string: "test",
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
		messageWithSpaces() {
			if (this.countWithSpaces) {
				return `Total characters WITH spaces: ${this.countWithSpaces}`;
			}
		},
		wordCount() {
			if (this.countWithSpaces) {
				return `Word count: ${this.countWords(this.string)}`;
			}
		}
	},

	watch: {
		message(newValue) {
			bus.$emit('computed-msg-changed', newValue);
		},
		messageWithSpaces(newValue) {
			bus.$emit('computed-msg-w-space', newValue);
		},		
		wordCount(newValue) {
			bus.$emit('computed-msg-word-count', newValue);
		},				
	},
});

new Vue({
	el: '[data-vue="outputChar"]',
		data() {
			return {
				computedMessage: '',
				countWithSpaces: '',
				computedWordCount: '',
		};
	},
	mounted() {
		// Listen to the computed message changed event
		bus.$on('computed-msg-changed', function(newValue) {
			this.computedMessage = newValue;
		}.bind(this));

		bus.$on('computed-msg-w-space', function(newValue) {
			this.countWithSpaces = newValue;
		}.bind(this));		
		
		bus.$on('computed-msg-word-count', function(newValue) {
			this.computedWordCount = newValue;
		}.bind(this));				
	},
});