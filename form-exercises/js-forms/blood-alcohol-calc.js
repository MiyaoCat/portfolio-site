<form id="blood-alcohol" type="POST">
	<div class="instructions">
		<p class="normal-voice">Fill in the prompts to see if you're sober enough to drive or if you need to call an uber. The legal BAC limit is 0.08.</p>
	</div>

	<div class="gender">	
		<p class="normal-voice">Select your biological gender:</p>
		<div class="radio-buttons">
			<div class="male">
				<label for="male">Male</label>
				<input 
					type="radio"
					id="male"
					name="gender"
					value="male"
					onclick="isChecked('male')"
				>
			</div>
			
			<div class="female">
				<label for="female">Female</label>
				<input 
					type="radio"
					id="female"
					name="gender"
					value="female"
					onclick="isChecked('female')"
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<div class="drinks">
		<label for="drinks">How much alcohol have you consumed (in ounces)?</label>
		<input 
			type="number"
			id="drinks"
			min=0
			step=1
			placeholder=1
		>

		<p class="calm-voice warning"></p>
	</div>

	<div class="weight">
		<label for="weight">How much do you weigh in pounds?</label>
		<input 
			type="number"
			id="weight"
			min=0
			step=1
			placeholder=1
		>

		<p class="calm-voice warning"></p>
	</div>

	<div class="time">
		<label for="time">How many hours since your last drink?</label>
		<input 
			type="number"
			id="time"
			min=0
			step=.5
			placeholder=1
		>

		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Am I drunk?</button>
</form>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<output></output>

<script>
	const $form = document.getElementById("blood-alcohol");
	const $genderWarn = document.querySelector(".gender .warning");

	const $drinks = document.getElementById("drinks");
	const $drinksWarn = document.querySelector(".drinks .warning");

	const $weight = document.getElementById("weight");
	const $weightWarn = document.querySelector(".weight .warning");

	const $time = document.getElementById("time");
	const $timeWarn = document.querySelector(".time .warning");

	const $output = document.querySelector("output");
	$output.hidden = true;

	function isChecked(value) {
  		return value;
	}

	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		$output.hidden = false;
		const gender = document.querySelector("[name='gender']:checked").value;

		let drinks = parseFloat($drinks.value);
		let weight = parseFloat($weight.value);
		let time = parseFloat($time.value);

		if (gender.value == "") {
			$output.hidden = true;
			$genderWarn.innerHTML = "Please select one."
		}
		if (gender === "male") {
			var ratio = .73;
		}

		if (gender == "female") {
			var ratio = .66;
		}

		let bac = ( ( (drinks * 5.14) / (weight * ratio) ) - .015 * time);
		let bacFormatted = bac.toFixed(2);

		if (bac >= 0.08) {
			$output.innerHTML = `
				Your BAC is ${bacFormatted}. You'll have to call a car.
			`
		}else {
			$output.innerHTML = `
				Your BAC is ${bacFormatted}. You pass.
			`
		}
	})

</script>







































