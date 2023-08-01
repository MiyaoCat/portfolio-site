<form id="numbers-to-name" method="POST">
	<div class="instructions">
		<p class="normal-voice">Select a number and we'll tell you what month that number corresponds to.</p>
	</div>
	
	<div class="number">
		<input 
			type="number"
			id="number"
			min=0
			step=1
			placeholder=1
		>

		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Enter</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("numbers-to-name");

	const $number = document.getElementById("number");
	const $numberWarn = document.querySelector(".number .warning");

	const $output = document.querySelector("output");
	$output.hidden = true;

	$form.addEventListener("submit", event => {
		event.preventDefault();

		let number = parseFloat($number.value);
		console.log(number);
		let month;

		switch (number) {
			case 1:
				month = "1 = January";
				break;
			case 2:
				month = "February";
				break;
			case 3:
				month = "March";
				break;
			case 4:
				month = "April";
				break;	
			case 5:
				month = "May";
				break;
			case 6:
				month = "June";
				break;
			case 7:
				month = "July";
				break;
			case 8:
				month = "August";
				break;
			case 9:
				month = "September";
				break;
			case 10:
				month = "October";
				break;
			case 11:
				month = "November";
				break;
			case 12:
				month = "December";
				break;
			default:
				month = "There's only 12 months."			
		}

		$output.innerHTML = month;

		if ($number.value !== "") {
			$output.hidden = false;
			$numberWarn.innerHTML = "";
			$output.innerHTML = month;
		} else {
			$numberWarn.innerHTML = "Enter a number"
		}
	})
</script>
