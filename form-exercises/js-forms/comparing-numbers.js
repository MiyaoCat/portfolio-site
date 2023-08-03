<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Enter three unique numbers and we'll tell you which number is the largest. Easy for a human. Harder to teach a computer.</p>
	</div>

	<div class="number1">
		<label for="number1">Enter first number:</label>
		<input type="number" id="number1" step=1>
		<p class="calm-voice warning"></p>
	</div>

	<div class="number2">
		<label for="number2">Enter second number:</label>
		<input type="number" id="number2" step=1>
		<p class="calm-voice warning"></p>
	</div>

	<div class="number3">
		<label for="number3">Enter third number:</label>
		<input type="number" id="number3" step=1>
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Compare!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.querySelector("form");

	const $number1 = document.getElementById("number1");
	const $number1Warn = document.querySelector(".number1 .warning");

	const $number2 = document.getElementById("number2");
	const $number2Warn = document.querySelector(".number2 .warning");
	
	const $number3 = document.getElementById("number3");
	const $number3Warn = document.querySelector(".number3 .warning");

	const $output = document.querySelector("output");
	// $output.hidden = true;

	$form.addEventListener("submit", event => {
		event.preventDefault();
		let number1 = $number1.value;
		let number2 = $number2.value;
		let number3 = $number3.value;

		//get number1 value
		//compare number 1 to number 2
		//if number1 is equal to number2 then ask for a different number2
		// if (number1 === number2 || number1 === number3 || number2 === number3) {
		// 	$number1Warn.innerHTML = "Not unique";
		// 	$number2Warn.innerHTML = "Not unique";
		// 	$number3Warn.innerHTML = "Not unique";
		// } 

		
	})

	let $input = document.querySelectorAll("input");

	$input.forEach(inputElement => {
  inputElement.addEventListener("change", function(event) {
    // Get the updated values from the input elements
    let number1 = parseFloat($number1.value);
    let number2 = parseFloat($number2.value);
    let number3 = parseFloat($number3.value);

    // Compare the numbers to find the largest
    if (number1 > number2 && number1 > number3) {
      $output.innerHTML = `First number of ${number1} is greatest`;
    } else if (number2 > number1 && number2 > number3) {
      $output.innerHTML = `Second number of ${number2} is greatest`;
    } else {
      $output.innerHTML = `Third number of ${number3} is greatest`;
    }
  });
});
</script>




































