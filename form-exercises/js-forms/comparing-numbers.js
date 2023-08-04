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
	$output.hidden = true;

	$form.addEventListener("submit", event => {
		event.preventDefault();
		// let number1 = $number1.value;
		// let number2 = $number2.value;
		// let number3 = $number3.value;

		// let numbers = [number1, number2, number3];

		// let count = 0;

		// if (number1 !== "") count++;
		// if (number2 !== "") count++;
		// if (number3 !== "") count++;

		// if (count >= 2) {
		// 	$output.hidden = false;
		// 	$output.innerHTML = `<p class="normal-voice">The greatest number is: <span class="special">${Math.max(...numbers)}</span></p>`;
		// } else {
		// 	$output.hidden = false;
		// 	$output.innerHTML = `<p class="normal-voice">Please enter at least <span class="special">2 numbers.</span> That's the only way to compare, duh.</p>`;
		// }
		
		// if (number1 !== "" || number2 !== "" ||number3 !== "") {
		// 	if (number1 === number2 || number1 == number3 || number2 == number3) {
		// 		$output.hidden = false;
		// 		$output.innerHTML = `<p class="normal-voice">Instructions said to enter <span class="special">3 UNIQUE</span> numbers.</p>`;
		// 	}
		// }

		//map method converts array into numbers;
		const numbers = [$number1.value, $number2.value, $number3.value].map(Number);
		//Set method keeps only unique values
		const uniqueNumbers = new Set(numbers);
		//Since we have only unique values, we can get the size of the array
		const count = uniqueNumbers.size;

		if (count < 2) {
			$output.innerHTML = `<p class="normal-voice">Please enter at least <span class="special">2 numbers.</span> That's the only way to compare, duh.</p>`;
		} else if (count < 3) {
			$output.innerHTML = `<p class="normal-voice">Instructions said to enter <span class="special">3 UNIQUE</span> numbers.</p>`;
		} else {
			const greatestNumber = Math.max(...numbers);
			$output.innerHTML = `<p class="normal-voice">The greatest number is: <span class="special">${greatestNumber}</span></p>`;
		}

		$output.hidden = false;
	})

	let $input = document.querySelectorAll("input");

	$input.forEach(inputElement => {
	inputElement.addEventListener("change", function(event) {

    // Compare the numbers to find the largest
		// if (number1 > number2 && number1 > number3) {
      // 	$output.innerHTML = `First number of ${number1} is greatest`;
		// } else if (number2 > number1 && number2 > number3) {
      // 	$output.innerHTML = `Second number of ${number2} is greatest`;
		// } else {
      // 	$output.innerHTML = `Third number of ${number3} is greatest`;
		// }

  });
});
</script>




































