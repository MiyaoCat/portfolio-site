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
	<p class="calm-voice warning"></p>

	<button type="submit" name="enter">Submit</button>
</form>

<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
var $countChar = document.querySelector('form');

var $string = document.querySelector("[name='string']");
let $output = document.querySelector('.js-exercise output');
$output.hidden = true;


$countChar.addEventListener('submit', function(event) {
	event.preventDefault();

	let stringInput = $string.value;
	let stringLength = stringInput.length;
	let stringNoSpace = stringInput.replace(/ /g, "");
	let stringNoSpaceLength = stringNoSpace.length;
	$output.hidden = false;
	function wordCount(string){
		return string.trim().split(/\s+/).length;
	}

	let words = wordCount(stringInput);

	$output.innerHTML = `<p class="normal-voice">You entered: "<span id="words">${stringInput}</span>".</p> 

		<p class="normal-voice">Total characters: ${stringLength}</p>

		<p class="normal-voice">Total characters without spaces: ${stringNoSpaceLength}</p>

		<p class="normal-voice">Total words: ${words}</p>`

});	
</script>