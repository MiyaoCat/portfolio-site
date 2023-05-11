<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Are you old enough to drive? Let's find out!</p>
	</div>

	<p class="normal-voice">Enter your age:</p>
	
	<input 
		type="number"
		name="age"
		
		step="1"
		placeholder="age"

	>

	<button type="submit" name="submitted">Submit</button>
</form>


<output>
	<p class="normal-voice"></p>
</output>

<script>
$form = document.querySelector('form');
$age = document.querySelector("[name='age']");

$form.addEventListener('submit', function(event) {
	event.preventDefault();

	age = $age.value;

	let $output = document.createElement('output');
	document.body.appendChild($output);

	if (age == null || age == "" || age == 0) {
		$output.innerHTML = 
			`<p class="normal-voice">You are unborn. So no, You can't drive.</p>`
	} 

	if (0 < age && age < 21) {
		$output.innerHTML = 
			`<p class="normal-voice">Sorry, you're too young, kiddo!</p>`
	} 

	if (21 <= age && age < 85) {
		$output.innerHTML = 
			`<p class="normal-voice">You may drive</p>`
	} 

	if (85 <= age && age < 110) {
		$output.innerHTML = 
			`<p class="normal-voice">We may need to take your driver's license away.</p>`
	}

	if (110 <= age) {
		$output.innerHTML = 
			`<p class="normal-voice">How are you even alive?!?!</p>`
	}

	console.log(age);
})
</script>