<form data-vue='areaOfRoom'>
	<p class="normal-voice">{{description}}</p>
	<div class="length">
		<label for="length">What is the length of the room in feet?</label>
		<input type="number" min="0" name="length" v-model='length'>
	</div>

	<div class="width">
		<label for="width">What is the width of the room in feet?</label>
		<input type="number" min="0" name="width" v-model='width'>
	</div>
	
	<button v-on:click.prevent="outputMessage">Return</button>
</form>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<output data-vue="outputAreaOfRoom" v-if="outputAreaMsg"> 
	<p class='normal-voice'>{{outputAreaMsg}}</p>
</output>


<footer>
	<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
	<script src="form-exercises/vue-forms/v-area-of-room/script.js"></script>
</footer>
