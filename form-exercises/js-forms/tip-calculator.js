<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Let us know the amount of your order and the tip percentage you'd like to leave. We'll provide the grand total.</p>
	</div>

	<div class="input-one">
		<label for="subtotal">What is the order amount?</label>
		<input type="number" name="subtotal" value="" step="0.01" min=0 required>
	</div>
	
	<div class="tip-select">
		<p class="normal-voice">How much would you like to tip?</p>
		<div class="ten">
			<label for="ten-percent">10 Percent</label>
			<input type="radio" name="tip" class="percent" value=0.10>
		</div>

		<div class="fifteen">
			<label for="fifteen-percent">15 Percent</label>
			<input type="radio" name="tip" class="percent" value=0.15>
		</div>

		<div class="twenty">
			<label for="twenty-percent">20 Percent</label>
			<input type="radio" name="tip" class="percent" value=.20>
		</div>

		<p class="calm-voice warning"></p>

	</div>
	
	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<output>
	<table>
		<tr>
			<td>
				<p class="normal-voice">Your subtotal is:</p>
			</td>
			<td><p><b></b></p></td>
		</tr>

		<tr>
			<td>
				<p class="normal-voice">Your tip amount is:</p>
			</td>
			<td><p><b></b></p></td>
		</tr>
		
		<tr>
			<td>
				<p class="normal-voice">Your grand total is:</p>
			</td>
			<td>
				<p><b></b></p>
			</td>
		</tr>
	</table>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
var $form = document.querySelector('form');
var $subTotal = document.querySelector("[name='subtotal']");
var $tip = document.querySelector("input[name='tip']");

let $output = document.querySelector('.js-exercise output');
$output.hidden = true;

$form.addEventListener('submit', function(event) {
	event.preventDefault();

	$output.hidden = false;

	var subTotal = parseInt($subTotal.value);
	var subTotalFormatted = subTotal.toLocaleString('en-US');

	var tip = document.querySelector("input[name='tip']:checked").value;

	console.log(tip);
	
	var tipTotal = (subTotal * tip).toFixed(2);
	var tipTotalFormatted = tipTotal.toLocaleString('en-US');

	var grandTotal = parseFloat(subTotal) + parseFloat(tipTotal);
	var grandTotalFormatted = grandTotal.toLocaleString('en-US');


	console.log(tipTotal + " " + subTotal);

	$output.innerHTML = `
		<p class="normal-voice">Sub-total: $${subTotalFormatted}</p> 
		 <p class="normal-voice">Tip total: $${tipTotalFormatted}</p> 
		 <p class="normal-voice">Grand total: $${grandTotalFormatted}</p> `;

});

</script>