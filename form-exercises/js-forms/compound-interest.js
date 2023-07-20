<form id="compound" type="POST">
	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow when it <span class="special">COMPOUNDS</span>!</p>
	</div>

	<div class="principal">
		<label for="principal" class="normal-voice">Enter the principal investment:</label>
		<input 
			type="number"
			id="principal"
			min=1
			step=1
			placeholder=100
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="rate">
		<label for="rate" class="normal-voice">Enter the interest rate of your investment as a percent:</label>
		<input 
			type="number"
			id="rate"
			min=.1
			step=.1
			placeholder=4
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="years">
		<label for="years class="normal-voice"">Enter the number of years you'll invest:</label>
		<input 
			type="number"
			id="years"
			min=1
			step=1
			placeholder=5
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="compounding">
		<label for="compounding" class="normal-voice">Enter the number of times the interest compounds per year:</label>
		<input 
			type="number"
			id="compounding"
			min=1
			step=1
			placeholder=4
		>
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit" name="submitted">Cha Ching!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("compound");

	const $principal = document.getElementById("principal");
	const $principalWarn = document.querySelector(".principal .warning");

	const $rate = document.getElementById("rate");
	const $rateWarn = document.querySelector(".rate .warning");

	const $years = document.getElementById("years");
	const $yearsWarn = document.querySelector(".years .warning");


	const $compounding = document.getElementById("compounding");
	const $compoundingWarn = document.querySelector(".compounding .warning");

	const $output = document.querySelector("output");
	$output.hidden = true;

	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		let principal = $principal.value;
		let rate = $rate.value/100;
		let years = $years.value;
		let compounding = $compounding.value;

		let principalFormatted = principal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		let totalEarned = parseFloat( principal*( 1 + (rate/compounding) )**(compounding*years) ).toFixed(2)
		let totalEarnedFormatted = totalEarned.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		
		$output.innerHTML = `
			<p class="normal-voice">That's great! Your principal investment of <span class="special">$${principalFormatted}</span> will turn into <span class="special">$${totalEarnedFormatted}</span> after <span class="special">${years}</span> years.</p>
		`

		const fields = [
			{
				input: principal,
				warning: $principalWarn,
				message: "You're broke?"	
			},
			{
				input: rate,
				warning: $rateWarn,
				message: "Technically you'll lose money with inflation"	
			},
			{
				input: years,
				warning: $yearsWarn,
				message: "That's not investing"	
			},
			{
				input: compounding,
				warning: $compoundingWarn,
				message: "That's not investing"	
			}
		]

		fields.forEach(function (field) {
			const { input, warning, message } = field;

			if (input == "") {
				warning.innerHTML = message;
				$output.hidden = true;
			} else {
				warning.innerHTML = "";


				$output.hidden = false;

			}
		});
	})
</script>


























