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

<script>
// 	console.clear();

// 	function noParameters() {
// 		console.log(10 + 10);
// 	}
// 	console.log( "noParameters" );
	
// 	noParameters();

// // --- //

// 	function oneParameter(age) {
// 		console.log(age + 10);
// 	}

// 	oneParameter(30);

// // --- //
// 	function twoParameters(age, yearsPassed) {
// 		console.log(age + yearsPassed);
// 	}

// 	twoParameters(30, 5);

// // --- //
// 	function defaultParameter(age, yearsPassed = 10) {
// 		console.log(age + yearsPassed);
// 	}

// 	defaultParameter(30);

// // --- //

// 	function withReturn() {
// 		return "This is a function with a return";
// 	}

// 	console.log( withReturn() );

// // --- //
// 	function doubleNumber(num1) {
// 		return num1 * 2;
// 	}

// 	console.log( doubleNumber(50) );

// // --- //
// 	var basketball = {
// 		name : "Basketball",
// 		season: "winter",
// 		invented: 1981
// 	}

// 	function getName(object) {
// 		return object.name;
// 	}

// 	console.log(`${getName(basketball)} is a sport invented in ${basketball.invented}`);

// // object[key] This gets the value based on the key

// 	function listKeys(object) {
// 		for(key in object ) {
// 			console.log(key, object[key]);
// 		}
// 	}

// 	listKeys(basketball);


// // --- //




// 	var form = document.querySelector("form");
// 	var output = document.querySelector("output");

// 	form.querySelector("button").style.display = "none";

// 	function convertToCelsius(f) {
// 		return (f - 32) * 5 / 9;
// 	}

// 	// F = (C × 9 / 5) + 32
// 	function convertToFahrenheit(c) {
// 		return (c * 9 / 5) + 32;
// 	}

// 	function updateInterface() {
// 		var tempType = document.querySelector(":checked").value;

// 		console.log("tempType", tempType);

// 		var temp = document.querySelector("[name='temp']").value;

// 		console.log("temp", temp);

// 		if (tempType == "fahrenheit") {
// 			var converted = convertToCelsius(temp);
// 		} 

// 		if (tempType == "celsius") {
// 			var converted = convertToFahrenheit(temp);
// 		}

// 		var rounded = converted.toFixed(2);

// 		//document.querySelector("output") = `This converts to ${rounded} degrees ${tempType}`;	
// 		output.textContent = `This converts to ${rounded} degrees ${tempType}`;		
// 	}
	
// 	updateInterface();

// 	form.addEventListener("input", function(event){
// 		event.preventDefault();

// 		updateInterface();
// 	})

</script>













