<form data-vue='selfCheckout'>

	<p class="instructions">{{instructions}}</p>

<div class="checkout">
	<div class="item" style="display:flex; flex-direction:column">
		<h2>{{header1}}</h2>
		<label for="price1">What is the price of item 1?</label>
		<input type="number" min="0" name="price1" v-model='price1'>

		<label for="quantity1">Enter the quantity of item 1?</label>
		<input type="number" min="0" name="quantity1" v-model='quantity1'>
	</div>
	
	<div class="item" style="display:flex; flex-direction:column">
		<h2>{{header2}}</h2>
		<label for="price2">What is the price of item 2?</label>
		<input type="number" min="0" name="price2" v-model='price2'>

		<label for="quantity2">Enter the quantity of item 2?</label>
		<input type="number" min="0" name="quantity2" v-model='quantity2'>
	</div>
	
<!-- 	<div class="item">	
		<h2>{{header3}}</h2>
		<label for="price3">What is the price of item 3?</label>
		<input type="number" min="0" name="price3" v-model='price3'>

		<label for="quantity3">Enter the quantity of item 3?</label>
		<input type="number" min="0" name="quantity3" v-model='quantity3'>	
	</div>
		
	<div class="item">
		<h2>{{header4}}</h2>
		<label for="price4">What is the price of item 4?</label>
		<input type="number" min="0" name="price4" v-model='price4'>

		<label for="quantity4">Enter the quantity of item 4?</label>
		<input type="number" min="0" name="quantity4" v-model='quantity4'>
	</div> -->
</div>
	
	<!-- <button @click='messageHandler()'>Enter</button> -->
	
</form>

<output data-vue="outputSelfCheckout" v-if="outputMessage">{{outputMessage}} </output>

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.8/vue.min.js'></script>
<script src="form-exercises/vue-forms/v-self-checkout/script.js"></script>
