<form id="simple-math" method="POST">
	<div class="instructions">
		<p class="normal-voice">Just type in your numbers and watch the magic happen!</p>
	</div>
	
	<input 
		type="number" 
		name="number1" 
		step="any"
		placeholder="First Number"
	>
	
	<p class="calm-voice warning"></p>
	
	<input 
		type="number" 
		name="number2" 
		step="any"
		placeholder="Second Number"
	>
	<p class="calm-voice warning"></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $simpleMath = document.querySelector('#simple-math');

	//Query the first input
	let $number1 = document.querySelector("[name='number1']");

	//Query the second input
	let $number2 = document.querySelector("[name='number2']");

	//hide output
	let $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	//Listen for the submit button to click
	$simpleMath.addEventListener('submit', function(myEvent) {
		myEvent.preventDefault();

		// console.log("You clicked submit");

		let numberOne = Number($number1.value);
		let numberTwo = Number($number2.value);

		

		let add = parseInt(numberOne) + parseInt(numberTwo);
		let subtract = numberOne - numberTwo;
		let multiply = numberOne * numberTwo;
		let divide = (numberOne / numberTwo).toFixed(2);

		//Create the output element
		let $output = document.querySelector("output");
		$output.hidden = false;
		console.log(add);
		//Output message
		$output.innerHTML = `
			<p class="normal-voice"> Add: ${add}</p> 
			<p class="normal-voice"> Subtract: ${subtract}</p>
			<p class="normal-voice"> Multiplied: ${multiply}</p>
			<p class="normal-voice"> Divide: ${divide}</p>`;
	});
</script>