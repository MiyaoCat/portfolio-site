const bus = new Vue();

new Vue({
	el: "[data-vue='simpleInterest']",
	
	data() {
		return {
			title: "Simple Interest",
			instructions: `
				<p>Let's see how much money you can make by investing with Bernie Madoff. Note, this does not calculate compound interest.</p>`,
			principal: "",
			interestRate: "",
			years: "",
			showMessage: false,
		};
	},

	computed: {
		conversion() {
			return this.principal*(1 + (this.interestRate*.01)*this.years);
		},
		interestEarned() {
			return this.principal*this.interestRate/100*this.years;
		},
		message() {
			var noPrincipal = (this.principal == "" || this.principal == 0);
			var noInterestRate = (this.interestRate == "" || this.interestRate == 0);
			var noYears = (this.years == "" || this.years == 0);
			
			var principalOnly = (noInterestRate && noYears);
			var intrestRateOnly = (noPrincipal && noYears);
			var yearsOnly = (noPrincipal && noInterestRate);

			// if (noPrincipal && noInterestRate && noYears) {
			// 	return "<p class='bad'>We need need numbers!</p>"
			// }				
			// if (principalOnly || intrestRateOnly || yearsOnly) {
			// 	return "<p class='bad'>Still need the other two</p>"
			// }				
			// if (noPrincipal) {
			// 	return "<p class='bad'>Nothing of nothing is nothing.</p>";
			// }
			// if (noInterestRate) {
			// 	return "<p class='bad'>No interest? Not interested.</p>";
			// }
			// if (noYears) {
			// 	return "<p class='bad'>No years? No growth.</p>"
			// }
			
			var years = parseFloat(this.years);
			var yearsFormatted = years.toLocaleString("en-us", {maximumFractionDigits: 2});

			var interest = parseFloat(this.interestEarned);
			var interestFormatted = interest.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			var total = parseFloat(this.conversion);
			var totalFormatted = total.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			if (this.principal > 0 && this.interestRate > 0 && this.years > 0) {
				return `<p>After <span>${yearsFormatted}</span> year(s) you will have earned <span>$${interestFormatted}</span> in interest for a total return of <span>$${totalFormatted}</span>.</p>`;
			}	
		},	
		yearsMessage() {
			if(this.years) {
				return this.years;
			}
		}	
	},

	watch: {
		message(newValue) {
			bus.$emit('computed-message', newValue)
		},
		yearsMessage(newValue) {
			bus.$emit('computed-years', newValue)
		}
	}
});


new Vue({
	el: "[data-vue='outputSimpleInterest']",

	data() {
		return {
			computedMessage: "",
			computedYears: "",
		};
	},

	mounted() {
		bus.$on("computed-message", function(newValue) {
			this.computedMessage = newValue;
		}.bind(this));

		bus.$on("computed-years", function(newValue) {
			this.computedYears = newValue;
		}.bind(this));
	}
})