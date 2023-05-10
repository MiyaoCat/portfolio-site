<footer class="site-footer">
	<!-- <div class="query-string"><?php echo "?" . queryString(); ?></div> -->
	
	<div class='logo'>
		<a href="?page=home">
			<?php include("./images/icons/logo.svg"); ?>
		</a>
	</div>

	<a href="?page=style-guide">Style Guide</a>
	<a href="?page=resume">Resume</a>
	<a href="?page=exercises">Exercises</a>
	</footer>

<!-- <script src='javascript/exercises.js'></script>	 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
<!-- <script src="./v-exercises/v-simple-interest/script.js"></script> -->
</body>

<script>
let $password = document.querySelector('form');

let $fruit = document.querySelector("[name='fruit']");
let $number = document.querySelector("[name='number']");

let $output = document.querySelector("output");
$output.hidden = true;

let $passwordOutput = document.querySelector(".password-output");
$passwordOutput.hidden = true;

let $passwordEnter = document.querySelector("password-enter");
$passwordEnter.hidden = true;

$password.addEventListener('submit', function(event) {
	event.preventDefault();

	let fruitInput = $fruit.value;
	let numberInput = $number.value;
	let passwordInput = fruitInput + numberInput;	

	$output.hidden = false;
	if (!fruitInput) {
		let $warning = document.querySelector('.calm-voice.warning');

		$warning.innerHTML = 'No fruit entered';
	} else {
		$passwordOutput.hidden = false;

		$passwordOutput.innerHTML = `<p class="normal-voice">You entered:</p> <span class="alert-voice">${passwordInput}</span> <p class="normal-voice">This will be your password.</p>`;

		$passwordEnter.hidden = false;

		}
		
});
</script>
</html>
