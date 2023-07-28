<form id="multi-state-tax" type="submit">
	<div class="instructions">
		<p class="normal-voice">Select the state and county you live in.</p>
	</div>

	<div class="state">
		<label class="normal-voice" for="stateDropDown">Select a state</label>
		<select id="stateDropDown">
			<option value="">- - Select - -</option>
		</select>
		
	</div>

	<div class="county">
		<p class="normal-voice">Select a county</p>
		<select name="" id="countyDropDown">
		</select>
	</div>

	<button type="submit">TAX ME</button>
</form>

<output>test</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>

	const $form = document.getElementById("multi-state-tax");
	const $output = document.querySelector("output");
	$output.hidden = true;
	
	const stateDropDown = document.getElementById('stateDropDown');
	const countyDropDown = document.getElementById('countyDropDown');
	const $county = document.querySelector(".county");
	$county.style.display = "none";

	fetch("../data/exercises/stateTaxData.json")
		.then(function(response) {
			return response.json();
		})
		.then(function(taxData) {			
			console.log(taxData);

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

				const options = stateDropDown.querySelectorAll('option');

				options.forEach(option => {
					if (option.value === selectedState) {
						option.setAttribute("selected", "selected");
					} else {
						option.removeAttribute("selected");
					}
				})

				const state = taxData.find(state => {
					return state.id == selectedState;
				});

				if (state) {
					$county.style.display = "flex";
					populateCounties(state.counties);	

					//Check to see when county option is changed.
					countyDropDown.addEventListener("change", function() {
						const options = countyDropDown.querySelectorAll('option');
						const selectedCounty = countyDropDown.value;

						options.forEach(option => {
							if (option.value === selectedCounty) {
								option.setAttribute("selected", "selected");
							} else {
								option.removeAttribute("selected");
							}
						})
					})	
				} else {
					populateCounties([]);
				}			
			})

			$form.addEventListener("submit", event => {
				event.preventDefault();
				$output.hidden = false;

				const selectedState = stateDropDown.value;
				const state = taxData.find(state => {
					return state.id == selectedState;
				});

				const selectedCountyId = countyDropDown.value;
				const selectedStateCode = stateDropDown.value;

				// Find the selected county object within the selected state object
				const selectedCounty = state.counties.find(county => county.id === selectedCountyId);
				// let countyTax = selectedCounty.tax;
				// Now you have the selected county object, and you can use it as needed
				console.log(selectedCounty);
				console.log(selectedCounty.tax);
				let name = state.name;
				let stateTax = state.tax;
				
				let countyTax = selectedCounty.tax;
				$output.innerHTML = `${name} state tax: ${stateTax}. County tax: ${countyTax}`;
			})
		})
		.catch(function(error) {
			console.error('Error fetching JSON data:', error);
		});


</script>






















