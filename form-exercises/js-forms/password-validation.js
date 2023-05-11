<form method="POST" class="password">
	<div class="instructions">First you're going to create a password.</div>

	<div class="password-create">
		<label for="fruit">What is your favorite fruit?</label>
		<input type="text" name="fruit">
		<p class="calm-voice warning"></p>

		<label for="number">What is your favorite number?</label>
		<input type="number" name="number">
		<p class="calm-voice warning"></p>
	</div>

	<div class="password-output"></div>	

	<password-enter>
		<label for="password">Please enter your password:</label>
		
		<input type="text" name="password">

		<p class="calm-voice warning"></p>
	</password-enter>

	<button type="submit" name="submitted">Submit</button>
</form>

<output></output>

<script>
let $createPasswordForm = document.querySelector('form');
let $fruit = document.querySelector("[name='fruit']");
let $number = document.querySelector("[name='number']");
let $output = document.querySelector("output");
let $passwordOutput = document.querySelector(".password-output");
let $passwordEnter = document.querySelector("password-enter");

$output.hidden = true;
$passwordEnter.hidden = true;

$createPasswordForm.addEventListener('submit', function(event) {
	event.preventDefault();

	let fruitInput = $fruit.value;
	let numberInput = $number.value;
	let passwordInput = fruitInput + numberInput;	

	let $warning1 = document.querySelector('.calm-voice.warning:nth-of-type(1)');	
	let $warning2 = document.querySelector('.calm-voice.warning:nth-of-type(2)');
	let $warning3 = document.querySelector('password-enter p.warning');

	
 	$warning3.hidden = true;

	if (!fruitInput) {
		$warning1.innerHTML = 'No fruit entered';
	} 
	if (fruitInput) {
		$warning1.innerHTML = '';
	} 
	if (!numberInput) {
		$warning2.innerHTML = 'Need a number';
	} 
	if (numberInput) {
		$warning2.innerHTML = '';
	} 
	if (fruitInput && numberInput) {
		$warning1.innerHTML = '';
		$warning2.innerHTML = '';

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
		$output.innerHTML = `<p class="normal-voice">${password} is correct! You may enter!`;
		$warning3.innerHTML = '';
	}	

	if (password != passwordInput && password != "") {
		
		$warning3.innerHTML = 'Errr! Incorrect';
		$warning3.hidden = false;
	}
		
});
</script>








