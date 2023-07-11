<form id="print-quotes" method="POST">	
	<div class="instructions">
		<p class="normal-voice">Enter the author and their quote and we'll construct the message.</p>
	</div>

	<div class="author">
		<label for="author">Enter Author:</label>
		<input name="author" value="">
		<p class="calm-voice warning"></p>
	</div>
	
	<div class="quote">
		<label for="quote">Enter Quote:</label>
		<textarea type="text" name="quote" value=""></textarea>
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit" name="enter">Submit</button>
</form>

<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $printQuotes = document.querySelector('form');
	
	const $author = document.querySelector("[name='author']");
	const $quote = document.querySelector("[name='quote']");

	let $authorDiv = document.querySelector('.author');
	let $authorWarn = $authorDiv.querySelector('p.calm-voice.warning');	

	let $quoteDiv = document.querySelector('.quote');
	let $quoteWarn = $quoteDiv.querySelector('p.calm-voice.warning');	

	const $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	$printQuotes.addEventListener('submit', function(event) {
		event.preventDefault();

		let authorInput = $author.value;
		let quoteInput = $quote.value;
		
		if (authorInput.trim() === "") {
			$authorWarn.innerHTML = "Please provide an author";

			$output.hidden == true;
		} else {
			$authorWarn.innerHTML = "";
		}

		if (quoteInput.trim() === "") {
			$quoteWarn.innerHTML = "Please provide a quote";

			$output.hidden == true;
		} else {
			$quoteWarn.innerHTML = "";
		}

		if (authorInput.trim() !== "" && quoteInput.trim() !== "") {

			$authorWarn.innerHTML = "";
			$quoteWarn.innerHTML = "";

			$output.hidden = false;
		
			$output.innerHTML = `<p class="normal-voice"> <span class="special">${authorInput}</span> once said, "<span class="special">${quoteInput}</span>". How profound.</p>`
		}
		if (authorInput.trim() !== "" && quoteInput.trim() === "") {
			$output.hidden == true;
		}
		if (authorInput.trim() === "" && quoteInput.trim() !== "") {
			$output.hidden == true;
		}
		
	});	
</script>