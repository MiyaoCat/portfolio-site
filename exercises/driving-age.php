<?php 
$age = 0;
$message = "";

$submittedPOST = isset($_POST["submitted"]);
// prompt for the user's age (from input below)
	if ($submittedPOST) {
		$age = $_POST["age"];

		if ( empty($age) ) {

			$message = "<output>YOU ARE UNBORN</output>";
		} 
		// If their age is less than 16 return message they're too young
		// If their age is equal to or greater than 16, return message they can drive

		if ($age > 0) {
			$message = ($age >= 16 ? "<output>You may drive</output>" : "<output>You're too young kiddo!</output>");
		}
		
	} 




 ?>

<div class="instructions">
	<p class="normal-voice">Are you old enough to drive? Let's find out!</p>
</div>

<form method="POST">
	<p class="normal-voice">Enter your age:</p>
	<input 
		type="number"
		name="age"
		
		step="1"
		placeholder="age"

	>

	<button type="submit" name="submitted">Submit</button>
</form>


<?=$message?>
