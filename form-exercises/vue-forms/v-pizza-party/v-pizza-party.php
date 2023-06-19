
<form data-vue='pizzaParty'>
	<p class="instructions" v-html='instructions'></p>
	
	<div class="people">
		<label for="people">How many people will be attending?</label>
		<input type="number" min="0" name="people" v-model='people'>
	</div>

	<div class="pizzas">
		<label for="pizzas">How many pizzas will there be?</label>
		<input type="number" min="0" name="pizzas" v-model='pizzas'>
	</div>
	
	<p class="userInput" v-html="userInputs">You entered: </p>
	
</form>

<div class='return'>
	<a href='?page=v-exercises' class='alert-voice'>Back</a>
</div>

<output data-vue='outputPizzaMessage' v-if='outputPizzaMsg'> 
	<p class='normal-class'>{{outputPizzaMsg}}</p>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
	<script src="form-exercises/vue-forms/v-pizza-party/script.js"></script>
</footer>
