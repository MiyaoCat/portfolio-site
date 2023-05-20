<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Enter the number of people and pizzas at the party and we'll tell you how many slices each person gets assuming each pie has 8 slices.</p>
	</div>
	
	<div class="entry people">
	 	<p class="normal-voice">How many people will be attending?</p>

		<input 
			type="number" 
			name="people" 
			value=""
			min=1
			placeholder="0"
			label=""
			required>

		<error>
			<p class="error normal-voice"></p>
		</error>

	</div>	

	<div class="entry pizza">
	 	<p class="normal-voice">How many pizzas do you think you'll purchase?</p>

		<input 
			type="number" 
			name="pizza" 
			value=""
			min=1
			placeholder="0"
			required>

		<error>
			<p class="error normal-voice"></p>
		</error>	
	</div>	

	<button type="submit" name="submitted">Submit</button>
</form>	
	
<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
var $form = document.querySelector('form');

var $people = document.querySelector("[name='people']");
var $pizza = document.querySelector("[name='pizza']");
let $output = document.querySelector('.js-exercise output');
$output.hidden = true;

$form.addEventListener('submit', function(event) {
	event.preventDefault() 

	let people = $people.value;
	let pizza = $pizza.value;
	let slices = pizza * 8;

	let slicesPerPerson = Math.floor(slices / people);
	let remainder = (slices % people);
	$output.hidden = false;
	console.log("people: " + people + " pizzas: " + pizza + " slices: " + slices + " slicesPP: " + slicesPerPerson + " remainder: " + remainder);

	document.body.appendChild($output);
	$output.innerHTML = `
		<p class="normal-voice">With ${people} people attending, there will be ${slicesPerPerson} slices per person with ${remainder} slices left over.</p>`

});
</script>