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
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="battery"
					value="no"
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<div class="clicking question">
		<p class="normal-voice">3. Does the car make a clicking noise?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="clicking"
					value="yes"
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="clicking"
					value="no"
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<div class="crank question">
		<p class="normal-voice">3. Does the car crank up but fail to start?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="crank"
					value="yes"
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="crank"
					value="no"
				>
			</div>
		</div>

		<p class="calm-voice warning"></p>
	</div>

	<button class="answer" type="submit">Diagnose my Car!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("car-issues");
	const $button = document.querySelector("button");
	const $output = document.querySelector("output");
	$output.hidden = true;
	
	const key = document.querySelector(".key");

	function hideDiv(question, divName, answer) {
		if (question === answer) {
			setTimeout(function() {
				divName.style.display = "none";
			}, 400);
		}
	}

	function displayDiv(divName) {
		setTimeout(function() {
			divName.style.display = "flex";
		}, 400)
	}

	const battery = document.querySelector(".battery");
	battery.style.display = "none";

	const clicking = document.querySelector(".clicking");
	clicking.style.display = "none";

	const crank = document.querySelector(".crank");
	crank.style.display = "none";

	$form.addEventListener("click", event => {
		let keyChecked = document.querySelector("input[name='key']:checked");
		let keyValue = keyChecked.value;

		hideDiv(keyValue, key, "yes");

		if (keyValue === "yes") {
			displayDiv(battery);

			if (battery) {
				let batteryChecked = document.querySelector("input[name='battery']:checked");
				let batteryValue = batteryChecked.value;

				if (batteryValue === "yes") {
					$output.hidden = false;
					$output.innerHTML = "Replace batts";						
				}
			}	
		} 
		if (keyValue === "no") {
			hideDiv(keyValue, key, "no");
			
			displayDiv(clicking);
		}
		
	})

	//Get radio button value
	//listen for "click" 
	//After user "clicks", hide current question and populate next questiond
	//If user clicks "yes" populate battery question
		//If user clicks yes or no, output answer
	//If user clicks "no", populate Clicking question
		//If user clicks yes, populate output answer
		//If user clicks no, populate Crank question

</script>








