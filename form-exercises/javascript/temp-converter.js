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