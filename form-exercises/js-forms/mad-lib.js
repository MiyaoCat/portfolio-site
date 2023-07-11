<form id="mad-lib" method="POST">
	<div class="instructions">
		<p class="normal-voice">Provide the requested types of words and we'll create a story using the words you entered.</p>
	</div>

	<div class="noun">
		<label for="noun">Enter a Noun:</label>
		<input type="text" name="noun" value="">
		<p class="calm-voice warning"></p>
	</div>

	<div class="verb">
		<label for="verb">Enter a Verb:</label>
		<input name="verb" >
		<p class="calm-voice warning"></p>
	</div>

	<div class="adjective">
		<label for="adjective">Enter an Adjective:</label>
		<input name="adjective">
		<p class="calm-voice warning"></p>
	</div>

	<div class="adverb">
		<label for="adverb">Enter an Adverb:</label>
		<input name="adverb">
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Create</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $form = document.querySelector("#mad-lib");

	let $nounInput = document.querySelector('[name="noun"]');
	let $verbInput = document.querySelector('[name="verb"]');
	let $adjectiveInput = document.querySelector('[name="adjective"]');
	let $adverbInput = document.querySelector('[name="adverb"]');

	let $nounDiv = document.querySelector(".noun");
	let nounWarn = $nounDiv.querySelector("p.warning");

	let $verbDiv = document.querySelector(".verb");
	let verbWarn = $verbDiv.querySelector("p.warning");

	let $adjectiveDiv = document.querySelector(".adjective");
	let adjectiveWarn = $adjectiveDiv.querySelector("p.warning");

	let $adverbDiv = document.querySelector(".adverb");
	let adverbWarn = $adverbDiv.querySelector("p.warning");

	let $output = document.querySelector(".js-exercise output");
	$output.hidden = true;

	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		$output.hidden = false;

		let noun = $nounInput.value;
		let verb = $verbInput.value;
		let adjective = $adjectiveInput.value;
		let adverb = $adverbInput.value;

		if (noun.trim() === "") {
			nounWarn.innerHTML = 'Please enter a noun';
			$output.hidden = true;
		} else {
			nounWarn.innerHTML = '';
		}

		if (verb.trim() === "") {
			verbWarn.innerHTML = 'Please enter a verb';
			$output.hidden = true;
		} else {
			verbWarn.innerHTML = '';
		}

		if (adjective.trim() === "") {
			adjectiveWarn.innerHTML = 'Please enter an adjective';
			$output.hidden = true;
		} else {
			adjectiveWarn.innerHTML = '';
		}

		if (adverb.trim() === "") {
			adverbWarn.innerHTML = 'Please enter an adverb';
			$output.hidden = true;
		} else {
			adverbWarn.innerHTML = '';
		}
		$output.innerHTML = `<p class="normal-voice">Do you  <span class="special">${verb}</span> your <span class="special">${adjective} ${noun} ${adverb}</span>? That's silly.</p>`;

		console.log(noun)
	})
</script>























