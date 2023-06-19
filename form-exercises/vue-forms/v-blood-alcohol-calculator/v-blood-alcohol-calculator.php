
<form data-vue='bacCalc'>
	<p class="instructions normal-voice" v-html='instructions'></p>
	
		<div class="alcohol">
			<label for="alcohol">How much alcohol have you consumed, in ounces?</label>
			<input name ="alcohol" type="number" v-model="alcohol">
		</div>

		<div class="weight">
			<label for="weight">How much do you weigh, in pounds?</label>
			<input name ="weight" type="number" v-model="weight">
		</div>
		
		<div class="hours">
			<label for="hours">How many hours since your last drink?</label>
			<input name ="hours" type="number" v-model="hours">
		</div>
		
		<div class="gender">
			<p class="instructions">Select your biological gender:</p>

			<div class="male">
				<label for="male">Male</label>
				<input name="gender" id="male" type="radio" value="male" v-model="gender">
			</div>

			<div class="female">
				<label for="female">Female</label>
				<input name="gender" id="female" type="radio" value="female"v-model="gender">
			</div>
		</div>
	
	<!-- <button @click=messageHandler()>Am I drunk?</button> -->

</form>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<output data-vue="outputBacCalc" v-if="outputMessage">
	{{outputMessage}} 
</output>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-blood-alcohol-calculator/script.js"></script>