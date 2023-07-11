<form id="retirement-calc" method="POST">
	<div class="instructions">
		
	</div>

	<div class="age">
		<label for="age">What is your Current Age?</label>
		<input type="number" name="age" min=1 placeholder=1>
	</div>

	<div class="retire-age">
		<label for="retire-age">At what age would you like to retire?</label>
		<input type="number" name="retire-age" min="age" placeholder="">
	</div>

	<button type="submit">Retire!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $output = document.querySelector("output");
	$output.hidden = true;

	const ageInput = document.querySelector('[name="age"]');
	const retireAgeInput = document.querySelector('[name="retire-age"]');

	ageInput.addEventListener('input', function() {
	  retireAgeInput.min = parseFloat(ageInput.value)+1;
	  retireAgeInput.placeholder = parseFloat(ageInput.value)+1;
	});

	console.log(retireAgeInput.value);
</script>