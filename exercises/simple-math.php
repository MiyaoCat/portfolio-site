
	<h1 class="loud-voice">Let's do Math!</h1>
	<div class="instructions">
		<p class="regular-voice">Just type in your numbers and watch the magic happen!</p>
	</div>

	<?php 
			$number1 = "";
			$number2 = "";

			if ( isset ($_POST["number1"]) ) {
				$number1 = $_POST["number1"];
			}

			if ( isset ($_POST["number2"]) ) {
				$number2 = $_POST["number2"];

				$add = number_format($number1 + $number2, 4, '.', ',');
				$subtract = number_format($number1 - $number2, 4, '.', ',');
				$multiply = number_format($number1 * $number2, 4, '.', ',');
				$divide = number_format($number1 / $number2, 4, '.', ',');
			}			
	?>
		
	<form method="POST">

		<input 
			type="number" 
			name="number1" 
			value="<?=$number1?>"
			step="any"
			placeholder="Enter your first number"
			required>

		<input 
			type="number" 
			name="number2" 
			value="<?=$number2?>"
			step="any"
			placeholder="Enter your second number"
			required>

			<button type="submit" name="submitted">Submit</button>
			
			


	</form>

<output>
	<?php if ( isset($_POST["submitted"]) ) { ?>	
		<p>Your total is: <span class="special"><?=$add?></span></p>
		<p>Your total is: <span class="special"><?=$subtract?></span></p>
		<p>Your total is: <span class="special"><?=$multiply?></span></p>
		<p>Your total is: <span class="special"><?=$divide?></span></p>
	<?php } ?>	
</output>
