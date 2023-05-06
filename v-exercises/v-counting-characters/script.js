const bus = new Vue();

new Vue({
	el: "[data-vue='countChar']",
	
	data() {
		return {
			string: "",
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
			if (this.countWithSpaces) {
				return `Word count: ${this.countWords(this.string)}`;
			}
		}
	},
	
	watch: {
		message(newValue) {
			bus.$emit('computed-message-changed', newValue);
		},
	},
});

    new Vue({
      el: '[data-vue="outputChar"]',
      data() {
        return {
          computedMessage: '',
        };
      },
      mounted() {
        // Listen to the computed message changed event
        bus.$on('computed-message-changed', (newValue) => {
          this.computedMessage = newValue;
        });
      },
    });