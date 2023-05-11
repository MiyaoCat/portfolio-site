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

<script>
var $countChar = document.querySelector('form');

var $string = document.querySelector("[name='string']");

$countChar.addEventListener('submit', function(event) {
	event.preventDefault();

	let stringInput = $string.value;
	let stringLength = stringInput.length;
	let stringNoSpace = stringInput.replace(/ /g, "");
	let stringNoSpaceLength = stringNoSpace.length;

	function wordCount(string){
		return string.trim().split(/\s+/).length;
	}

	let words = wordCount(stringInput);

	let $output = document.createElement("output");
	document.body.appendChild($output);

	$output.innerHTML = `<p class="normal-voice">You entered: "<span id="words">${stringInput}</span>".</p> 

		<p class="normal-voice">Total characters: ${stringLength}</p>

		<p class="normal-voice">Total characters without spaces: ${stringNoSpaceLength}</p>

		<p class="normal-voice">Total words: ${words}</p>`

});	
</script>