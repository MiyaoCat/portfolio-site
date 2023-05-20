<?php  

// The formulas are
// C = (F − 32) × 5 / 9
function convertToCelsius($f) {
	return ($f - 32) * 5 / 9;
}

// F = (C × 9 / 5) + 32
function convertToFahrenheit($c) {
	return ($c * 9 / 5) + 32;
}

function isChecked($type, $name) {
	if ($type == $name) {
		return "checked";
	} 
}
//Default setup
$temp = 0;
$tempType = "celsius";
$converted = null;

//If there's any user input
if ( isset($_POST["submitted"]) ) {

	//Check if user selected a temp type. If so, use that temp type
	if ( isset($_POST["temp-type"]) ) {
		$tempType = $_POST["temp-type"];
	}	

	//Check if user has input a temp number. If so, use that number
	if ( isset($_POST["temp"]) ) {
		$temp = $_POST["temp"];
	}
}

//Calculate temperature conversion
if ($tempType == "fahrenheit") {
	$converted = convertToCelsius($temp);
} elseif ($tempType == "celsius") {
	$converted = convertToFahrenheit($temp);
} 

//PHP function to round number to nearest whole number
$rounded = round($converted);

?>


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

<?php if ( isset($_POST["submitted"]) ) { ?>
	<output>
		<p class="normal-voice">That converts to <?=$rounded?> degrees <?=$tempType?></p>
	</output>
<?php } ?>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>













