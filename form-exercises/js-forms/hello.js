<form id="hello" method="POST">
	<div class="instructions">
		<p class="normal-voice">Hey stranger, what's your name?</p>
	</div>
	
	<input type="text" 
		name="name" 
		value="" 
		placeholder="Enter your government name"
	>

	<p class="calm-voice warning">
		<?php 
			if ( isset($_POST["name"]) ) { 
				echo blankMessage($_POST["name"]); 
				echo emptyMessage($_POST["name"]);
			}
		?>				
	</p>

	<button type="submit" name="submitted">
		Submit
	</button>
</form>

<output></output>

<script>
	let $form = document.querySelector('#hello');
	let $nameInput = document.querySelector("[name='name']");
	let $output = document.querySelector("output");
	
	$output.hidden = true;

	$form.addEventListener('submit', function(myEvent) {
		myEvent.preventDefault();
	
		console.log("You clicked submit");
	
		let myText = $nameInput.value;
		console.log("The input says " + myText);
		
		$output.hidden = false;

		$output.innerHTML = `<p class="normal-voice"> Hello, ${myText}. Nice to meet ya. </p>`;
	});
</script>