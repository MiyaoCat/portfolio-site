<form data-vue='bmiCalc'>
	
	<p class="instructions normal-voice" v-html='instructions'></p>

	
	
	<div class="height">
		<p class="normal-voice">How tall are you?</p>

		<label for="feet">Feet</label>
		<input name ="feet" type="number" step="" min="0" v-model="feet">	
		
		<label for="inches">Inches</label>
		<input name ="inches" type="number" min="0" max="11" v-model="inches">	
	</div>
	
	<div class='weight'>
		<p class="normal-voice">How much do you weigh?</p>

		<div class="scale">
			<p class='normal-voice'>1 LB</p>
			<input type="range" min="1" max='400' step='1' tooltip='weight' class='slider' id='weight' value='' v-model='weight'>
			<p class='normal-voice'>400 LBs</p>
		</div>

		<p class="normal-voice">{{weight}} lbs</p>
	</div>

	
	 
	<!-- <button @click=messageHandler()>Convert</button> -->

</form>

<div class='return'>
	<a href='?page=v-exercises' class='alert-voice'>Back</a>
</div>

<output data-vue="outputBmiCalc" v-if="outputMessage">
	{{outputMessage}} 
</output>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-bmi-calculator/script.js"></script>