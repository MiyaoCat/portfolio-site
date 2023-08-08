<form class="password" method="POST">
	<div class="instructions">First you're going to create a password.</div>

	<!-- <div class="password-create"> -->
		<div class="fruit">
			<label for="fruit">What is your favorite fruit?</label>
			<input type="text" name="fruit">
			<p class="calm-voice warning"></p>
		</div>

		<div class="number">
			<label for="number">What is your favorite number?</label>
			<input type="number" name="number">
			<p class="calm-voice warning"></p>
		</div>
	<!-- </div> -->

	<div class="password-output"></div>	

	<password-enter>
		<label for="password">Please enter your password:</label>
		
		<input type="text" name="password">

		<p class="calm-voice warning"></p>
	</password-enter>

	<button type="submit" name="submitted">Submit</button>
</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	let $createPasswordForm = document.querySelector('form');
	let $fruit = document.querySelector("[name='fruit']");
	let $number = document.querySelector("[name='number']");
	let $output = document.querySelector(".js-exercise output");
	let $passwordOutput = document.querySelector(".password-output");
	let $passwordEnter = document.querySelector("password-enter");

	$output.hidden = true;
	$passwordEnter.hidden = true;

	$createPasswordForm.addEventListener('submit', function(event) {
		event.preventDefault();

		let fruitInput = $fruit.value;
		let numberInput = $number.value;
		let passwordInput = fruitInput + numberInput;	

		let $fruitWarn = document.querySelector('.fruit .warning');	
		let $numberWarn = document.querySelector('.number .warning');
		let $passwordWarn = document.querySelector('password-enter .warning');

		
	 	$passwordWarn.hidden = true;

	 	$fruitWarn.innerHTML = !fruitInput ? 'No fruit entered' : '';
	 	$numberWarn.innerHTML = !numberInput ? 'Need a number' : '';
		// if (!fruitInput) {
		// 	$fruitWarn.innerHTML = 'No fruit entered';
		// } 
		// if (fruitInput) {
		// 	$fruitWarn.innerHTML = '';
		// } 
		// if (!numberInput) {
		// 	$numberWarn.innerHTML = 'Need a number';
		// } 
		// if (numberInput) {
		// 	$numberWarn.innerHTML = '';
		// } 
		if (fruitInput && numberInput) {
			$fruitWarn.innerHTML = '';
			$numberWarn.innerHTML = '';

			$passwordOutput.style.display = 'block';
			$passwordOutput.style.display = 'block';
			$passwordEnter.style.display = 'flex';

			$passwordOutput.innerHTML = `<p class="normal-voice">You entered:</p> <span class="alert-voice">${passwordInput}</span> <p class="normal-voice">This will be your password.</p>`;
		}
		
		
		$password = document.querySelector("[name='password']");
			let password = $password.value;
				console.log(password);
			
			if (passwordInput != "" && password === passwordInput) {
				$output.hidden = false;
				$output.innerHTML = `<p class="normal-voice"><span class="special">${password}</span> is correct! You may enter!`;
				$passwordWarn.innerHTML = '';
			}	

			if (password != passwordInput && password != "") {
				
				$passwordWarn.innerHTML = 'Errr! Incorrect';
				$passwordWarn.hidden = false;
		}		
	});
</script>








