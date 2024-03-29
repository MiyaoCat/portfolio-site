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
		}
	}

?>

<form id="count-char" method="POST">	
	<div class="instructions">
		<p class="normal-voice">Type in a string of text and I'll count how many characters you entered. </p>
	</div>

	<textarea 
		type="text" 
		name="string" 
		rows="2";
		value="" 
		placeholder="Type whatever you want"
	></textarea>
	<p class="calm-voice warning"><?=$errorMessage?></p>

	<button type="submit" name="enter">Submit</button>
 </form>

<?php 
	if ( isset($_POST["string"]) && $string != "") { 
?>
	<output>
		<ul>
			<li>
				<p class="normal-voice">You entered:<br>"<?= $string ?>"</p>
			</li>
			<li>
				<p class="normal-voice">Characters without spaces: <?=$length?></p>
			</li>
			<li>
				<p class="normal-voice">Characters with spaces: <?= $lengthWithSpaces ?></p>
			</li>
			<li>
				<p class="normal-voice">Word count: <?= $word ?></p>
			</li>
		</ul>
	</output>

<?php } ?>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

