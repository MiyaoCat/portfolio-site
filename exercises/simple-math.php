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
		if ( ($number1 !== "" && $number2 !== "") ) {
			if ( $number2 != 0) {
			   $add = floatval( number_format($number1 + $number2, 2, '.', ',') );
			  	$subtract = floatval( number_format($number1 - $number2, 2, '.', ',') );
			   $multiply = floatval( number_format($number1 * $number2, 2, '.', ',') );
			   $divide = floatval( number_format($number1 / $number2, 2, '.', ',') );	 

			   return [$add, $subtract, $multiply, $divide];  	
		   }		   

		   if ($number2 == 0) {
			   $add = floatval( number_format($number1 + $number2, 2, '.', ',') );
			  	$subtract = floatval( number_format($number1 - $number2, 2, '.', ',') );
			   $multiply = floatval( number_format($number1 * $number2, 2, '.', ',') );
		 		$divide = "Undefined. 0 has no multiplicative inverse.";

		 		return [$add, $subtract, $multiply, $divide]; 
		 	}	  
	 	}
   };
   
   if ( isset($_POST["number1"]) && isset($_POST["number2"]) ) {
   	$result = calculate($_POST["number1"], $_POST["number2"]); 
   }

   function errorMessage1() {
   	if ( isset($_POST["number1"]) && ($_POST["number1"] == null) ) {
   		return $message = "Please enter a number";
   	}
   }

   function errorMessage2() {
   	if ( isset($_POST["number2"]) && ($_POST["number2"] == null) ) {
   		return $message = "Please enter a number";
   	}
   }
?>
		
<form method="POST">
	<div class="instructions">
		<p class="regular-voice">Just type in your numbers and watch the magic happen!</p>
	</div>
	
	<input 
		type="number" 
		name="number1" 
		step="any"
		placeholder="First Number"
	>
	
	<p class="calm-voice warning"><?php echo errorMessage1(); ?></p>
	
	<input 
		type="number" 
		name="number2" 
		step="any"
		placeholder="Second Number"
	>
	<p class="calm-voice warning"><?php echo errorMessage2(); ?></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php 
	if ( isset($_POST["submitted"]) ) { 
		if ($_POST["number1"] != null and $_POST["number2"] != null) {
?>	
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
<?php  } ?>	