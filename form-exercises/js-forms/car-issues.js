<form id="car-issues" method="POST">
	<div class="instructions">
		<p class="normal-voice">This form will walk you through a series of questions to troubleshoot your car issues. Answer each question as they come up.</p>
	</div>

	<div class="key question">
		<p class="normal-voice">1. Is the car silent when you turn the key?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="key"
					value="yes"
				
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="key"
					value="no"
					
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<div class="battery question">
		<p class="normal-voice">2. Are the battery terminals corroded?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="battery"
					value="yes"
					onclick="isChecked('yes')"
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="battery"
					value="no"
					onclick="isChecked('no')"
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<div class="clicking question"></div>
	<button type="submit">Diagnose my Car!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("car-issues");
	const $radioButton = document.querySelector("input[type='radio']");

	const $button = document.querySelector("[type='submit']");
	$button.hidden = true;

	const $output = document.querySelector("output");
	$output.hidden = true;
	
	const $key = document.querySelector(".key");
	const $battery = document.querySelector(".battery");
	$battery.style.display = "none";

	function isChecked(boolean) {
  		return boolean;
	}

	//DELETE below
	// let questions = $form.querySelectorAll(".question");
 	// console.log(questions.length);
 	// let secondQ = questions[1];
 	// console.log("1", questions[0])
 	// console.log(secondQ);
 	// console.log("3", questions[2])
	let questions = $form.querySelectorAll(".question");
	let questionsCount = questions.length;
	console.log("questions count: ", questionsCount);
	
	function previousQuestion() {
		let questions = $form.querySelectorAll(".question");
		let questionsCount = questions.length;
		console.log(questionsCount);

		let backButton = document.createElement("button");

		backButton.textContent = "Previous Question";

		backButton.addEventListener("submit", event => {
			event.preventDefault();
		})
		currentDiv.appendChild(backButton);
	}

	function buttonAndMessage(message) {
		$button.hidden = false;
		$form.addEventListener("submit", event => {
			event.preventDefault();
			$output.hidden = false;
			$output.innerHTML = message;	
		})
	}

	document.querySelectorAll("input[type='radio']").forEach( function(radioButton) {
		radioButton.addEventListener("change", event => {
			const key = document.querySelector("[name='key']:checked");
			const battery = document.querySelector("[name='battery']:checked");

			if (key.value == "yes") {
				$key.style.display = "none";
				$battery.style.display = "flex";

				if (battery.value == "yes") {
					buttonAndMessage("Clean terminals and try starting again.");
					
				} else {
					buttonAndMessage("Replace cables and try again.")					
				}
			}
		})
	})



</script>
















