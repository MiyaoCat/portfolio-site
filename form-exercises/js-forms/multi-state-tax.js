<form id="multi-state-tax" type="submit">
	<div class="instructions">
		<p class="normal-voice">Select the state and county you live in.</p>
	</div>

	<div class="state">
		<label class="normal-voice" for="stateDropdown">Select a state</label>
		<select id="stateDropdown">
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

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("multi-state-tax");
	const $output = document.querySelector("output");
	$output.hidden = true;

	const stateDropdown = document.getElementById('stateDropdown');

	// Sample data containing US states
	const statesData = [
		{
			"code": "al",
			"name": "Alabama",
			"tax": 0.5,
			"selected": false,
			"counties": [
				{
					"id": "al-1",
					"county": "Whatcom",
					"tax": 0.2,
					"selected": false
				}
			]
		},
		{
			"code": "ca",
			"name": "california",
			"tax": 0.5,
			"selected": false,
			"counties": [
				{
					"id": "ca-1",
					"county": "Alameda",
					"tax": 0.6,
					"selected": false
				},
				{
					"id": "ca-2",
					"county": "Sacramento",
					"tax": 0.3,
					"selected": false
				}
			]
		}
	]

	function populateDropdown(states) {
		states.forEach(function(state) {
			const option = document.createElement('option');
			option.value = state.code;
			option.textContent = state.name;
			stateDropdown.appendChild(option);
		});
	}
	stateDropdown.addEventListener('change', function() {
		const option = document.querySelector("option");
		const selectedState = stateDropdown.value;
		const options = stateDropdown.querySelectorAll('option');

		options.forEach(function(option) {
			if (option.value === selectedState) {
				option.setAttribute('selected', 'selected');
			} else {
				option.removeAttribute('selected');
			}
		})
	});

	populateDropdown(statesData);


	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		$output.hidden = false;
	})

	$form.addEventListener("keydown", function(event) {
		console.log(event.key)
	})
</script>






















