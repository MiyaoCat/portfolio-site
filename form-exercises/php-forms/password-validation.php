<?php  
	$fruit = "";
	$number = "";

	$submitted = isset($_POST["submitted"]);

	if ($submitted) {
		$fruit = $_POST["fruit"];
		$number = $_POST["number"];
		$createdPassword = $fruit . $number;
	}

if($submitted) {

	$successMessage = "";
	$passwordErrorMessage = "";

	if ( isset($_POST["fruit"]) && isset($_POST["number"]) && isset($_POST["password"]) ) {
		if ( $_POST["fruit"] != null  && $_POST["number"] != null ) {
				if ($createdPassword == $_POST["password"]) {
					 $successMessage = "You're in the matrix!";
				}else {
					$passwordErrorMessage = "ERRR. Wrong!";
				}			
		}
	} 

} 

function successMessage($fruit, $number, $password) {
	if($submitted) {

		$successMessage = "";

		if ( isset($fruit) && isset($number) && isset($password) ) {
			if ( $fruit != null  && $number != null ) {
					if ($fruit . $number == $password) {

						 $successMessage = "You're in!";
					}				
			}
		} 
	} 
}

function createdPassword($fruit, $number) {
	return $fruit . $number;
}

$createdPassword = createdPassword($fruit, $number);

function errorMessageFruit() {
	if ( isset($_POST["fruit"]) && ($_POST["fruit"] == null) ) {
		echo "Please enter a fruit";
	}
}

function errorMessageNumber() {
	if ( isset($_POST["number"]) && ($_POST["number"] == null) ) {
		echo "Please enter a number";
	}
}


?>

<form method="POST" class="password">
	<div class="instructions">First you're going to create a password by following the prompts.</div>
	<div class="password-create">
		<label for="fruit">What is your favorite fruit?</label>
		<input type="text" name="fruit" value="<?=$fruit?>">
		<p class="calm-voice warning"><?=errorMessageFruit()?></p>

		<label for="number">What is your favorite number?</label>
		<input type="number" name="number" value="<?=$number?>">
		<p class="calm-voice warning"><?=errorMessageNumber()?></p>
	</div>

	<?php  
		if ($submitted) {
			if ( isset($_POST["fruit"]) && isset($_POST["number"]) ) {
				if ( $_POST["fruit"] != null && $_POST["number"] != null ) {
	?>
			<div class="password-output">
				<p class="normal-voice">You entered:</p>
					
				<span class="alert-voice"><?=$createdPassword?></span>
				
				<p class="normal-voice">This will be your password.</p>
			</div>

			<password-enter>
				<label for="password">Please enter your password:</label>
				
				<input type="text" name="password" value="">

				<p class="calm-voice warning"><?=$passwordErrorMessage?></p>
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

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

