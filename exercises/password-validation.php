<?php  
	$fruit = "";
	$number = "";
	$password = $fruit . $number;
	$submitted = isset($_POST["submitted"]);

?>

<form method="POST">

	<?php  
		// $hide = "";
		// $unHide = "";

		// if ( isset($_POST["fruit"]) AND isset($_POST["number"]) ) {
		// 	$hide = "style='display:none;'"; 
		// }

		// elseif ( isset($_POST["password"]) ) {
		// 	if ($_POST["password"] !== $_POST["createdPassword"]) {
		// 		$unHide = "style='display:flex'";
		// 	}
		// }	

	?>
		<div class="password-create">
			<label for="fruit">What is your favorite fruit?</label>
			<input type="text" name="fruit" value="<?=$fruit?>">
			
			<label for="number">What is your favorite number?</label>
			<input type="number" name="number" value="<?=$number?>">
		</div>


	<?php  
	if ($submitted) {
		$fruit = $_POST["fruit"];
		$number = $_POST["number"];
		$password = $fruit . $number;
		$passwordEnter = "";

		if ( isset($_POST["password"]) ) {
			if ($_POST["password"] == $password) {
				echo "correct";
			}
		};

	?>
		<output>
			<p class="normal-voice">You entered:</p>
			<?php  $password = $fruit . $number; ?>		
			<?=$password?>	
			
			<p class="normal-voice">This will be your password</p>
		</output>

		<form-wrap>
			<label for="password">Please enter your password</label>
			<input type="text" name="password" value="<?=$passwordEnter?>">
			<input class="hidden" type="text" name="createdPassword" value="<?=$password?>">
		</form-wrap>


	<?php } ?>
	<button type="submit" name="submitted">Submit</button>

</form>

