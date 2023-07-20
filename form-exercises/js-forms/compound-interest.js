<form id="compound" type="POST">
	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow when it COMPOUNDS!</p>
	</div>

	<div class="principal">
		<label for="principal" class="normal-voice">What is the principal amount?</label>
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
		<label for="rate" class="normal-voice">What is the annual interest rate?</label>
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
		<label for="years class="normal-voice"">What is the number of years you'll invest?</label>
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
		<label for="compounding" class="normal-voice">What is the number of times the interest is compounded per year?</label>
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


	const $output = document.querySelector("output");
	$output.hidden = true;
</script>







