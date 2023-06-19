
<form data-vue='madLib'>
	<h1>{{title}}</h1>

	<div class="noun">
		<label for="noun">Enter a Noun:</label>
		<input name="noun" v-model='noun'>
	</div>

	<div class="verb">
		<label for="verb">Enter a Verb:</label>
		<input name="verb" v-model='verb'>
	</div>

	<div class="adjective">
		<label for="adjective">Enter an Adjective:</label>
		<input name="adjective" v-model='adjective'>
	</div>

	<div class="adverb">
		<label for="adverb">Enter an Adverb:</label>
		<input name="adverb" v-model='adverb'>
	</div>
</form>

<output data-vue="outputMadLibs" v-if="computedMessage">
	<p class="normal-voice">{{computedMessage}}</p>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script  src="form-exercises/vue-forms/v-mad-libs/script.js"></script>


