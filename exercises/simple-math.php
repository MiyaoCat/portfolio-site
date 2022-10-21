<?php 
	$number1 = "";
	$number2 = "";

	if ( isset ($_POST["number1"]) ) {
		$number1 = $_POST["number1"];
	}

	if ( isset ($_POST["number2"]) ) {
		$number2 = $_POST["number2"];

		$add = number_format($number1 + $number2, 2, '.', ',');
		$subtract = number_format($number1 - $number2, 2, '.', ',');
		$multiply = number_format($number1 * $number2, 2, '.', ',');
		$divide = number_format($number1 / $number2, 2, '.', ',');
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

<?php if ( isset($_POST["submitted"]) ) { ?>	
	<output>
		<p class="normal-voice">You entered <?=$number1?> & <?=$number2?>.</p>
		<p>Addition: <span class="special"><?=$add?></span></p>
		<p>Subtraction: <span class="special"><?=$subtract?></span></p>
		<p>Multiplication: <span class="special"><?=$multiply?></span></p>
		<p>Division: <span class="special"><?=$divide?></span></p>
<?php } ?>	
	</output>
