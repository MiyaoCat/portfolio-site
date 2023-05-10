<?php 
$age = 0;
$message = "";

$submittedPost = isset($_POST["submitted"]);
// prompt for the user's age (from input below)
	if ($submittedPost) {
		$age = $_POST["age"];

		if ($age < 0) {
			$message = "You're dead and decomposing so no, you can't drive.";
		}
		if ( empty($age) ) {
			$message = "YOU ARE UNBORN";
		} 
		
		// If their age is less than 16 return message they're too young
		// If their age is equal to or greater than 16, return message they can drive
		if ($age > 0) {
			$message = ($age >= 16 ? "You may drive" : "You're too young kiddo!");
		}	
	} 
 ?>



<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Are you old enough 	to drive? Let's find out!</p>
	</div>

	<p class="normal-voice">Enter your age:</p>
	
	<input 
		type="number"
		name="age"
		
		step="1"
		placeholder="age"

	>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php if ($submittedPost) { ?>
	<output>
		<p class="normal-voice"><?=$message?></p>
	</output>
<?php } ?>