<form id="rectangle" method="POST">
	<div class="instructions">
		<p class="normal-voice">First select if you want to measure the area in Feet or Meters. Then input the length wand width of the rectangle.</p>
	</div>

	<div class="type">
		<p class="normal-voice">Select your unit of measurement</p>
		<div class="radio-buttons">
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
	</div>

	<div class="length">
		<label for="length">What is the length of the rectangle?</label>
		<input 
			id="length" 
			type="number"
			min=1
			step=0.1 
			placeholder=1
			>
		<p class="calm-voice warning"></p>	
	</div>

	<div class="width">
		<label for="width">What is the width of the rectangle?</label>
		<input 
			id="width" 
			type="number"
			min=1
			step=0.1 
			placeholder=1
			>
		<p class="calm-voice warning"></p>	
	</div>

	<button type="submit">Calculate!</button>
</form>

<output></output>

<div class="return">
	<?php include("components/back-to-exercises.php"); ?>
</div>

<script>
	let $form = document.getElementById("rectangle");
	let $length = document.getElementById("length");
	let lengthWarn = document.querySelector(".length .warning");
	let $width = document.getElementById("width");
	let widthWarn = document.querySelector(".width .warning");
	let $output = document.querySelector("output");

	$output.hidden = true;

	function isChecked(value) {
  		return value;
	}

	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		
		let measureType = document.querySelector("[name='measure-type']:checked").value;
		width = parseFloat($width.value);
		length = parseFloat($length.value);
		
		area = (width * length).toFixed(3);
		areaFormatted = area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		if ($length.value === "") {
			lengthWarn.innerHTML = "Any number will do.";
			$output.hidden = true;
		} else {
			lengthWarn.innerHTML = "";
		}

		if ($width.value === "") {
			widthWarn.innerHTML = "Do you want to know the area or not?";
			$output.hidden = true;
		} else {
			widthWarn.innerHTML = "";
		}

		if ($length.value !== "" && $width.value !== "") {
			$output.hidden = false;
			if (measureType === "feet") {
				let convert = (area / 10.764).toFixed(3);
				let convertFormatted = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				$output.innerHTML = `
					<p class="normal-voice"> Area in feet: <span class="special">${areaFormatted}</span></p> 
					<p class="normal-voice"> Area in meters: <span class="special">${convertFormatted}</span></p> 
				`
			}

			if (measureType === "meters") {
				let convert = (area * 10.764).toFixed(3);
				let convertFormatted = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				$output.innerHTML = `
					<p class="normal-voice"> Area in feet: <span class="special">${convertFormatted}</span></p> 
					<p class="normal-voice"> Area in meters: <span class="special">${areaFormatted}</span></p> 
				`
			}
		}
	})
</script>























