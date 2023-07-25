<form id="bmi-calc" type="POST">
	<div class="instructions">
		<p class="normal-voice">Enter your height and weight and this outdated method will tell you if you're overweight or not.</p>
	</div>

	<div class="height">
		<p class="normal-voice">Would you like to use the imperial system or metric system?</p>
		
		<div class="radio-buttons">
			<div class="imperialType">
				<label for="imperial">Imperial</label>
				<input 
					type="radio"
					id="imperial"
					name="measureType"
					value="imperial"
					onclick="isChecked('imperial')"
				>
			</div>

			<div class="metricType">
				<label for="metric">Metric</label>
				<input 
					type="radio"
					id="metric"
					name="measureType"
					value="metric"
					onclick="isChecked('metric')"
				>
			</div>
		</div>

		<div class="imperial">
			<div class="feet">
				<label for="feet">Feet</label>
				<input 
					type="number"
					id="feet"
					min=0
					step=1
					placeholder=1
				>
			<p class="calm-voice warning"></p>	
			</div>
			
			<div class="inches">
				<label for="inches">Inches</label>
				<input 
					type="number"
					id="inches"
					min=0
					step=1
					max=11
					placeholder=1
				>
			<p class="calm-voice warning"></p>	
			</div>

			<div class="weight">
				<label for="pounds">How much do you weigh?</label>
				<input 
					type="number"
					id="pounds"
					min=1
					step=1
					placeholder=1
				>
			<p class="calm-voice warning"></p>	
			</div>
		</div>

		<div class="metric">
			<div class="height">
				<label for="centimeters">Centimeters</label>
				<input 
					type="number"
					id="centimeters"
					min=0
					step=.1
					placeholder=1
				>
			<p class="calm-voice warning"></p>	
			</div>

			<div class="weight">
				<label for="kilos">Kilograms</label>
				<input 
					type="number"
					id="kilos"
					min=0
					step=.1
					placeholder=1
				>
			<p class="calm-voice warning"></p>	
			</div>
		</div>

	</div>

	<button type="submit">Am I Healthy?</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("bmi-calc");

	const $imperial = document.querySelector(".imperial");
	$imperial.hidden = true;

	const $metric = document.querySelector(".metric");
	$metric.hidden = true;

	const $feet = document.getElementById("feet");
	const $feetWarn = document.querySelector(".feet .warning");

	const $inches = document.getElementById("inches");
	const $inchesWarn = document.querySelector(".inches .warning");

	const $pounds = document.getElementById("pounds");
	const $poundsWarn = document.querySelector(".pounds .warning");

	const $centimeters = document.getElementById("centimeters");
	const $centimetersWarn = document.querySelector(".centimeters .warning");

	const $kilos = document.getElementById("kilos");
	const $kilosWarn = document.querySelector(".kilos .warning");

	function isChecked(value) {
		console.log(value)
		if (value == "imperial") {
			$imperial.hidden = false;
			$metric.hidden = true;
		} else {
			$imperial.hidden = true;
			$metric.hidden = false;
		}
	}


	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		let feet = parseFloat($feet.value);
		let inches = parseFloat($inches.value);
		let totalInches = (feet * 12) + inches;
		let pounds = parseFloat($pounds.value);

		let centimeters = parseFloat($centimeters.value);
		let kilos = parseFloat($kilos.value);




		console.log(totalInches);
	})

</script>


























