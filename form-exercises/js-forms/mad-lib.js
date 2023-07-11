<form id="mad-lib" method="POST">
	<div class="instructions">
		<p class="normal-voice">Provide the requested types of words and we'll create a story using the words you entered.</p>
	</div>

	<div class="noun">
		<label for="noun">Enter a Noun:</label>
		<input type="text" id="noun">
		<p class="calm-voice warning"></p>
	</div>

	<div class="verb">
		<label for="verb">Enter a Verb:</label>
		<input id="verb" >
		<p class="calm-voice warning"></p>
	</div>

	<div class="adjective">
		<label for="adjective">Enter an Adjective:</label>
		<input id="adjective">
		<p class="calm-voice warning"></p>
	</div>

	<div class="adverb">
		<label for="adverb">Enter an Adverb:</label>
		<input id="adverb">
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Create</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $form = document.getElementById("mad-lib");

	let $nounInput = document.getElementById("noun");
	let nounWarn = document.querySelector(".noun p.warning");

	let $verbInput = document.getElementById("verb");
	let verbWarn = document.querySelector(".verb .warning");

	let $adjectiveInput = document.getElementById("adjective");
	let adjectiveWarn = document.querySelector(".adjective p.warning");

	let $adverbInput = document.getElementById("adverb");
	let adverbWarn = document.querySelector(".adverb p.warning");

	let $output = document.querySelector(".js-exercise output");
	$output.hidden = true;

	$form.addEventListener("submit", function(event) {
		event.preventDefault();

		$output.hidden = false;

		let noun = $nounInput.value;
		let verb = $verbInput.value;
		let adjective = $adjectiveInput.value;
		let adverb = $adverbInput.value;

		const fields = [
			{ 
		  		input: noun, 
		  		warning: nounWarn, 
		  		message: "Please enter a noun" 
			},
		 	{ 
		 		input: verb, 
		 		warning: verbWarn, 
		 		message: "Please enter a verb" 
		 	},
		 	{ 
		 		input: adjective, 
		 		warning: adjectiveWarn, 
		 		message: "Please enter an adjective" 
		 	},
		 	{ 
		 		input: adverb, 
		 		warning: adverbWarn, 
		 		message: "Please enter an adverb" 
		 	}
		];

		// let isValid = true;

		fields.forEach(function(field) {
			// This is object destructuring. Instead of writing, field.input etc, we can access the property directly. 
			const { input, warning, message } = field;

			if (input.trim() === "") {
		   	warning.innerHTML = message;
		   	$output.hidden = true;
		   	// isValid = false;
		  	} else {
		   	warning.innerHTML = "";
		  	}
		});

		// if (!isValid) {
		//   return;
		// }

		// if (noun.trim() === "") {
		// 	nounWarn.innerHTML = 'Please enter a noun';
		// 	$output.hidden = true;
		// } else {
		// 	nounWarn.innerHTML = '';
		// }

		// if (verb.trim() === "") {
		// 	verbWarn.innerHTML = 'Please enter a verb';
		// 	$output.hidden = true;
		// } else {
		// 	verbWarn.innerHTML = '';
		// }

		// if (adjective.trim() === "") {
		// 	adjectiveWarn.innerHTML = 'Please enter an adjective';
		// 	$output.hidden = true;
		// } else {
		// 	adjectiveWarn.innerHTML = '';
		// }

		// if (adverb.trim() === "") {
		// 	adverbWarn.innerHTML = 'Please enter an adverb';
		// 	$output.hidden = true;
		// } else {
		// 	adverbWarn.innerHTML = '';
		// }
		$output.innerHTML = `<p class="normal-voice">Do you  <span class="special">${verb}</span> your <span class="special">${adjective} ${noun} ${adverb}</span>? That's silly.</p>`;

		console.log(noun)
	})
</script>























