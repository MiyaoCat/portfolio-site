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
	//Get the input name

	//Return a message and include a random image from the array
	return "Hi, " . $inputName . "! It's nice to meet you. Here is your random quote." . "<picture><img src='" . $imageData . "'></picture>";	
}

//If the input is blank, send an error message
function blankMessage($inputName) {
	if( empty($inputName)) {
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

<form method="POST">
	<h1 class='loud-voice'>Say Hello!</h1>

	<p class="normal-voice">Hey stranger, what's your name?</p>

	<input type="text" 
		name="name" 
		value="" 
		placeholder="Enter your government name"
	>

	<warning-message>
		<?php 
			if ( isset($_POST["name"]) ) { 
				echo blankMessage($_POST["name"]); 
				echo emptyMessage($_POST["name"]);
			}
		?>				
	</warning-message>

	<button type="submit" name="submitted">
		Submit
	</button>
</form>

<?php 
	if ( isset( $_POST["name"]) && !empty($_POST["name"]) && !ctype_space($_POST["name"]) ) { 
?>
	<output>
		<?php echo randomMessage($imagesRand, $_POST["name"]); ?>
	</output>
<?php } ?>