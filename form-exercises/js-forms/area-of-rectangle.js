<form id="rectangle" method="POST">
	<div class="instructions">
		<p class="normal-voice">Enter the length and width of the room in feet and we'll calculate the area of the room.</p>
	</div>

	<div class="type">
		<label for="feet">Feet</label>
		<input 
			id="feet"
			type="radio"
			name="measure-type"
			value="feet"
			checked
			onclick="isChecked('feet')"
		>
		<label for="meters">Meters</label>
		<input 
			id="meters"
			type="radio"
			name="measure-type"
			value="meters"
			onclick="isChecked('meters')"
		>
	</div>

	<div class="length">
		<label for="length">What is the length of the room?</label>
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
		<label for="width">What is the width of the room?</label>
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
	$form = document.getElementById("rectangle");
	$length = document.getElementById("length");
	$width = document.getElementById("width");
	
	$output = document.querySelector("output");

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

		if (measureType === "feet") {
			$output.hidden = false;

			let convert = (area / 10.764).toFixed(3);
			let convertFormatted = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$output.innerHTML = `
				<p class="normal-voice"> Area in feet: <span class="special">${areaFormatted}</span></p> 
				<p class="normal-voice"> Area in meters: <span class="special">${convertFormatted}</span></p> 
			`
		}

		if (measureType === "meters") {
			$output.hidden = false;

			let convert = (area * 10.764).toFixed(3);
			let convertFormatted = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$output.innerHTML = `
				<p class="normal-voice"> Area in feet: <span class="special">${convertFormatted}</span></p> 
				<p class="normal-voice"> Area in meters: <span class="special">${areaFormatted}</span></p> 
			`
		}

	})
</script>























