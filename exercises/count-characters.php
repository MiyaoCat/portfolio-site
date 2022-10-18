
<form method="POST">
<h1 class="loud-voice">Character Count</h1>

 	
	<div class="instructions">
		<p class="regular-voice">Type in a string of text and I'll count how many characters you entered. </p>
	</div>

	<input 
		type="text" 
		name="string" 
		value="" 
		placeholder="Type whatever you want">

	<button type="submit" name="enter">Submit</button>
 </form>


 	
<output>
<?php 
	//setup. Establish variables
	$string = "";
	$length = "";
	$lengthWithSpaces = "";

	//If there's a form submission. Reassign values
	if ( isset($_POST["string"]) ) {
		 $string = $_POST["string"];
	//calculations
	$length = strlen($string) - substr_count($string, ' ');
	$lengthWithSpaces = strlen($string);
	$word = str_word_count($string, 0);

	//Return message
	$message = "You entered <span>$string</span>. It is <span class='length'>$length</span> characters long without spaces";

 ?>
	<p class="regular-voice"><?=$message?></p><br>
	<p class="regular-voice">Or it's <?=$lengthWithSpaces?> characters WITH spaces.</p>
	<br>
	<p class="regular-voice">Or it's <?=$word?> word(s).</p>
<?php } ?>
</output>