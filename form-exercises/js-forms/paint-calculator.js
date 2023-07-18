<form id="paint" method="POST">
	<div class="instructions">
		<p class="normal-voice">Let us know the length and width of the wall in feet. We'll calculate the number of gallons of paint needed to cover the wall.</p>
		<p class="normal-voice">Assumption: 1 gallon of paint covers 360ft<sup>2</sup> or 33.45m<sup>2</sup></p>
	</div>

	<div class="type">
		<label for="feet">Feet
			<input 
				id="feet"
				type="radio"
				name="measure-type"
				value="feet"
				checked
				onclick="isChecked('feet')"
			>
		</label>

		<label for="meters">Meters
			<input 
				id="meters"
				type="radio"
				name="measure-type"
				value="meters"
				onclick="isChecked('meters')"
			>
		</label>
	</div>

	<div class="length">
		<label for="length">
			<p class="normal-voice">Enter the length</p>
			<input 
				type="number"
				id="length"
				min=.1
				step=.01
				placeholder=1
			>
		</label>
		<p class="calm-voice warning"></p>
	</div>	

	<div class="width">
		<label for="width">
			<p class="normal-voice">Enter the width</p>
			<input 
				type="number"
				id="width"
				min=.1
				step=.01
				placeholder=1
			>
		</label>
		<p class="calm-voice warning"></p>

		<button type="submit">Let's Paint!</button>
	</div>

</form>

<output></output>

<div class="return">
	<?php include("components/back-to-exercises.php"); ?>
</div>

<script>
	const $form = document.getElementById("paint");
	const $length = document.getElementById("length");
	const $lengthWarn = document.querySelector(".length .warning");
	const $width = document.getElementById("width");
	const $widthWarn = document.querySelector(".width .warning");
	const $output = document.querySelector("output");

	$output.hidden = true;

	function isChecked(value) {
  		return value;
	}

 	$form.addEventListener("submit", function(event) {
 		event.preventDefault();
 		$output.hidden = false;

 		let measureType = document.querySelector("[name='measure-type']:checked").value;
 		let length = parseFloat($length.value);
 		let width = parseFloat($width.value);

 		let area = (length * width).toFixed(2);
 		let areaFormatted = area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 		let gallon = 360;
 		let gallonsNeeded = Math.ceil(area/gallon);
 		let gallonsFormatted = gallonsNeeded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

 		let areaMeters = (area * 0.09290304).toFixed(2);
 		let areaMetersFormatted = areaMeters.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 		let gallonMeters = 33.4451;
 		let gallonsNeededMeters = Math.ceil(area/gallonMeters);
 		let gallonsMetersFormatted = gallonsNeededMeters.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

 		if ($length.value == "") {
 			$lengthWarn.innerHTML = "How long?"
 			$output.hidden = true;
 		} else {
			$lengthWarn.innerHTML = "";
		}
 		if ($width.value == "") {
 			$widthWarn.innerHTML = "You do know, anything multiplied by zero is zero, right?"
 			$output.hidden = true;
 		} else {
			$widthWarn.innerHTML = "";
		}

		if ($length.value !== "" && $width.value !== "") {
			$output.hidden = false;

			if (measureType === "feet") {
				$output.innerHTML = `
				<p class="normal-voice">Total ft<sup>2</sup>: <span class="special"> ${areaFormatted}</span></p>
				<p class="normal-voice">Total m<sup>2</sup>: <span class="special"> ${areaMetersFormatted}</span></p>
				<p class="normal-voice">Total gallons needed:<span class="special"> ${gallonsFormatted}</span></p>
				`
			}

			if (measureType === "meters") {
				let convert = (area * 10.764).toFixed(2);
				let convertFormatted = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				$output.innerHTML = `
				<p class="normal-voice">Total ft<sup>2</sup>: <span class="special"> ${convertFormatted}</span></p>
				<p class="normal-voice">Total m<sup>2</sup>: <span class="special"> ${areaFormatted}</span></p>
				<p class="normal-voice">Total gallons needed:<span class="special"> ${gallonsMetersFormatted}</span></p>
				`
			}

		}
 		console.log($widthWarn)
 	})
</script>





















































