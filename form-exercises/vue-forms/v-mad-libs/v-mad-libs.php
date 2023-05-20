
<form data-vue='madLib'>
	<h1>{{title}}</h1>
	<label for="noun">Enter a Noun:</label>
	<input name="noun" v-model='noun'>

	<label for="verb">Enter a Verb:</label>
	<input name="verb" v-model='verb'>

	<label for="adjective">Enter a Adjective:</label>
	<input name="adjective" v-model='adjective'>

	<label for="adverb">Enter a Adverb:</label>
	<input name="adverb" v-model='adverb'>


</form>

<output data-vue="outputMadLibs" v-if="computedMessage">
	<p class="normal-voice">{{computedMessage}}</p>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script  src="form-exercises/vue-forms/v-mad-libs/script.js"></script>


