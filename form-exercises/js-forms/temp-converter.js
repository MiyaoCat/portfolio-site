<form id="temp-converter" method="POST">
	<div class="instructions">
		<p class="normal-voice">First select whether you want to convert to Fahrenheit or Celsius. Then enter the degrees you want to convert.</p>
	</div>	

	<div class="temp-type">
		<p class="normal-voice">Select the temperature conversion:</p>
		<div class="radio-buttons">
			<div class="fahrenheit">
				<label for="fahrenheit">&#8457; to &#8451;</label>
				<input 
					type="radio" 
					name="temp-type" 
					value="fahrenheit" 
					onclick="isChecked('fahrenheit')"  
				>
			</div>
			
			<div class="celsius">
				<label for="celsius">&#8451; to &#8457;</label>
				<input 
					type="radio" 
					name="temp-type" 
					value="celsius" 
					onclick="isChecked('celsius')"  
				>
			</div>
		</div>
		<p class="calm-voice warning"></p>
	</div>

	<div class="degrees">
		<label for="temp">Enter the number of degrees:</label>
		<input 
			type="number" 
			step="0.1" 
			name="temp" 
			placeholder=98
		>
	</div>
	<p class="calm-voice warning"></p>
	
	<button type="submit" name="submitted">Submit</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>

	let $form = document.querySelector('form');
	let $temp = document.querySelector("[name='temp']");
	let $tempWarn = document.querySelector(".temp-type .warning");
	let $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	function isChecked(temp) {
  		return temp;
	}

	$form.addEventListener('submit', function(event) {
		event.preventDefault();
		$output.hidden = false;

		let tempType = document.querySelector("[name='temp-type']:checked");
		let temp = $temp.value;

		console.log(tempType + " " + temp);

		function convertToCelsius(temp) {
			return (temp - 32) * 5 / 9;
		}

		function convertToFahrenheit(temp) {
			return (temp * 9 / 5) + 32;
		}

		if (tempType == null) {
			$output.hidden = true;
			$tempWarn.innerHTML = "What do you wanna convert?"
		} else {
			$tempWarn.innerHTML = "";

			if (tempType.value == 'celsius') {
			let celsius = convertToCelsius(temp).toFixed(2);

			$output.innerHTML = `<p class="normal-voice">That will be <span class="special">${celsius}</span> degrees Celsius.</p>`;
			} 
			if (tempType.value == 'fahrenheit') {
				let fahrenheit = convertToFahrenheit(temp).toFixed(2);

				$output.innerHTML = `<p class="normal-voice">That will be <span class="special">${fahrenheit}</span> degrees Fahrenheit.</p>`;
			};
		}
	})
</script>