<form class="self-checkout" method="POST">

	<div class="instructions">
		<p class="normal-voice">Let's see how much you'll owe if you purchase up to 4 items in the state of Washington.</p>
	</div>


	<div class="items-wrap">
		<div class="item one">
			<h3 class="attention-voice">Item 1</h3>
		 	
		 	<div class="item-wrap">
		 		<quantity>	
				 	<p class="calm-voice">Quantity</p>
					<input 
						type="number" 
						name="quantity" 
						value=""
						min="0"
						placeholder="0"
						label="write your number"
					>
		
					<p class="calm-voice warning"></p>		
						
				</quantity>		
		
				<price>
					<p class="calm-voice">Price</p>	
					<input 
						type="number" 
						name="price" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00">

					<p class="calm-voice warning"></p>

				</price>
		 	</div>
		</div>
		
		<div class="item two">
			<h3 class="attention-voice">Item 2</h3>
		
		 	<div class="item-wrap">
		 		<quantity>	
				 	<p class="calm-voice">Quantity</p>
					<input 
						type="number" 
						name="quantity2" 
						value=""
						min="0"
						placeholder="0"
						label="write your number">

					<p class="calm-voice warning"></p>
						
				</quantity>		
		
				<price>
					<p class="calm-voice">Price</p>	
					<input 
						type="number" 
						name="price2" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00">
		
					<p class="calm-voice warning"></p>
						
				</price>
		 	</div>
		
		</div>
		
		<div class="item three">
			<h3 class="attention-voice">Item 3</h3>
		
		 	<div class="item-wrap">
		 		<quantity>	
				 	<p class="calm-voice">Quantity</p>
					<input 
						type="number" 
						name="quantity3" 
						value=""
						min="0"
						placeholder="0"
						label="write your number">

						<p class="calm-voice warning"></p>
						
				</quantity>		
		
				<price>
					<p class="calm-voice">Price</p>	
					<input 
						type="number" 
						name="price3" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00">		
					
					<p class="calm-voice warning"></p>						
				</price>
		 	</div>
		</div>
		
		<div class="item four">
			<h3 class="attention-voice">Item 4</h3>
			
			<div class="item-wrap">	
				<quantity>	
				 	<p class="calm-voice">Quantity</p>
					<input 
						type="number" 
						name="quantity4" 
						value=""
						min="0"
						placeholder="0"
						label="write your number">
									
					<p class="calm-voice warning"></p>						
				</quantity>		
				
				<price>
					<p class="calm-voice">Price</p>	
					<input 
						type="number" 
						name="price4" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00">				
					
					<p class="calm-voice warning"></p>					
				</price>
			</div>
		</div>
	</div>

	<tax>
		<p class="normal-voice">The Washington State sales tax rate is <span id='taxRate'></span>%.</p>
	</tax>

	<button type="submit" name="submitted">Submit</button>

</form>

<output>
	<sub-total>
		<p class="normal-voice">Your Sub-total is: <b>$</b></p>		
	</sub-total>

	<tax-total>
		<p class="normal-voice">You total tax amount is: <b></b></p>
	</tax-total>

	<grand-total>
		<p class="normal-voice">Your grand total is: <b></b></p>	
	</grand-total>
</output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
var $selfCheckout = document.querySelector("form");

var $quantity1 = document.querySelector("[name='quantity']");
var $price1 = document.querySelector("[name='price']");

var $quantity2 = document.querySelector("[name='quantity2']");
var $price2 = document.querySelector("[name='price2']");

var $quantity3 = document.querySelector("[name='quantity3']");
var $price3 = document.querySelector("[name='price3']");

var $quantity4 = document.querySelector("[name='quantity4']");
var $price4 = document.querySelector("[name='price4']");

let $output = document.querySelector('.js-exercise output');
$output.hidden = true;

const taxRate = .1025;
const taxPretty = .1025*100;
document.getElementById('taxRate').textContent = taxPretty;

$selfCheckout.addEventListener('submit', function(myEvent) {
	myEvent.preventDefault();
	$output.hidden = false;
	console.log("button pushed");

	let quantity1 = $quantity1.value;
	let price1 = $price1.value;

	let quantity2 = $quantity2.value;
	let price2 = $price2.value;

	let quantity3 = $quantity3.value;
	let price3 = $price3.value;

	let quantity4 = $quantity4.value;
	let price4 = $price4.value;

	let subTotal = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3) + (quantity4 * price4);
	const subTotalFormatted = subTotal.toLocaleString('en-US');

	const taxRate = .1025;
	document.getElementById('taxRate').textContent = taxRate;

	const taxTotal = (subTotal * taxRate).toFixed(2).toLocaleString('en-US');
	const taxTotalFormatted = taxTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	const grandTotal = parseFloat(subTotal) + parseFloat(taxTotal);
	const grandTotalFormatted = grandTotal.toLocaleString('en-US');

	$output.innerHTML = 
		`<p class="normal-voice">Sub-total: $${subTotalFormatted}</p> 
		 <p class="normal-voice">Tax total: $${taxTotalFormatted}</p> 
		 <p class="normal-voice">Grand total: $${grandTotalFormatted}</p> 
		`;
});
</script>