<?php  

$scarface = "./images/forms/scarface-puppy.jpg";
$lionel = "./images/forms/lionel-richie.jpg";
$adelle = "./images/forms/adelle.jpg";
$sAndG = "./images/forms/simon-garfunkel.jpg";
$jerryMaguire = "./images/forms/jerry-maguire.png";

$images =[$scarface, $lionel, $adelle, $sAndG, $jerryMaguire ];
$imagesRand = $images[rand(0,4)];

$message = "";

function randomMessage($imageData, $inputName) {
	if ( isset($_POST["submitted"]) && isset($inputName) ) { 
		
		//Return a message and include a random image from the array
		return "Hi, " . $inputName . "! It's nice to meet you. Here is your random quote." . "<picture><img src='" . $imageData . "'></picture>";	
	} 
}

//If the input is blank, send an error message
function blankMessage($inputName) {
	if( isset($_POST["name"]) && empty($inputName)) {
		return "You didn't enter anything, bruv.";
	}
}

//If the input has only spaces, send an error message
function emptyMessage($inputName) {
	if( ctype_space($inputName)) {
		return "Fine, you can use a nickname instead.";
	}
}
?>


<form id="hello" method="POST">
	<div class="instructions">
		<p class="normal-voice">Hey stranger, what's your name?</p>
	</div>
	
	<input type="text" 
		name="name" 
		value="" 
		placeholder="Enter your government name"
	>

	<p class="calm-voice warning">
		<?php 
			if ( isset($_POST["name"]) ) { 
				echo blankMessage($_POST["name"]); 
				echo emptyMessage($_POST["name"]);
			}
		?>				
	</p>

	<button type="submit" name="submitted">
		Submit
	</button>
</form>

<?php 
	if ( !empty($_POST["name"]) && !ctype_space($_POST["name"]) ) {
	?>
	<output>
		<p class="normal-voice">
			<?php echo randomMessage($imagesRand, $_POST["name"]); ?>
		</p>
	</output>
<?php } ?>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

