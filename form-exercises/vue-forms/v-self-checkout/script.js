const bus = new Vue();

new Vue({
	el: "[data-vue='selfCheckout']",
	
	data() {
		return {
			title: "Self-Checkout",
			instructions: "Enter your items and price of the items to see how much you need to pay. 				You do not have to fill out all four items.",
			header1: "Item 1",
			price1: "",
			quantity1: "",
			
			header2: "Item 2",
			price2: "",
			quantity2: "",
			
			header3: "Item 3",
			price3: "",
			quantity3: "",		
			
			header4: "Item 4",
			price4: "",
			quantity4: "",		

			showMessage: false,
		};
	},

	computed: {
		
		total1() {
			var noPrice1 = (this.price1 == 0 || this.price1 == "");
			if (this.quantity1 > 0 && noPrice1) {
				return 'Missing Item 1 Price';
			}
			var noQuantity1 = (this.quantity1 == 0 || this.quantity1 == "");
			if (this.price1 > 0 && noQuantity1) {
				return 'Missing Item 1 Quantity';
			}
			// var noTotal1 = (noPrice1 && noQuantity1);
			// if (noTotal1) {
			// 	return 'Item 1 empty';
			// }
	
			if (this.quantity1 > 0 && this.price1 > 0) {
				return this.quantity1*this.price1;
			}
		},
		total2() {
			var noPrice2 = (this.price2 == 0 || this.price2 == "");
			if (this.quantity2 > 0 && noPrice2) {
				return 'Missing Item 2 Price';
			}
			var noQuantity2 = (this.quantity2 == 0 || this.quantity2 == "");
			if (this.price2 > 0 && noQuantity2) {
				return 'Missing Item 2 Quantity';
			}
			// var noTotal2 = (noPrice2 && noQuantity2);
			// if (noTotal2) {
			// 	return 'Item 2 empty';
			// }
	
			if (this.quantity2 > 0 && this.price2 > 0) {
				return this.quantity2*this.price2;
			}
		},
		message() { 
			//if there's only total1 then display the subtotal
			if (this.total1 && !this.total2) {
				return "Item 1 total: " + this.total1;
			}
			//if there's only total2 then display only subtotal 2
			if (this.total2 && !this.total1) {
				return "Item 2 total: " + this.total2;
			}			
			//if there's total1 AND total2, then display the combined subtotal
			if (this.total1 && this.total2) {
				return `Subtotal: ${this.total1+this.total2}`;
			}	
		}
	},
		
	// methods: {
	// 	messageHandler(){
	// 		this.showMessage = true;
	// 	}
	// }

	watch: {
		total1(newValue) {
			bus.$emit('computed-total1', newValue)
		},
		total2(newValue) {
			bus.$emit('computed-total2', newValue)
		},
		message(newValue) {
			bus.$emit('computed-message', newValue)
		}
	}
});

new Vue( {
	el: "[data-vue='outputSelfCheckout']",

	data() {
		return {
			outputMessage: "",
		}
	},

	mounted() {
		bus.$on('computed-message', function(newValue) {
			this.outputMessage = newValue;
		}.bind(this))
	}
})





















