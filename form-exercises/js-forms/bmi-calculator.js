<form id="bmi-calc" method="POST">
	<div class="instructions">
		<p class="normal-voice">Enter your height and weight and this outdated formula will either make you feel good about yourself or tell you you're unhealthy. The formula states a healthy BMI is between <span class="special">18.5</span> and <span class="special">25</span>.</p>
	</div>

	
		<div class="wrapper">
			<div class="measure-type">
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
				<p class="calm-voice warning"></p>	
			</div>
			
			<div class="imperial">
				<div class="height">
					<p class="normal-voice">Enter your height:</p>
					<div class="feet">
						<label class="calm-voice" for="feet">Feet</label>
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
						<label class="calm-voice" for="inches">Inches</label>
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
					<p class="normal-voice">Enter your weight:</p>
					<div class="pounds">
						<label class="calm-voice" for="pounds">Pounds</label>
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
			</div>
			
			<div class="metric">
			
				<div class="height">
					<p class="normal-voice">Enter your height:</p>
					<div class="centimeters">
						<label class="calm-voice" for="centimeters">CM</label>
						<input 
							type="number"
							id="centimeters"
							min=0
							step=1
							placeholder=1
						>
						<p class="calm-voice warning"></p>	
					</div>
				</div>
			
				<div class="weight">
					<p class="normal-voice">Enter your weight:</p>
			
					<div class="kilos">
						<label class="calm-voice" for="kilos">K</label>
						<input 
							type="number"
							id="kilos"
							min=0
							step=.5
							placeholder=1
						>
						<p class="calm-voice warning"></p>	
					</div>
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
	console.log($form.innerHTML)
	console.log("- - - - - - - - - - - - - ");
	console.log($form.innerText)
	console.log("- - - - - - - - - - - - - ");
	console.log($form.textContent)
	const $imperial = document.querySelector(".imperial");
	$imperial.style.display = "none";

	const $metric = document.querySelector(".metric");
	$metric.style.display = "none";

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
			$imperial.style.display = "flex";
			$metric.style.display = "none";
			$button.hidden = false;			
		} 
		if (value == "metric") {
			$metric.style.display = "flex";
			$imperial.style.display = "none";
			$button.hidden = false;			
		}
	}

	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		$output.hidden = false;

		let feet = Number($feet.value);
		let inches = Number($inches.value);
		let totalInches = (feet * 12) + inches;
		let pounds = Number($pounds.value);

		let centimeters = Number($centimeters.value);
		let kilos = Number($kilos.value);

		let centsToInches = centimeters * 0.393701;
		let kilosToPounds = kilos * 2.2;

		let bmi = ( pounds / (totalInches * totalInches) )*703;
		let bmiFormatted = bmi.toFixed(2)
		let bmiMetric = ( kilosToPounds / (centsToInches * centsToInches) )*703;
		let bmiMetricFormatted = bmiMetric.toFixed(2);

		//OUTPUT MESSAGES
		function checkValue(value) {
  			return document.querySelector(`[value="${value}"]`).checked;
  		}

  		function message(bmi) {
  			if (checkValue("imperial")) {
  				if (bmi < 18.5) {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiFormatted}</span>. Like grandma always says, "You're too skinny. You need to eat more!"</p>
	  				`
	  			}
	  			if (bmi > 25) {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiFormatted}</span>. Your asian mom says you look fat. Don't be ashamed.</p>
	  				`
	  			} else {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiFormatted}</span>. You're in the healthy range!</p>
	  				`
	  			}
  			} else {
  				if (bmi < 18.5) {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiMetricFormatted}</span>. Like grandma always says, "You're too skinny. You need to eat more!"</p>
	  				`
	  			}
	  			if (bmi > 25) {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiMetricFormatted}</span>. Your asian mom says you look fat. Don't be ashamed.</p>
	  				`
	  			} else {
	  				return `
	  					<p class="normal-voice">Your BMI is <span class="special">${bmiMetricFormatted}</span>. You're in the healthy range!</p>
	  				`
	  			}
  			}
  		}

		if ( checkValue("imperial") ) {
			if ($feet.value == "") {
				$output.hidden = true;
				$feetWarn.innerHTML = "No feet?"
			} else {
				$output.innerHTML = `${message(bmi)}`
				$feetWarn.innerHTML = "";
			}

			if ($inches.value == "") {
				$output.hidden = true;
				$inchesWarn.innerHTML = "You have to have a height."
			} else {
				$output.innerHTML = `${message(bmi)}`
				$inchesWarn.innerHTML = "";
			}

			if ($pounds.value == "") {
				$output.hidden = true;
				$poundsWarn.innerHTML = "Don't kid yourself."			
			} else {
				$output.innerHTML = `${message(bmi)}`
				$poundsWarn.innerHTML = "";
			}			
		}  

		if ( checkValue("metric") ) {
			if ($centimeters.value == "") {
				$output.hidden = true;
				$centimetersWarn.innerHTML = "You're not invisible."	
			} else {
				$output.innerHTML = `${message(bmiMetric)}`;
				$centimetersWarn.innerHTML = "";
			}

			if ($kilos.value == "") {
				$output.hidden = true;
				$kilosWarn.innerHTML = "You're water (mostly), not air my friend."	
			} else {
				$output.innerHTML = `${message(bmiMetric)}`;
				$kilosWarn.innerHTML = "";
			}
		}
		
	})

</script>


























