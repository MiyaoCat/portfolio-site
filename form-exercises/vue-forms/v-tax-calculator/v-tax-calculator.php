<form data-vue='taxCalc'>	
	<p class="instructions normal-voice" v-html='instructions'></p>

	<div class="order">
		<label for="order">Enter your order amount:</label>
		<input name="order" type="number" min="0" v-model='order'>
	</div>
	
	<div class="state">
		<label for="state">What is the State? <p class='calm-voice'>(Hint: It's Wisconsin)</p></label>
		<input name ="state" type="text" min="0" v-model="state">
	</div>

	<!-- <button @click=messageHandler()>Cha Ching!</button> -->
	
</form>

<output data-vue="outputTaxCalc" v-if="outputMessage">{{outputMessage}} </output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-tax-calculator/script.js"></script>