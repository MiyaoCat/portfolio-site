<form id="car-issues" method="POST">
	<div class="instructions">
		<p class="normal-voice">Dreamhost Tower test. This form will walk you through a series of questions to troubleshoot your car issues. Answer each question as they come up.</p>
	</div>

	<div class="key question">
		<p class="normal-voice">1 Key. Is the car silent when you turn the key?</p>
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
	</div>

	<div class="battery question">
		<p class="normal-voice">2 Battery. Are the battery terminals corroded?</p>
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
	</div>

	<div class="clicking question">
		<p class="normal-voice">2 Clicking. Does the car make a clicking noise?</p>
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
	</div>

	<div class="crank question">
		<p class="normal-voice">3 Crank. Does the car crank up but fail to start?</p>
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
	</div>

	<div class="engine question">
		<p class="normal-voice">4 Engine. Does the engine start and then die?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="engine"
					value="yes"
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="engine"
					value="no"
				>
			</div>
		</div>
	</div>

	<div class="injection question">
		<p class="normal-voice">5 Fuel Injection. Does your car have fuel injection?</p>
		<div class="radio-buttons">
			<div class="yes">
				<label for="yes">Yes</label>
				<input 
					type="radio"
					id="yes"
					name="injection"
					value="yes"
				>
			</div>
			
			<div class="no">
				<label for="no">No</label>
				<input 
					type="radio"
					id="no"
					name="injection"
					value="no"
				>
			</div>
		</div>
	</div>

	<button class="go-back">Previous Question</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $form = document.getElementById("car-issues");
	const $button = document.querySelector("button");
	$button.hidden = true;
	const $output = document.querySelector("output");
	$output.hidden = true;
	
	const key = document.querySelector(".key");

	const battery = document.querySelector(".battery");
	battery.style.display = "none";

	const clicking = document.querySelector(".clicking");
	clicking.style.display = "none";

	const crank = document.querySelector(".crank");
	crank.style.display = "none";

	const engine = document.querySelector(".engine");
	engine.style.display = "none";

	const injection = document.querySelector(".injection");
	injection.style.display = "none";


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
			// $button.hidden = false;
		}, 400);
	}

	function hideCurrentQuestion(questionName) {
		questionName.style.display = "none";
	}

	function goBack(currentQuestion, previousQuestion) {
		$button.hidden = false;	

		$button.addEventListener("click", event => {
			event.preventDefault();
			hideCurrentQuestion(currentQuestion);
			displayDiv(previousQuestion);
		})
	}

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
					$output.innerHTML = "Clean terminals and try starting again";						
				}

				if (batteryValue == "no") {
					$output.hidden = false;
					$output.innerHTML = "Replace cables and try again.";	
				}
			}	
		} 

		if (keyValue === "no") {
			hideDiv(keyValue, key, "no");
			displayDiv(clicking);
			if (clicking) {
				let clickingChecked = document.querySelector("input[name='clicking']:checked");
				let clickingValue = clickingChecked.value;
				

				if (clickingValue === "yes") {
					$output.hidden = false;
					$output.innerHTML = "Replace the battery.";	
				}

				if (clickingValue === "no") {
					$output.hidden = true;
					hideDiv(clickingValue, clicking, "no");
					displayDiv(crank);
					if (crank) {
						
						let crankChecked = document.querySelector("input[name='crank']:checked");
						let crankValue = crankChecked.value;
						

						if (crankValue === "yes") {
							$output.hidden = false;
							$output.innerHTML = "Check spark plug connections.";	
						} 

						if (crankValue === "no") {
							$output.hidden = true;
							hideDiv(crankValue, crank, "no");
							displayDiv(engine);

							if (engine) {
								let engineChecked = document.querySelector("input[name='engine']:checked");
								let engineValue = engineChecked.value;

								if (engineValue === "yes") {
									hideDiv(engineValue, engine, "yes");
									displayDiv(injection);

									if (injection) {
										let injectionChecked = document.querySelector("input[name='injection']:checked");
										let injectionValue = injectionChecked.value;

										if (injectionValue === "yes") {
											$output.hidden = false;
											$output.innerHTML = "Get it in for service.";	
										} else {
											$output.hidden = false;
											$output.innerHTML = "Check to ensure the choke is opening and closing.";
										}
									}
								}

								if (engineValue === "no") {
									$output.hidden = false;
									$output.innerHTML = "I don't know what you should do. The exercise didn't provide an answer. Call a mechanic?";	
								}
							}
						}
					}
				}
			}
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








