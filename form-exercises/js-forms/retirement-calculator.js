<form id="retirement-calc" method="POST">
	<div class="instructions">
		<p class="normal-voice">Provide your age and the age you'd like to retire. We'll calculate how many years until retirement and the year you'll get to celebrate.</p>
		<p class="normal-voice">Current Year: <span class="special"></span></p>
	</div>

	<div class="age">
		<label for="age">What is your current age?</label>
		<input 
			type="number" 
			id="age" 
			min=1 
			step=1
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="retire-age">
		<label for="retire-age">At what age would you like to retire?</label>
		<input 
			type="number" 
			id="retire-age" 
			min="age" 
			step=1
		>
		<p class="calm-voice">Retirement age must be greater than current age.</p>
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Retire!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("retirement-calc");
	const currentYear = new Date().getFullYear();

	const $span = document.querySelector("span");
	$span.innerHTML = currentYear;

	const $output = document.querySelector("output");
	$output.hidden = true;

	const $ageInput = document.getElementById("age");
	const $ageWarn = document.querySelector(".age .warning");

	const $retireAgeInput = document.getElementById("retire-age");
	const $retireAgeWarn = document.querySelector(".retire-age .warning");

	$ageInput.addEventListener("input", function() {
		$retireAgeInput.min = parseFloat($ageInput.value)+1;
		$retireAgeInput.placeholder = parseFloat($ageInput.value)+1;
	});

	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		let age = $ageInput.value;
		let retireAge = $retireAgeInput.value;
		let ageDiff = retireAge - age;
		let retireYear = currentYear + ageDiff;

		if (age.trim() === "") {
			$output.hidden = true;
			$ageWarn.innerHTML = "Age is only a number."
		} else {
			$ageWarn.innerHTML = "";
			$output.hidden = false;
		}

		if ( retireAge.trim() === "") {
			$output.hidden = true;
			$retireAgeWarn.innerHTML = "Are you already retired??"
		}  else {
			$retireAgeWarn.innerHTML = "";
			$output.hidden = false;
		}

		$output.innerHTML = `So you want to retire when you're <span class="special">${retireAge}</span>? That gives you <span class="special">${ageDiff}</span> year(s) till retirement, which means you'll retire in the year <span class="special">${retireYear}</span>.`
	})
	 

</script>




















