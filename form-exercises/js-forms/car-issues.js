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




	<button class="answer" type="submit">Diagnose my Car!</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("car-issues");
	const $radioButton = document.querySelectorAll("input[type='radio']");

	const $button = document.querySelector(".answer");
	$button.hidden = true;

	const $output = document.querySelector("output");
	$output.hidden = true;
	
	const $key = document.querySelector(".key");


	// function isChecked(value) {
  	// 	console.log(value);
	// };

	$radioButton.forEach((radioButton) => {
		const lastDiv = $form.lastElementChild;
		const newDiv = document.createElement("div");
		radioButton.addEventListener("click", () => {
			const key = document.querySelector("[name='key']:checked");
			console.log(key.value)
			if (key.value == "yes") {
				$key.style.display = "none";
				newDiv.classList.add("battery");
				newDiv.innerHTML = `
					<p class="normal-voice">2. Are the battery terminals corroded?</p>
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
				`
				$form.insertBefore(newDiv, lastDiv.nextSibling);
				let $battery = document.querySelector(".battery");
				let $batteryRadioButtons = $battery.querySelectorAll("input[type='radio']");
				$batteryRadioButtons.forEach((batteryRadioButton) => {
					batteryRadioButton.addEventListener("click", () => {
						if (battery.value == "yes") {
							$button.hidden = false;
							$output.hidden = false;
							$output.innerHTML = "Clean terminals and try starting again"
						}
					})
				})		
			} else {
				const newDiv = document.createElement("div");
				$key.style.display = "none";
				newDiv.classList.add("clicking");
				newDiv.innerHTML = `
					<p class="normal-voice">2. Does the car make a clicking noise?</p>
					<div class="radio-buttons">
						<div class="yes">
							<label for="yes">Yes</label>
							<input 
								type="radio"
								id="yes"
								name="key"
								value="yes"
								onclick="isChecked('yes')"
							>
						</div>
						
						<div class="no">
							<label for="no">No</label>
							<input 
								type="radio"
								id="no"
								name="key"
								value="no"
								onclick="isChecked('no')"
							>
						</div>
					</div>

					<p class="calm-voice warning"></p>
				`
			$form.insertBefore(newDiv, lastDiv.nextSibling);
		}


		})
	})
	


		// const battery = document.querySelector("[name='battery']:checked");
		// const clicking = document.querySelector("[name='clicking']:checked");

	


</script>







<script>

</script>






