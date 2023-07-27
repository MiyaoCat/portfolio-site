<form id="multi-state-tax" type="submit">
	<div class="instructions">
		<p class="normal-voice">Select the state and county you live in.</p>
	</div>

	<div class="state">
		<label class="normal-voice" for="stateDropDown">Select a state</label>
		<select id="stateDropDown">
			<option id="state" value="">- - Select - -</option>
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

	// // Sample data containing US states
	
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
				// //populate sate dropdown list
			function populateStates(states) {
				states.forEach(state => {
					const option = document.createElement("option");
					option.value = state.code;
					option.innerHTML = state.name;
					stateDropDown.appendChild(option);
				})
			}

			populateStates(taxData);

			function populateCounties(counties) {
				countyDropDown.innerHTML = "";
				//this resets the county to default 
				const defaultOption = document.createElement("option");
				defaultOption.value = "";
				defaultOption.textContent = "- - Select - -";
				countyDropDown.appendChild(defaultOption);

				//loop through counties and append
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
					return state.code = selectedState;
				});

				if (state) {
					$county.style.display = "flex";
					populateCounties(state.counties);
				} else {
					populateCounties([]);
				}
			})
		})
		.catch(function(error) {
			console.error('Error fetching JSON data:', error);
		});

	$form.addEventListener("submit", event => {
		event.preventDefault();
		$output.hidden = false;
	})
</script>






















