<?php 
	// $number1 = "";
	// $number2 = "";
	$message = "";

	// if ( isset ($_POST["number1"]) ) {
	// 	$number1 = floatval($_POST["number1"]);
	// }

	// if ( isset ($_POST["number2"]) ) {
	// 	$number2 = floatval($_POST["number2"]);
	// } 

	// if ( isset($_POST["submitted"]) ) {
	// 	if ( empty($_POST["number1"]) or empty($_POST["number2"]) ) {

	// 		$message = "Please enter a number";

	// 	}
	// }

	// $add = number_format($number1 + $number2, 2, '.', ',');
	// $subtract = number_format($number1 - $number2, 2, '.', ',');
	// $multiply = number_format($number1 * $number2, 2, '.', ',');
	// $divide = number_format($number1 / $number2, 2, '.', ',');			

	function add($inputNumber1, $inputNumber2) {
		if ( isset($inputNumber1) && isset($inputNumber2) ) {
			return number_format($inputNumber1 + $inputNumber2, 2, '.', ',');
		}
	};

	function subtract($inputNumber1, $inputNumber2) {
		if ( isset($inputNumber1) && isset($inputNumber2) ) {
			return number_format($inputNumber1 - $inputNumber2, 2, '.', ',');
		}		
	};

	function multiply($inputNumber1, $inputNumber2) {
		if ( isset($inputNumber1) && isset($inputNumber2) ) {
			return number_format($inputNumber1 * $inputNumber2, 2, '.', ',');
		}		
	};

	function divide($inputNumber1, $inputNumber2) {
		if ( isset($inputNumber1) && isset($inputNumber2) ) {
			if ($inputNumber2 !== 0) {
				return number_format($inputNumber1 / $inputNumber2, 2, '.', ',');	
			}
		}	
	};

	function errorMessage1() {
		if ( isset($_POST["submitted"]) ) {
			if ($_POST["number1"] == "") {
				return $message = "Please enter a number!";
			}
		}
	};

	function errorMessage2() {
		if ( isset($_POST["submitted"]) ) {
			if ($_POST["number2"] == "") {
				return $message = "Please enter a number!";
			}
		}
	};
?>
		
<form method="POST">
	<h1 class="loud-voice">Let's do Math!</h1>

	<div class="instructions">
		<p class="regular-voice">Just type in your numbers and watch the magic happen!</p>
	</div>
	
	<input 
		type="number" 
		name="number1" 
		step="any"
		placeholder="Enter your first number"
	>
	
		<p class="calm-voice warning"><?=errorMessage1();?></p>
	
	<input 
		type="number" 
		name="number2" 
		step="any"
		placeholder="Enter your second number"
	>
	<p class="calm-voice warning"><?=errorMessage2();?></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php if ( isset($_POST["submitted"]) && ($_POST["number1"] != "") && ($_POST["number2"] != "") ) { ?>	

	<output>
		<p class="normal-voice">You entered <?=$_POST["number1"]?> & <?=$_POST["number2"]?>.</p>
		
		<p>Addition: <?= add($_POST["number1"], $_POST["number2"]);?></p>
		
		<p>Subtraction: <?= subtract($_POST["number1"], $_POST["number2"]);?></p>
		
		<p>Multiplication: <?= multiply($_POST["number1"], $_POST["number2"]);?></p>
		
		<?php if ($_POST["number2"] != 0) { ?>
			
			<p>Division: <?= divide($_POST["number1"], $_POST["number2"]);?></p>

		<?php  } 
			else {
				echo "Division: Undefined. 0 has no multiplicative inverse.";
			}
		?>	
	</output>

<?php  } ?>	