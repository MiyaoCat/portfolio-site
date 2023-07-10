<form id="mad-lib" method="POST">
	<div class="instructions">
		<p class="normal-voice">Provide the requested types of words and we'll create a story using the words you entered.</p>
	</div>

	<div class="noun">
		<label for="noun">Enter a Noun:</label>
		<input type="text" name="noun" value="">
	</div>

	<div class="verb">
		<label for="verb">Enter a Verb:</label>
		<input name="verb" >
	</div>

	<div class="adjective">
		<label for="adjective">Enter an Adjective:</label>
		<input name="adjective">
	</div>

	<div class="adverb">
		<label for="adverb">Enter an Adverb:</label>
		<input name="adverb">
	</div>

	<button type="submit">Create</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	var $form = document.querySelector("#mad-lib");

	var $nounInput = document.querySelector('[name="noun"]');
	var $verbInput = document.querySelector('[name="verb"]');
	var $adjectiveInput = document.querySelector('[name="adjective"]');
	var $adverbInput = document.querySelector('[name="adverb"]');

	let $output = document.querySelector(".js-exercise output");
	$output.hidden = true;

	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		$output.hidden = false;

		let noun = $nounInput.value;
		let verb = $verbInput.value;
		let adjective = $adjectiveInput.value;
		let adverb = $adverbInput.value;

		$output.innerHTML = `<p class="normal-voice">Do you  <span class="special">${verb}</span> your <span class="special">${adjective} ${noun} ${adverb}</span>? That's silly.</p>`;

		console.log(noun)
	})
</script>























