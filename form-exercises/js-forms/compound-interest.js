<form id="compound" type="POST">
	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow when it COMPOUNDS!</p>
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
		let rate = $rate.value;
		let years = $years.value;
		let compounding = $compounding.value;

		if (principal == "" || principal == 0) {
			console.log("none")
			$principalWarn.innerHTML = "none"
		}
	})
</script>


























