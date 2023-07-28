<form id="multi-state-tax" type="submit">
	<div class="instructions">
		<p class="normal-voice">Enter your order amount. Then select the state and county you live in.</p>
	</div>

	<div class="order">
		<label for="order">Order Amount:</label>

		<input 
			type="number"
			id="order"
			value=""
			min=.01
			step=.01
		>

		<p class="calm-voice warning"></p>
	</div>

	<div class="state">
		<label class="normal-voice" for="stateDropDown">Select a state</label>

		<select id="stateDropDown">
			<option value="">- - Select - -</option>
		</select>

		<p class="calm-voice warning"></p>
	</div>

	<div class="county">
		<p class="normal-voice">Select a county</p>

		<select name="" id="countyDropDown"></select>

		<p class="calm-voice warning"></p>
	</div>

	<button type="submit">TAX ME</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("multi-state-tax");
	
	const $order = document.getElementById('order');
	const $orderWarn = document.querySelector(".order .warning");

	const stateDropDown = document.getElementById('stateDropDown');
	const $stateWarn = document.querySelector(".state .warning");

	const countyDropDown = document.getElementById('countyDropDown');
	const $countyWarn = document.querySelector(".county .warning");

	const $county = document.querySelector(".county");
	$county.style.display = "none";

	const $output = document.querySelector("output");
	$output.hidden = true;

	fetch("data/exercises/stateTaxData.json")
		.then(function(response) {
			return response.json();
		})
		.then(function(taxData) {			
			console.log(taxData);
			console.log("order warn: ", $orderWarn)
			function populateStates(states) {
				states.forEach(state => {
					const option = document.createElement("option");
					option.value = state.id;
					option.innerHTML = state.name;
					stateDropDown.appendChild(option);
				})
			}
			populateStates(taxData);

			function populateCounties(counties) {
				countyDropDown.innerHTML = "";

				const defaultOption = document.createElement("option");
				defaultOption.value = "";
				defaultOption.textContent = "- - Select - -";
				countyDropDown.appendChild(defaultOption);

				counties.forEach(county => {
					const option = document.createElement("option");
					option.value = county.id;
					option.textContent = county.name;
					countyDropDown.appendChild(option);
				})				
			}

			//Check to see when state option is changed.
			stateDropDown.addEventListener("change", function() {
				const selectedState = stateDropDown.value;

				const state = taxData.find(state => {
					return state.id == selectedState;
				});

				if (state) {
					$county.style.display = "flex";
					populateCounties(state.counties);	
				} else {
					populateCounties([]);
				}			
			})

			$form.addEventListener("submit", event => {
				event.preventDefault();

				const selectedState = stateDropDown.value;
				const state = taxData.find(state => {
					return state.id == selectedState;
				});

				const selectedCountyId = countyDropDown.value;
				const selectedStateCode = stateDropDown.value;

				const selectedCounty = state.counties.find(county => {
					return county.id === selectedCountyId;
				});

				let abbr = state.id.toUpperCase();
				let county = selectedCounty.name;

				let order = parseFloat($order.value);
				let orderFormatted = order.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
				
				let stateTax = state.tax;
				let stateTaxAmount = order * stateTax;
				let stateTaxFormatted = stateTaxAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
				
				let countyTax = selectedCounty.tax;
				let coTaxAmount = order * countyTax;
				let countyTaxFormatted = coTaxAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

				let taxTotal = stateTaxAmount + coTaxAmount;
				let taxTotalFormatted = taxTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
				let grandTotal = order + taxTotal;
				let grandTotalFormatted = grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
				$output.innerHTML = `
					<div class="receipt2">
					<div class="subtotal">
						<p class="normal-voice">Subtotal:</p><span class="special">${orderFormatted}</span>
					</div>
					<div class="state-output">
						<p class="normal-voice">${abbr} Tax:</p><span class="special">${stateTaxFormatted}</span>
					</div>
					<div class="county-output">
						<p class="normal-voice">${county} County Tax:</p><span class="special">${countyTaxFormatted}</span>
					</div>
					<div class="taxtotal">
						<p class="normal-voice">Tax Total:</p><span class="special">${taxTotalFormatted}</span>
					</div>
					<div class="grandtotal">
						<p class="normal-voice">Grand Total:</p><span class="special">${grandTotalFormatted}</span>
					</div>
					</div>
				`;

				
			})
		})
		.catch(function(error) {
			console.error('Error fetching tax data:', error);
		});

		//ERROR MESSAGING
		$form.addEventListener("submit", event => { 
			$output.hidden = false;
			if ($order.value == "") {
				$output.hidden = true;
				$orderWarn.innerHTML = "Order something!"
			} else {
				$orderWarn.innerHTML = "";
			}

			if (stateDropDown.value == "") {
				$output.hidden = true;
				$stateWarn.innerHTML = "Pick a state, any state"
			} else {
				$stateWarn.innerHTML = "";
			}	

			if (stateDropDown.value && countyDropDown.value == "") {
				$output.hidden = true;
				$countyWarn.innerHTML = "Must select a county"
			} else {
				$countyWarn.innerHTML = "";
			}
		})
</script>






















