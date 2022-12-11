<?php 
	//*********CODE PRIOR TO USING FUNCTIONS*********
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

	//*********FIRST ITERATION OF FUNCTIONS*********
	// function add($inputNumber1, $inputNumber2) {
	// 	if ( isset($inputNumber1) && isset($inputNumber2) ) {
	// 		return number_format($inputNumber1 + $inputNumber2, 2, '.', ',');
	// 	}
	// };

	// function subtract($inputNumber1, $inputNumber2) {
	// 	if ( isset($inputNumber1) && isset($inputNumber2) ) {
	// 		return number_format($inputNumber1 - $inputNumber2, 2, '.', ',');
	// 	}		
	// };

	// function multiply($inputNumber1, $inputNumber2) {
	// 	if ( isset($inputNumber1) && isset($inputNumber2) ) {
	// 		return number_format($inputNumber1 * $inputNumber2, 2, '.', ',');
	// 	}		
	// };

	// function divide($inputNumber1, $inputNumber2) {
	// 	if ($inputNumber2 == 0) {
	// 		return $message = "Undefined. 0 has no multiplicative inverse."; 
	// 	}

	// 	if ( isset($inputNumber1) && isset($inputNumber2) ) {
	// 		if ($inputNumber2 != 0) {
	// 			return number_format($inputNumber1 / $inputNumber2, 2, '.', ',');	
	// 		}
	// 	}
	// };

	//*********CONDENSED FUNCTION LEARNED FROM CHATGPT*********
	function calculate($number1, $number2) {
		if ( isset($number1) && isset($number2) ) {
			if ( $number2 != 0) {
			   $add = number_format($number1 + $number2, 2, '.', ',');
			  	$subtract = number_format($number1 - $number2, 2, '.', ',');
			   $multiply = number_format($number1 * $number2, 2, '.', ',');
			   $divide = number_format($number1 / $number2, 2, '.', ',');	 

			   return array($add, $subtract, $multiply, $divide);  	
		   }		   
	 	}

	 	if ($number2 == 0) {
	 		$add = number_format($number1 + $number2, 2, '.', ',');
			$subtract = number_format($number1 - $number2, 2, '.', ',');
			$multiply = number_format($number1 * $number2, 2, '.', ',');
	 		$divide = "Undefined. 0 has no multiplicative inverse.";

	 		return array($add, $subtract, $multiply, $divide);
	 	}
   };
   
   if ( isset($_POST["number1"]) && isset($_POST["number2"]) ) {
   	$result = calculate($_POST["number1"], $_POST["number2"]); 
   }
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
	
		<p class="calm-voice warning"><?=$message?></p>
	
	<input 
		type="number" 
		name="number2" 
		step="any"
		placeholder="Enter your second number"
	>
	<p class="calm-voice warning"><?=$message?></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php if ( isset($_POST["submitted"]) ) { ?>	

	<output>
		<p class="normal-voice">You entered <?=$_POST["number1"]?> & <?=$_POST["number2"]?>.</p>

		<p class="normal-voice">Add:  
			<?php echo $result[0]; ?>
		</p>

		<p class="normal-voice">Subtract:  
			<?php echo $result[1]; ?>
		</p>

		<p class="normal-voice">Multiply:  
			<?php echo $result[2]; ?>
		</p>

		<p class="normal-voice">Divide:  
			<?php echo $result[3]; ?>
		</p>	
	</output>

<?php  } ?>	