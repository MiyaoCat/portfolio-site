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
		// let month;

		// switch (number) {
		// 	case 1:
		// 		month = "January";
		// 		break;
		// 	case 2:
		// 		month = "February";
		// 		break;
		// 	case 3:
		// 		month = "March";
		// 		break;
		// 	case 4:
		// 		month = "April";
		// 		break;	
		// 	case 5:
		// 		month = "May";
		// 		break;
		// 	case 6:
		// 		month = "June";
		// 		break;
		// 	case 7:
		// 		month = "July";
		// 		break;
		// 	case 8:
		// 		month = "August";
		// 		break;
		// 	case 9:
		// 		month = "September";
		// 		break;
		// 	case 10:
		// 		month = "October";
		// 		break;
		// 	case 11:
		// 		month = "November";
		// 		break;
		// 	case 12:
		// 		month = "December";
		// 		break;
		// 	default:
		// 		month = "There's only 12 months."			
		// }

		const monthMap = new Map([
			[1, "January"],
			[2, "February"],
			[3, "March"],
			[4, "April"],
			[5, "May"],
			[6, "June"],
			[7, "July"],
			[8, "August"],
			[9, "September"],
			[10, "October"],
			[11, "November"],
			[12, "December"]
		]);

		let month = monthMap.get(number);

		if ($number.value > 12) {
			$output.hidden = true;
			$numberWarn.innerHTML = "There's only 12 months, buster!"
		}	
		else if ($number.value == "") {
			// $output.hidden = true;
			$numberWarn.innerHTML = "You had one job."
		} else {
			$numberWarn.innerHTML = "";
			$output.hidden = false;
			$output.innerHTML = month;
		}
		console.log($number.value)
	})
</script>
