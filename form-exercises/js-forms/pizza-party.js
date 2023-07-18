<form id="pizza" method="POST">
	<div class="instructions">
		<p class="normal-voice">Enter the number of people and pizzas at the party and we'll tell you how many slices each person gets assuming each pie has 8 slices.</p>
	</div>
	
	<div class="entry people">
	 	<p class="normal-voice">How many people will be attending?</p>

		<input 
			type="number" 
			name="people" 
			value=""
			step=1
			min=1
			placeholder=1
			label=""
		>
		<p class="calm-voice warning"></p>	
	</div>	

	<div class="entry pizza">
	 	<p class="normal-voice">How many pizzas do you think you'll purchase?</p>

		<input 
			type="number" 
			name="pizza" 
			value=""
			step=1
			min=1
			placeholder=1
		>
		<p class="calm-voice warning"></p>	
	</div>	

	<button type="submit" name="submitted">Submit</button>
</form>	
	
<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.querySelector("#pizza");

	const $people = document.querySelector("[name='people']");
	const $peopleWarn = document.querySelector(".people .warning");
	const $pizza = document.querySelector("[name='pizza']");
	const $pizzaWarn = document.querySelector(".pizza .warning");
	const $output = document.querySelector('output');
	$output.hidden = true;

	$form.addEventListener('submit', function(event) {
		event.preventDefault() 

		let people = $people.value;
		let peopleFormatted = people.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let pizza = $pizza.value;
		let pizzaFormatted = pizza.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let slices = parseFloat(pizza * 8);
		let slicesFormatted = slices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		let slicesPerPerson = Math.floor(slices / people);
		let slicesPPFormated = slicesPerPerson.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let remainder = (slices % people).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$output.hidden = false;

		if ($people.value == "" || $people.value == 0) {
			$output.hidden = true;
			$peopleWarn.innerHTML = "No one's attending? I'm sorry.";
		} else {
			$peopleWarn.innerHTML = "";
		}

		if ($pizza.value == "") {
			$output.hidden = true;
			$pizzaWarn.innerHTML = "The kids need to eat!";
		} else {
			$pizzaWarn.innerHTML = "";
		}

		if ($people.value !== "" && $pizza.value !== "") {
			$output.hidden = false;

			$output.innerHTML = `
				<p class="normal-voice">Slices per person: <span class="special">${slicesPPFormated}</span></p>
				<p class="normal-voice">Slices leftover: <span class="special">${remainder}</span></p>
			`
		}	
	});
</script>



















