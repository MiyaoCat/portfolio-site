new Vue({
	el: "[data-vue='hello']",
	
	data() {
		return {
			title: "Hello!",
			name: "",
			question: "What's ya name?",
		};
	},
	
	methods: {
		yell() {
			if (this.name.trim() == "") {
        		alert(`I asked for your name!`);
     		} 
		}
	},
	
	computed: {
		message() {
			preventdefault();
			if (this.name.trim() !== "") {
        		return `Hello ${this.name}. Nice to meetchya!`;
     		}
		}
	}
});