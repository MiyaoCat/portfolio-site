<?php  

// The formulas are
// C = (F − 32) × 5 / 9
// and
// F = (C × 9 / 5) + 32

// Example Output
// Press C to convert from Fahrenheit to Celsius.
// Press F to convert from Celsius to Fahrenheit.
// Your choice: C
// Please enter the temperature in Fahrenheit: 32
// The temperature in Celsius is 0.

// Ask for a temperature number
// Get the temperature number from user
// Ask if they want to convert the number to Farenheit or Celsius by having them select from radio button

// If they select fahrenheit. Run the formula to convert the temperature number to celsius
$temp = 0;
$tempType = "";

if ( isset($_POST["submitted"]) ) {
	if ( isset($_POST["temp-type"])  && isset($_POST["temp"]) ) {
		$tempType = $_POST["temp-type"];
		$temp = $_POST["temp"];
	} if ($tempType == "") {
		echo "<output>Select what you want the temp to convert to</output>";
	} else {
				echo "<output>". $temp . " " . $tempType . "</output>";
			}
}	
	

	







?>


<form method ="POST">
	<input type="number" step="0.1" name="temp" value="temp" placeholder="Enter the temperature">
	<label for="fahrenheit">Convert to Fahrenheit</label>
	<input type="radio" name="temp-type" value="fahrenheit">
	
	<label for="celsius">Convert to Celsius</label>
	<input type="radio" name="temp-type" value="celsius">

	<button type="submit" name="submitted">Submit</button>
</form>

<output>
	
</output>