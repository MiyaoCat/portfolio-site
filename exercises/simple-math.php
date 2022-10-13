
	<h1 class="loud-voice">Let's do Math!</h1>
	<p class="regular-voice">Just type in your numbers and watch the magic happen!</p>
	<?php 
			$number1 = "";
			$number2 = "";

			if ( isset ($_POST["number1"]) ) {
				$number1 = $_POST["number1"];
			}

			if ( isset ($_POST["number2"]) ) {
				$number2 = $_POST["number2"];
			}

			// $multiply = ($number1) * ($number2);
			// $divide = ($number1) / ($number2);
			// $add = ($number1) + ($number2);

		?>
		
	<form method="POST">

		<input 
			type="number" 
			name="number1" 
			value="<?=$number1?>"
			min="0"
			placeholder="Enter your first number"
			label="write your number">

		<input 
			type="number" 
			name="number2" 
			value="<?=$number2?>"
			placeholder="Enter your second number">

		<div class="instructions">
			<button type="submit" name="submitted">Submit</button>
			
			<p>Your total is: <span class="special"><?=$multiply?></span></p>
			<p>Your total is: <span class="special"><?=$divide?></span></p>
			<p>Your total is: <span class="special"><?=$add?></span></p>
		</div>

	</form>

