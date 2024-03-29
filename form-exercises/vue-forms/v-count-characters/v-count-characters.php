
<form data-vue='countChar'>
	<div class='instructions'>
		<p class='normal-voice'>Type in a string of text and I'll count how many characters you entered.</p>
	</div>
	<textarea 
		v-model='string'
		type="text" 
		name="string" 
		rows="5"
		value="" 
		placeholder="Type whatever you want"
	></textarea>

</form>

<output data-vue='outputChar' v-if='computedMessage'>
	<p>{{ computedMessage }}</p>
	<p>{{ countWithSpaces }}</p>
	<p>{{ computedWordCount }}</p>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14" type="text/javascript"></script>
	<script src="form-exercises/vue-forms/v-count-characters/script.js" type="text/javascript"></script>
</footer>
