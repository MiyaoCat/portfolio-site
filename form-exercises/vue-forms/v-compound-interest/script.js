const bus = new Vue();

new Vue({
	el: "[data-vue='compoundInterest']",
	
	data() {
		return {
			instructions: `
				<p>Time to make some real money. Let's see how much you'll make over time when your money <span style="color:var(--standout)">compounds</span>!</p>`,
			principal: "",
			interestRate: "",
			years: "",
			compounds: "",
			showMessage: false,
		};
	},

	computed: {
		conversion() {
			var principal = parseFloat(this.principal);
			var interest = this.interestRate/100;
			var years = this.years;
			var compounds = this.compounds;
			var powerTo = compounds*years;
			
			var totalReturn =  parseFloat((principal*(1 + (interest/compounds))**powerTo));
			var totalReturnFormatted = (principal*(1 + (interest/compounds))**powerTo).toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			return totalReturnFormatted;
		},
		message() {
			var principal = parseFloat(this.principal);
			var principalFormatted = principal.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			var noPrincipal = (this.principal == "" || this.principal == 0);
			var noInterestRate = (this.interestRate == "" || this.interestRate == 0);
			var noYears = (this.years == "" || this.years == 0);
			var noCompounds = (this.compounds == "");
			
			var principalOnly = (noInterestRate && noYears && noCompounds);
			var intrestRateOnly = (noPrincipal && noYears && noCompounds);
			var yearsOnly = (noPrincipal && noInterestRate && noCompounds);
			var compoundsOnly = (noPrincipal && noInterestRate && noYears);
			
			var totalEarned = parseFloat(this.conversion.replace(/,/g, ''));
			var interestEarned = parseFloat(totalEarned-this.principal);
			var interestedFormatted = interestEarned.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			if (noPrincipal && noInterestRate && noYears && noCompounds) {
				return "We need numbers, buddy."
			}
			if (principalOnly || intrestRateOnly || yearsOnly || compoundsOnly) {
				return "Still need the other three numbers"
			}			
			
			if (noPrincipal) {
				return "Nothing of nothing is nothing.";
			}
			if (noInterestRate) {
				return "No interest? Not interested.";
			}
			if (noYears) {
				return "No years? No growth."
			}			
			
			if (this.principal > 0 && this.interestRate > 0 && this.years > 0) {
				return `$${principalFormatted} invested at ${this.interestRate}% for ${this.years} year(s) compounded ${this.compounds} times per year will earn you $${interestedFormatted} in interest with a total return of $${this.conversion}.`;
			}	
		}
	},
	
	// methods: {
	// 	messageHandler() {
	// 		this.showMessage = true;
	// 	}		
	// }

	watch: {
		message(newValue) {
			bus.$emit("computed-message", newValue);
		}
	}
});

new Vue({
	el: "[data-vue='outputCompoundInterest']",

	data() {
		return {
			outputMessage: "",
		}
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.outputMessage = newValue;
		}.bind(this));
	}
})


















