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


function password($fruit, $number, $password) {

}
	if($submitted) {

		$successMessage = "";

		if ( isset($_POST["fruit"]) && isset($_POST["number"]) && isset($_POST["password"]) ) {
			if ( $_POST["number"] != null  && $_POST["number"] != null ) {
					if ($createdPassword == $_POST["password"]) {

						 $successMessage = "You're in!";
					}				
			}
		} 
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
					<div class="password-output">
						<p class="normal-voice">You entered:</p>
							<span class="alert-voice"><?php  $createdPassword = $fruit . $number; ?>		
						<?=$createdPassword?></span>
						
						<p class="normal-voice">This will be your password.</p>
					</div>

					<password-enter>
						<label for="password">Please enter your password:</label>
						
						<input type="text" name="password" value="">
					</password-enter>
			<?php } ?>
		<?php } ?>
	<?php } ?>


	<button type="submit" name="submitted">Submit</button>
</form>

<?php  
	if(isset($_POST["password"]) ) {
		if ($createdPassword == $_POST["password"]) {
?>
			<output>
				<p class="normal-voice"><?=$successMessage?></p>
			</output>

		<?php } ?>
<?php } ?>
