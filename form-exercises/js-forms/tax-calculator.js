<form id="tax" type="POST">
	<div class="instructions">
		<p class="normal-voice">Enter your order amount and we'll tell you how much you'll have to pay to the business and to Uncle Sam.</p>
		<p class="normal-voice">Uncle Sam's take: 5.5% of order total</p>
	</div>

	<div class="order">
		<label for="order">Enter order amount</label>
		<input 
			type="number"
			id="order"
			min=0
			step=.01
			placeholder=10
		>
		<p class="calm-voice warning"></p>
	</div>

	<div class="state">
		<label for="state">Enter the state:</label>
		<p class="calm-voice">(Hint: It's Wisconsin)</p>
		<input 
			type="text"
			id="state"
			min=0
			step=.01
			placeholder=10
		>
		
		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">Take my Money!</button>
</form>

<output><div class="receipt"></div></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("tax");
	const $order = document.getElementById("order");
	const $orderWarn = document.querySelector(".order .warning");

	const $state = document.getElementById("state");
	const $stateWarn = document.querySelector(".state .warning");

	const $output = document.querySelector("output");
	const $receipt = document.querySelector(".receipt");

	$output.hidden = true;
	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		let order = $order.value;
		let state = $state.value;

		if (order == "" || order == 0) {
			$output.hidden = true;
			$orderWarn.innerHTML = "If you didn't order anything, then why are you here?"
		} else {
			$orderWarn.innerHTML = "";
		}

		if (state.toLowerCase() == "wi" || state.toLowerCase() === "wisconsin") {
			$stateWarn.innerHTML = "";
			if (order != "" || order != 0) {

				let orderNum = parseFloat(order).toFixed(2);
				let orderFormatted = orderNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

				let tax = (orderNum*.055).toFixed(2);
				let taxFormatted = tax.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				let total = (orderNum*1.055).toFixed(2);
				let totalFormatted = total.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

				$output.hidden = false;
				$receipt.innerHTML = `
					<p class="normal-voice">Subtotal:</p>
					<span class="special">$${orderFormatted}</span>
					<p class="normal-voice">Tax Total: </p>
					<span class="special">$${taxFormatted}</span>
					<p class="normal-voice">Grand Total: </p>
					<span class="special">$${totalFormatted}</span>
				`;
			}
		} else {
			$output.hidden = true;
			$stateWarn.innerHTML = "That's not Wisconsin"
		}
	})
</script>











