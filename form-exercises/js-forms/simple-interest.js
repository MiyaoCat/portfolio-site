<form id="simple-interest" method="POST">

	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow over time. Follow the instructions below. Note, this is not calculating compound growth. Only *simple* growth.</p>
	</div>

	<div class="entry principal">
		<label for="principal" class="normal-voice">Enter the principal amount you'll invest.</p>
		<input 
			type="number" 
			id='principal' 
			value="" 
			placeholder ="1000" 
			min = "1"
		>
		<p class="calm-voice warning"></p>
	</div>
		

	<div class="entry interest">
		<label for="interest" class="normal-voice">Now enter the interest rate. Standard interest is 7% APY.</p>
		
		<input 
			type="number" 
			id='interest' 
			value="" 
			placeholder ="7%" 
			min = "1"
			step = "0.01"
		>	
		<p class="calm-voice warning"></p>
	</div>

	<div class="entry years">
		<label for="years" class="normal-voice">Enter the number of years you wish to invest.</p>
		
		<input 
			type="number" 
			id='years' 
			value="" 
			placeholder ="10" 
			min = "1"
		>	
		<p class="calm-voice warning"></p>
	</div>
	
	<button type="submit" name="submitted">Submit</button>

</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $form = document.querySelector("#simple-interest");
	
	let $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	let $principalInput = document.getElementById("principal");
	let $interestInput = document.getElementById("interest");
	let $yearsInput = document.getElementById("years");

	let $principalWarn = document.querySelector(".principal .warning");
	let $interestWarn = document.querySelector(".interest .warning");
	let $yearsWarn = document.querySelector(".years .warning");

	$form.addEventListener('submit', function(event) {
		event.preventDefault();

		$output.hidden = false;

		let principal = $principalInput.value;
		let interest = $interestInput.value;
		let years = $yearsInput.value;

		let totalEarned = parseFloat( (principal * (1 + (interest * .01 * years))).toFixed(2) );
		let totalEarnedFormatted = totalEarned.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

		// const warningConditions = [
		// 	{ 
		// 		condition: principal < 50, 
		// 		message: "Might as well spend it" 
		// 	},
		//   	{ 
		//   		condition: principal < 100, 
		//   		message: "Hope you're investing for a loooong time" 
		//  	},
		//  	{
		//  		condition: principal < 9999, 
		//   		message: ""
		//   	},
		//   	{ 
		//   		condition: principal > 10000, 
		//   		message: "Nice! Your parents must be proud" 
		//  	},
		//   	{ 
		//   		condition: principal > 1000000, 
		//   		message: "Can I have some??" 
		//  	}
		// ];

		// for (theCondition of warningConditions) {
		//  	if (theCondition.condition) {
		//    	$principalWarn.innerHTML = theCondition.message;
		//    	break; 
		//  	}
		// };

		const fields = [
			{
				input: principal,
				warning: $principalWarn,
				message: "We'll take any number!"
			},
			{
				input: interest,
				warning: $interestWarn,
				message: "If you don't know then try 7%"
			},
			{
				input: years,
				warning: $yearsWarn,
				message: "Make it up!"
			}
		];

		fields.forEach(function(field) {
			const { input, warning, message } = field;

			if (input.trim() === "") {
				warning.innerHTML = message;
				$output.hidden = true;
			} else {
				warning.innerHTML = "";
			}
		})


		$output.innerHTML = `<p class="normal-voice">Your total return will be <span class="special">${totalEarnedFormatted}</span> after <span class="special">${years}</span> year(s) at a <span class="special">${interest}%</span> interest rate.</p>`;

		console.log(totalEarnedFormatted);
	});
</script>













