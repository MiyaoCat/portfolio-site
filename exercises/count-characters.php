<?php 
	$string = "";
	$length = 0;
	$lengthWithSpaces = 0;
	$word = 0;
	$message = 0;
	$errorMessage = "";

	if ( isset($_POST["string"]) ) {
		$string = $_POST["string"];

		if ($string == "") {
		 	$errorMessage = "Please type something in the text prompt. Otherwise, what's the point? You can't count to zero.";
		} 

		else {
			$length = strlen($string) - substr_count($string, ' ');
			$lengthWithSpaces = strlen($string);
			$word = str_word_count($string, 0);

			$message = "<output>You entered \"<span>$string</span>\". It is <span class='length'>$length</span> characters long without spaces</output>";
		}
	}

?>

<form method="POST">
<h1 class="loud-voice">Character Count</h1>
 	
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


<?=$message?>


	






<div class="test" style="grid-row: 8; grid-column: 4 / 10;">
	<?php
$a = 10;
echo 'Value of $a is :'.$a;
echo '<br />After Pre-increment value of $a ( i.e. ++$a ) is: '.++$a;
$a = 20;
echo '<br />Value of $a is :'.$a;
echo '<br />After Post-increment value of $a ( i.e. $a++ ) is: '.$a++;
$a = 30;
echo '<br />Value of $a is :'.$a;
echo '<br />After Pre-decrement value of $a ( i.e. --$a ) is: '.--$a;
$a = 40;
echo '<br />Value of $a is :'.$a;
echo '<br />After Post-decrement value of $a ( i.e. $a-- ) is: '.$a--;
	?>
</div>



