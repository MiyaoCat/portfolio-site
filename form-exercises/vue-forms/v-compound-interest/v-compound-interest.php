<form data-vue='compoundInterest'>
	
	<p class="instructions normal-voice" v-html='instructions'></p>
	
	<div class="principal">
		<label for="principal">Enter your principal investment:</label>
		<input name="principal" type="number" min="0" v-model='principal'>
	</div>
	
	<div class="interest">
		<label for="interestRate">Enter the interest rate of your investment as a 	percent:
		</label>
		<input name = "interestRate" type="number" min="0" v-model="interestRate">
	</div>
	
	<div class="years">
		<label for="years">Enter the number of years you'll invest:</label>
		<input name = "years" type="number" min="0" v-model="years">
	</div>
	
	<div class="compounds">
		<label for="compounds">Enter the number of times the interest is compounded per year:</label>
		<input name ="compounds" type="number" min="0" v-model="compounds">
	</div>
	
	<!-- <button @click=messageHandler()>Cha Ching!</button> -->
	
</form>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<output data-vue="outputCompoundInterest" v-if="outputMessage">
	<p class="normal-class">{{outputMessage}}</p>
</output>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-compound-interest/script.js"></script>