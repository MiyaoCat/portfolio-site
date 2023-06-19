<form data-vue='currencyConversion'>
	<p class="instructions" v-html='instructions'></p>
	
	<div class="euros">
		<label for="euros">How many Euro's ya got?</label>
		<input name="euros" type="number" v-model='euros'>
	</div>
	
	<div class="exchange">
		<label for="exchange">What's the current exchange rate?</label>
		<input name = "exchange" type="number" v-model="xRate">
	</div>
	
	<!-- <button @click.prevent=messageHandler()>Convert 💱</button> -->
</form>


<output data-vue="outputCurrencyConversion" v-if="outputMessage">{{outputMessage}} </output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-currency-conversion/script.js"></script>