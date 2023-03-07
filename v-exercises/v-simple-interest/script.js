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
		message(event) {
			event.preventDefault();
			var noPrincipal = (this.principal == "" || this.principal == 0);
			var noInterestRate = (this.interestRate == "" || this.interestRate == 0);
			var noYears = (this.years == "" || this.years == 0);
			
			var principalOnly = (noInterestRate && noYears);
			var intrestRateOnly = (noPrincipal && noYears);
			var yearsOnly = (noPrincipal && noInterestRate);

			if (noPrincipal && noInterestRate && noYears) {
				return "<p class='bad'>We need need numbers!</p>"
			}				
			if (principalOnly || intrestRateOnly || yearsOnly) {
				return "<p class='bad'>Still need the other two</p>"
			}				
			if (noPrincipal) {
				return "<p class='bad'>Nothing of nothing is nothing.</p>";
			}
			if (noInterestRate) {
				return "<p class='bad'>No interest? Not interested.</p>";
			}
			if (noYears) {
				return "<p class='bad'>No years? No growth.</p>"
			}
			
			var years = parseFloat(this.years);
			var yearsFormatted = years.toLocaleString("en-us", {maximumFractionDigits: 2});

			var interest = parseFloat(this.interestEarned);
			var interestFormatted = interest.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			var total = parseFloat(this.conversion);
			var totalFormatted = total.toLocaleString("en-us", {maximumFractionDigits: 2, minimumFractionDigits: 2});
			
			if (this.principal > 0 && this.interestRate > 0 && this.years > 0) {
				return `After <span>${yearsFormatted}</span> year(s) you will have earned <span>$${interestFormatted}</span> in interest for a total return of <span>$${totalFormatted}</span>.`;
			}		
		}
	},
	
	methods: {
		messageHandler(event) {
			event.preventDefault();
			this.showMessage = true;
		}		
	}
});