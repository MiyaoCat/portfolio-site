<form id="bmi-calc" type="POST">
	<div class="instructions">
		<p class="normal-voice">Enter your height and weight and this outdated formula will either make you feel good about yourself or tell you you're unhealthy.</p>
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

			<p class="calm-voice warning"></p>	
		</div>

		<div class="imperial">
			<div class="height">
				<p class="normal-voice">How tall are you?</p>
				<div class="feet">
					<label for="feet">Ft</label>
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
					<label for="inches">In</label>
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
			</div>

			<div class="weight">
				<p class="normal-voice">How much do you weigh?</p>
				<label for="pounds">LBs</label>
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
				<p class="normal-voice">How tall are you?</p>
				<label for="centimeters">CM</label>
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
				<p class="normal-voice">How much do you weigh?</p>
				<label for="kilos">K</label>
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

	const $button = document.querySelector("button");
	$button.hidden = true;

	const $output = document.querySelector("output");
	$output.hidden = true;

	function isChecked(value) {
		console.log(value)
		if (value == "imperial") {
			$imperial.hidden = false;
			$metric.hidden = true;
			$button.hidden = false;			
		} 
		if (value == "metric") {
			$imperial.hidden = true;
			$metric.hidden = false;
			$button.hidden = false;			
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

		let centsToInches = centimeters * 0.393701;
		let kilosToPounds = kilos * 2.2;

		let bmi = ( pounds / (totalInches * totalInches) )*703;
		let bmiFormatted = bmi.toFixed(2)
		let bmiMetric = ( kilosToPounds / (centsToInches * centsToInches) )*703;
		let bmiMetricFormatted = bmiMetric.toFixed(2);

		function checkValue(value) {
  			return document.querySelector(`[value="${value}"]`).checked;
  		}

  		function message(bmi) {
  			if (checkValue("imperial")) {
  				if (bmi < 18.5) {
	  				return `${bmiFormatted} Like grandma always says, "You're too skinny. You need to eat more!"`
	  			}
	  			if (bmi > 25) {
	  				return `${bmiFormatted} You're too fat.`
	  			} else {
	  				return `${bmiFormatted} You're healthy`
	  			}
  			} else {
  				if (bmi < 18.5) {
	  				return `Metric ${bmiMetricFormatted} Like grandma always says, "You're too skinny. You need to eat more!"`
	  			}
	  			if (bmi > 25) {
	  				return `Metric ${bmiMetricFormatted} You're too fat.`
	  			} else {
	  				return `Metric ${bmiMetricFormatted} You're healthy`
	  			}
  			}
  		}

		if (checkValue("imperial")) {
			$output.hidden = false;
			$output.innerHTML = `${message(bmi)}`
		}  
		if (checkValue("metric")) {
			$output.hidden = false;
			$output.innerHTML = `${message(bmiMetric)}`
		}

	})

</script>


























