<form method="POST">
	<h1 class='loud-voice'>Say Hello!</h1>
	
	<p class="normal-voice">Hey stranger, what's your name?</p>

	<?php  

		$scarface = "./images/forms/scarface-puppy.jpg";
		$lionel = "./images/forms/lionel-richie.jpg";
		$adelle = "./images/forms/adelle.jpg";
		$sAndG = "./images/forms/simon-garfunkel.jpg";
		$jerryMaguire = "./images/forms/jerry-maguire.png";

		$images =[$scarface, $lionel, $adelle, $sAndG, $jerryMaguire ];
		$imagesRand = $images[rand(0,4)];

		$name = "";

		
	?>

	<input type="text" 
		name="name" 
		value="<?=$name?>" 
		placeholder="Enter your government name"
	>
	
	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<?php 
	if ( isset($_POST["name"]) ) {
		$name = $_POST["name"]; 
		$images = $images[rand(0,4)];

		if ($name == "") {
			echo "<output>Fine, enter your nickname then. </output>";
		} 

		elseif ($name == " " OR $name == "  ") {
			echo "<output>Sorry, a blank space isn't going to do it. </output>";
		}
		else {

?>
<output>
	<p class='normal-voice'>Hi, <span><?=$name?></span>. Here's your random quote. </p>
	
	<picture><img src='<?=$imagesRand?>'></picture>
</output>
	<?php } ?>
<?php } ?>