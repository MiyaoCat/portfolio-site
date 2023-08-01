<form id="tip-calc" method="POST">
	<div class="instructions">
		<p class="normal-voice">Let us know the amount of your order and the tip percentage you'd like to leave. We'll provide the grand total.</p>
	</div>

	<div class="input-one">
		<label for="subtotal">What is the order amount?</label>
		<input type="number" id="subtotal" value="" step="0.01" min=0>
		<p class="calm-voice warning"></p>
	</div>
	
	<div class="tip-select">
		<p class="normal-voice">How much would you like to tip?</p>

		<div class="tip-options">
			<div class="ten">
				<label for="ten-percent">10 Percent</label>
				<input 
					type="radio" 
					id="ten-percent"
					name="tip" 
					class="percent" 
					value=0.10
				>
			</div>
			
			<div class="fifteen">
				<label for="fifteen-percent">15 Percent</label>
				<input 
					type="radio" 
					id="fifteen-percent"
					name="tip" 
					class="percent" 
					value=0.15
				>
			</div>
			
			<div class="twenty">
				<label for="twenty-percent">20 Percent</label>
				<input 
					type="radio" 
					id="twenty-percent"
					name="tip" 
					class="percent" 
					value=.20
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>
	
	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<output>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
let $form = document.getElementById("tip-calc");
let $subTotal = document.querySelector("[id='subtotal']");
let $tip = document.querySelector("input[name='tip']");
let $tipWarn = document.querySelector(".tip-select .warning");
let $orderWarn = document.querySelector(".input-one .warning");

let $output = document.querySelector(".js-exercise output");
$output.hidden = true;

$form.addEventListener('submit', function(event) {
	event.preventDefault();
	$output.hidden = false;

	if ($subTotal.value === "") {
		$orderWarn.innerHTML = "Did you order anything?";

		$output.hidden = true;
	} else {
		$orderWarn.innerHTML = "";
	}

	let tipOptions = document.querySelector("input[name='tip']:checked");
	var tip;

	if (tipOptions !== null ) {
		tip = tipOptions.value;
		$tipWarn.innerHTML = "";
	} else {
		$tipWarn.innerHTML = "You're not gonna tip?";
		$output.hidden = true;
		tip = ""
	}

	// console.log("tip ", tip);
	
	let subTotal = parseInt($subTotal.value);
	let subTotalFormatted = subTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	let tipTotal = (subTotal * tip);
	let tipTotalFormatted = tipTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	let grandTotal = parseFloat(subTotal) + parseFloat(tipTotal);
	let grandTotalFormatted = grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	// console.log(tipTotalFormatted + " " + subTotal);

	$output.innerHTML = `
		<p class="normal-voice">Sub-total: ${subTotalFormatted}</p> 
		 <p class="normal-voice">Tip total: ${tipTotalFormatted}</p> 
		 <p class="normal-voice">Grand total: ${grandTotalFormatted}</p> `;
});

</script>