<?php  
	$fruit = "";
	$number = "";
	$createdPassword = $fruit . $number;
	$submitted = isset($_POST["submitted"]);

	if ($submitted) {
		$fruit = $_POST["fruit"];
		$number = $_POST["number"];
		$createdPassword = $fruit . $number;
		$passwordEnter = "";
	}
?>

<form method="POST" class="password">

	<div class="password-create">
		<label for="fruit">What is your favorite fruit?</label>
		<input type="text" name="fruit" value="<?=$fruit?>">
		
		<label for="number">What is your favorite number?</label>
		<input type="number" name="number" value="<?=$number?>">
	</div>

	<?php  
		if ($submitted) {
			if ( isset($_POST["fruit"]) && $_POST["fruit"] != null ) {
				if ( isset($_POST["number"]) && $_POST["number"] != null ) {
	?>
					<output>
						<p class="normal-voice">You entered:</p>
						<?php  $createdPassword = $fruit . $number; ?>		
						<?=$createdPassword?>	
						
						<p class="normal-voice">This will be your password</p>
					</output>

					<password-enter>
						<label for="password">Please enter your password</label>
						
						<input type="text" name="password" value="">
					</password-enter>
			<?php } ?>
		<?php } ?>
	<?php } ?>


	<button type="submit" name="submitted">Submit</button>
</form>

<?php  
	if($submitted) {
		if ( isset($_POST["fruit"]) && $_POST["fruit"] != null ) {
			if ( isset($_POST["number"]) && $_POST["number"] != null ) {
				if ( isset($_POST["password"]) ) {
					if ($createdPassword == $_POST["password"]) {
?>
						<output>
							<p class="normal-voice">You did it!</p>
						</output>
						
					<?php } ?>
				<?php } ?>
			<?php } ?>
		<?php } ?>
	<?php } ?>
