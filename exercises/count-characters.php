<?php 
	$string = "";
	$length = 0;
	$lengthWithSpaces = 0;
	$word = 0;
	$message = 0;
	$errorMessage = "";
	$messageWithSpaces = "";
	$messageWords = "";


	if ( isset($_POST["string"]) ) {
		$string = $_POST["string"];

		if ($string == "") {
		 	$errorMessage = "Please type something in the text prompt. Otherwise, what's the point? You can't count to zero.";
		} 

		else {
			$length = strlen($string) - substr_count($string, ' ');
			$lengthWithSpaces = strlen($string);
			$word = str_word_count($string, 0);

			$message = "It is $length characters long without spaces.";
			$messageWithSpaces = "With spaces its $lengthWithSpaces characters.";
			$messageWords = "It has $word word(s).";
		}
	}

?>

<form id="count-char" method="POST">	
	<div class="instructions">
		<p class="regular-voice">Type in a string of text and I'll count how many characters you entered. </p>
	</div>

	<input 
		type="text" 
		name="string" 
		value="" 
		placeholder="Type whatever you want"
	>
	<p class="calm-voice warning"><?=$errorMessage?></p>

	<button type="submit" name="enter">Submit</button>
 </form>

<?php 
	if ( isset($_POST["string"]) && $string != "") { 
?>

	<output>
		<ul>
			<li>
				<p class="normal-voice">You entered "<?=$string?>".</p>
			</li>
			<li>
				<p class="normal-voice"><?=$message?></p>
			</li>
			<li>
				<p class="normal-voice"><?=$messageWithSpaces?></p>
			</li>
			<li>
				<p class="normal-voice"><?=$messageWords?></p>
			</li>
		</ul>
	</output>

<?php } ?>



