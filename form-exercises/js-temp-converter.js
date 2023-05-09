<form method ="POST">
	<div class="instructions">
		<p class="normal-voice">First select whether you want to convert to Fahrenheit or Celsius. Then enter the degrees you want to convert. For example, if you want to know what 100 degrees Fahrenheit is in Celsius, select Celsius and enter 100.</p>
	</div>

	<label for="fahrenheit">Fahrenheit</label>
	<input type="radio" name="temp-type" value="fahrenheit" <?=isChecked($tempType, "fahrenheit")?> >
	
	<label for="celsius">Celsius</label>
	<input type="radio" name="temp-type" value="celsius" <?=isChecked($tempType, "celsius")?> >

	<input type="number" step="0.1" name="temp" value="<?=$temp?>" placeholder="Enter the temperature">

	<button type="submit" name="submitted">Submit</button>
</form>

<script>
	var form = document.querySelector("form");
	var output = document.querySelector("output");

	form.querySelector("button").style.display = "none";

	function convertToCelsius(f) {
		return (f - 32) * 5 / 9;
	}

	// F = (C × 9 / 5) + 32
	function convertToFahrenheit(c) {
		return (c * 9 / 5) + 32;
	}

	function updateInterface() {
		var tempType = document.querySelector(":checked").value;

		console.log("tempType", tempType);

		var temp = document.querySelector("[name='temp']").value;

		console.log("temp", temp);

		if (tempType == "fahrenheit") {
			var converted = convertToCelsius(temp);
		} 

		if (tempType == "celsius") {
			var converted = convertToFahrenheit(temp);
		}

		var rounded = converted.toFixed(2);

		//document.querySelector("output") = `This converts to ${rounded} degrees ${tempType}`;	
		output.textContent = `This converts to ${rounded} degrees ${tempType}`;		
	}
	
	updateInterface();

	form.addEventListener("input", function(event){
		event.preventDefault();

		updateInterface();
	})
</script>