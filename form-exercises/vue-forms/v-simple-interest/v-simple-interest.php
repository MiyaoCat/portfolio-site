
<form data-vue='simpleInterest'>
	<p class="instructions" v-html='instructions'></p>
	<!-- <form data-vue='simpleInterest'> -->
		<div class="principal">
			<label for="principal">Enter your principal investment:</label>
			<input name="principal" type="number" min="0" v-model='principal'>
		</div>
		
		<div class="interest">
			<label for="interestRate">Enter the interest rate of your investment:</label>
			<input name = "interestRate" type="number" min="0" v-model="interestRate">
		</div>
		
		<div class="years">
			<label for="years">Enter the number of years you'll invest:</label>
			<input name = "years" type="number" min="0" v-model="years">
		</div>	
	<!-- </form> -->

	
</form>

<output data-vue="outputSimpleInterest" v-if="computedMessage">
	<p class="normal-voice">{{computedMessage}}</p>
	<!-- <p class='normal-voice'>Years invested: <span>{{computedYears}}</span></p> -->
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
	<script src="form-exercises/vue-forms/v-simple-interest/script.js"></script>
</footer>
