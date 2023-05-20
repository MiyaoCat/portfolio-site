<form data-vue='simpleMath'>
	<label for="number">Enter a Number:</label>
	<input type="number" name="number" v-model='number'>

	<label for="number2">Enter a second Number:</label>
	<input type="number" name="number2" v-model='number2'>
	
	<!-- <p class='userInput'><span>You entered</span>: {{userInputMessage}}</p> -->
	
</form>

<output data-vue='outputSimpleMath' v-if='outputMessage'> 
	{{outputMessage}}
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script  src="form-exercises/vue-forms/v-simple-math/script.js"></script>