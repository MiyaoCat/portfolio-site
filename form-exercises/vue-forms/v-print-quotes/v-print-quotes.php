<form data-vue='printQuote'>
	<h1>{{title}}</h1>	

	<div class="author">
		<label for="author">Enter Author:</label>
		<input name="author" v-model='author'>
	</div>
	
	<div class="quote">
		<label for="quote">Enter Quote:</label>
		<input name="quote" v-model='quote'>
	</div>
</form>

<output data-vue="outputPrintQuote" v-if="computedMessage">
	{{computedMessage}}
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
	<script src="form-exercises/vue-forms/v-print-quotes/script.js"></script>
</footer>