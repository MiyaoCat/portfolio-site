<form id="numbers-to-name" method="POST">
	<div class="instructions">
		<p class="normal-voice">Select a number and we'll tell you what month that number corresponds to.</p>
	</div>
	
	<div class="number">
		<input 
			type="number"
			min=0
			step=1
			placeholder=1
		>
	</div>

	<button type="submit">Enter</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("numbers-to-name");

	const $output = document.querySelector("output");
	$form.addEventListener("submit", event => {
		event.preventDefault();
	})
</script>
