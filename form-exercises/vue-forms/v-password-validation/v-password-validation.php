<form data-vue='passwordValidation'>
	
	<p class="instructions" v-html='instructions'></p>

	<label for="password">What is the secret password? <p class='whisper-voice'>(Hint: It's Sesame)</p></label>
	<input name ="password" type="password" min="0" v-model="password">	
	
	<!-- <button @click=messageHandler()>Open</button> -->
	
</form>

<output data-vue="outputPassword" v-if="outputMessage">{{outputMessage}} </output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-password-validation/script.js"></script>
