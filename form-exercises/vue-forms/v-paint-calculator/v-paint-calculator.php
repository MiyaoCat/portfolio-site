

<form data-vue='paintCalc'>

	<p class="instructions">{{instructions}}</p>
	
	<label for="width">How wide is the ceiling in feet?</label>
	<input type="number" min="0" name="width" v-model='width'>

	<label for="length">How long is the ceiling in feet?</label>
	<input type="number" min="0" name="length" v-model='length'>

	<p class="userInput" v-html="userInputs">You entered: </p>
</form>

<output data-vue='outputPaintCalc' v-if='computedMessage'>{{computedMessage}} </output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-paint-calculator/script.js"></script>
