<form id="currency" type="submit">
	<div class="instructions">
		<p class="normal-voice"><a href="https://www.youtube.com/watch?v=DmWWqogr_r8" target="_new">How much money you got (a lot)</a>? We'll be converting your Euros to US dollars.</p>
		<ol>
			<li normal-voice>Enter the number of Euro's you're converting</li>
			<li normal-voice>Enter the current exchange rate</li>
		</ol>
	</div>

	<div class="eurosDiv">
		<label for="euros">How many Euro's you got?</label>
		<input 
			type="number"
			id="euros"
			min=0
			step=.01
			placeholder=100
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="exchangeRate">
		<label for="exchangeRate">What's the current exchange rate?</label>
		<input 
			type="number"
			id="exchangeRate"
			min=0
			step=.01
			placeholder=1.12
		>
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Cha Ching!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("currency");

	const $euros = document.getElementById("euros");
	const $eurosWarn = document.querySelector(".eurosDiv .warning");

	const $exchangeRate = document.getElementById("exchangeRate");
	const $exchangeRateWarn = document.querySelector(".exchangeRate .warning");
 
	const $output = document.querySelector("output");
	$output.hidden = true;

	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		let euros = parseFloat($euros.value);
		let eurosFormatted = euros.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let exchangeRate = parseFloat($exchangeRate.value);
		let exchangeRateFormatted = exchangeRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		usd = (euros * exchangeRate).toFixed(2);
		usdFormatted = usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$output.hidden = false;

		if ($euros.value === "" || $euros.value == 0) {
			$output.hidden = true;
			$eurosWarn.innerHTML = "None? Get outtahyeeuhh!"
		} else {
			$eurosWarn.innerHTML = "";
		}

		if ($exchangeRate.value === "" || $exchangeRate.value == 0) {
			$output.hidden = true;
			$exchangeRateWarn.innerHTML = "I suggest you keep your Euros then."
		} else {
			$exchangeRateWarn.innerHTML = "";
		}

		$output.innerHTML = `
			<p className="normal-voice">Your <span class="special">${eurosFormatted}</span> Euros will get you <span class="special">$${usdFormatted}</span> at an exchange rate of <span class="special">${exchangeRateFormatted}</span>.</p>
			`
		
		console.log(usdFormatted)
	})
</script>


























