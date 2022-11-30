<?php  
	$fruit = "";
	$number = "";
	$password = $fruit . $number;
	$submitted = isset($_POST["submitted"]);

?>

<form method="POST">
	<label for="fruit">What is your favorite fruit?</label>
	<input type="text" name="fruit" value="<?=$fruit?>">
	
	<label for="number">What is your favorite number?</label>
	<input type="number" name="number" value="<?=$number?>">

	<?php  
	if ($submitted) {
		$fruit = $_POST["fruit"];
		$number = $_POST["number"];
		$passwordEnter = "";
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
		</form-wrap>

		<?php  
			$passwordEnter = "";
			if ($submitted) {
				if ($passwordEnter == $password) {
		?>
			<output>
				Correct!
			</output>
				<?php } ?>
			<?php } 
				else { ?>

			<output>
				wrong!
			</output>
					
			<?php } ?>		
	<?php } ?>
	<button type="submit" name="submitted">Submit</button>

</form>

