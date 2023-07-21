<form id="bac" type="POST">
	<div class="instructions">
		<p class="normal-voice">Fill in the prompts to see if you're sober enough to drive or if you need to call an uber.</p>
	</div>

	<div class="gender">
		<p class="normal-voice">Select your biological gender:</p>
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

		<p class="calm-voice warning"></p>
	</div>

	<div class="alcohol">
		<label for="alcohol">How many drinks have you had?</label>
		<input 
			type="number"
			id="alcohol"
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
			step=1
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
	const $form = document.getElementById("bac");

	const $male = document.getElementById("male");
	const $female = document.getElementById("female");
	const $genderWarn = document.querySelector(".gender .warning");

	const $drinks = document.getElementById("drinks");
	const $drinksWarn = document.querySelector(".drinks .warning");

	const $weight = document.getElementById("weight");
	const $weightWarn = document.querySelector(".weight .warning");

	const $time = document.getElementById("time");
	const $timeWarn = document.querySelector(".time .warning");

	const $output = document.querySelector("output");

	function isChecked(value) {
  		return value;
	}
	
	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		male = $male.value;
		female = $female.value;

		if (male) {
			let bac = 1.1;
			console.log(bac)
		}

		if (female) {
			let bac = 2.2;
			console.log(bac)
		}
	})
</script>







































