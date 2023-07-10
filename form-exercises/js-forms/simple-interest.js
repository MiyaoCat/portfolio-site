<form id="simple-interest" method="POST">

	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow over time. Follow the instructions below. Note, this is not calculating compound growth. Only *simple* growth.</p>
	</div>

	<div class="entry principal">
		<p class="normal-voice">Enter the principal amount you'll invest.</p>
		<input 
			type="number" 
			name='principal' 
			value="" 
			placeholder ="1000" 
			min = "1"
		>
	</div>
		

	<div class="entry interest">
		<p class="normal-voice">Now enter the interest rate. Standard interest is 7% APY.</p>
		
		<input 
			type="number" 
			name='interest' 
			value="" 
			placeholder ="7%" 
			min = "1"
			step = "0.01"
		>	

	</div>

	<div class="entry years">
		<p class="normal-voice">Enter the number of years you wish to invest.</p>
		
		<input 
			type="number" 
			name='years' 
			value="" 
			placeholder ="10" 
			min = "1"
		>	
	</div>
	
	<button type="submit" name="submitted">Submit</button>

</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	var $form = document.querySelector("#simple-interest");

	var $principalInput = document.querySelector("[name='principal']");
	var $interestInput = document.querySelector("[name='interest']");
	var $yearsInput = document.querySelector("[name='years']");

	let $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	$form.addEventListener('submit', function(event) {
		event.preventDefault();

		$output.hidden = false;

		let principal = $principalInput.value;
		let interest = $interestInput.value;
		let years = $yearsInput.value;

		let totalEarned = parseFloat( (principal * (1 + (interest * .01 * years))).toFixed(2) );
		var totalEarnedFormatted = totalEarned.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

		$output.innerHTML = `<p class="normal-voice">You'll earn <span class="special">${totalEarnedFormatted}</span> after <span class="special">${years}</span> years at a <span class="special">${interest}%</span> interest rate.</p>`;

		console.log(totalEarnedFormatted);
	});
</script>













