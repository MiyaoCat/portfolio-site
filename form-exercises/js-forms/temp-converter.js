<form id="temp-converter" method ="POST">
	<div class="instructions">
		<p class="normal-voice">First select whether you want to convert to Fahrenheit or Celsius. Then enter the degrees you want to convert. For example, if you want to know what 100 degrees Fahrenheit is in Celsius, select Celsius and enter 100.</p>
	</div>	

	<label for="fahrenheit">Fahrenheit</label>
	<input type="radio" name="temp-type" value="fahrenheit" onclick="isChecked('fahrenheit')"  >
	
	<label for="celsius">Celsius</label>
	<input type="radio" name="temp-type" value="celsius" onclick="isChecked('celsius')"  >

	<input type="number" step="0.1" name="temp" value="<?=$temp?>" placeholder="Enter the temperature">

	<button type="submit" name="submitted">Submit</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>

let $form = document.querySelector('form');
let $temp = document.querySelector("[name='temp']");
let $output = document.querySelector('.js-exercise output');
$output.hidden = true;

$form.addEventListener('submit', function(event) {
	event.preventDefault();

	let tempType = document.querySelector("[name='temp-type']:checked").value;
	let temp = $temp.value;

	console.log(tempType + " " + temp);

	function convertToCelsius(temp) {
		return (temp - 32) * 5 / 9;
	}

	function convertToFahrenheit(temp) {
		return (temp * 9 / 5) + 32;
	}

	let $output = document.querySelector('output');
	$output.hidden = false;


	if (tempType == 'celsius') {
		let celsius = convertToCelsius(temp).toFixed(2);

		$output.innerHTML = `<p class="normal-voice">That will be ${celsius} degrees Celsius.</p>`;
	} else {
		let fahrenheit = convertToFahrenheit(temp).toFixed(2);

		$output.innerHTML = `<p class="normal-voice">That will be ${fahrenheit} degrees Fahrenheit.</p>`;
	};

})


</script>