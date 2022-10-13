<?php 
$age = 0;
$message = "";
// prompt for the user's age (from input below)
	if ( isset($_POST["submitted"]) ) {


		// If their age is less than 16 return message they're too young
		// If their age is equal to or greater than 16, return message they can drive

		$message = ( $_POST["age"] >= 16 ? "You may drive" : "You're too young son!");
		
	}




 ?>

<div class="instructions">
	<p class="normal-voice">Are you old enough to drive? Let's find out!</p>
</div>

<form method="POST">
	<input 
		type="number"
		name="age"
		
		step="1"
		placeholder="Enter your age"

	>

	<button type="submit" name="submitted">Submit</button>
</form>

<output>
	<?=$message?>
</output>