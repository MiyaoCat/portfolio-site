
<form data-vue="hello">
	<div class='instructions'>Type your name in the text field to receive a greeting. </div>
	<input v-model="name" placeholder="Enter your name">
</form>

<output data-vue="hello-output" v-if="computedMessage">{{computedMessage}}</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
	<script src="form-exercises/vue-forms/v-hello/script.js"></script>
</footer>