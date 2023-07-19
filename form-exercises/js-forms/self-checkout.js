<form class="self-checkout" method="POST">

	<div class="instructions">
		<p class="normal-voice">Let's see how much you'll owe if you purchase up to 4 items in the state of Washington.</p>
	</div>


	<div class="items-wrap">
		<div class="item one">
		 	<div class="item-wrap">
		 		<h3 class="attention-voice">Item 1</h3>

		 		<quantity>	
				 	<label for="quantity">Quantity</label>
					<input 
						type="number" 
						id="quantity" 
						value=""
						min="0"
						placeholder="0"
						label="write your number"
					>	
					<p class="calm-voice warning"></p>								
				</quantity>		
		
				<price>
					<label for="price">Price</label>
					<input 
						type="number" 
						id="price" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00"
					>
					<p class="calm-voice warning"></p>
				</price>
		 	</div>
		</div>
		
		<div class="item two">
		 	<div class="item-wrap">
		 		<h3 class="attention-voice">Item 2</h3>

		 		<quantity>	
				 	<label for="price">Quantity</label>
					<input 
						type="number" 
						id="quantity2" 
						value=""
						min="0"
						placeholder="0"
					>						
				</quantity>		
		
				<price>
					<label for="price2">Price</label>
					<input 
						type="number" 
						id="price2" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00"
					>				
				</price>
		 	</div>
		</div>
		
		<div class="item three">		
		 	<div class="item-wrap">
		 		<h3 class="attention-voice">Item 3</h3>

		 		<quantity>	
				 	<label for="quantity3">Quantity</label>
					<input 
						type="number" 
						id="quantity3" 
						value=""
						min="0"
						placeholder="0"
						label="write your number"
					>
				</quantity>		
		
				<price>
					<label for="price3">Price</label>
					<input 
						type="number" 
						id="price3" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00"
					>								
				</price>
		 	</div>
		</div>
		
		<div class="item four">						
			<div class="item-wrap">	
				<h3 class="attention-voice">Item 4</h3>
				
				<quantity>	
				 	<label for="quantity4">Quantity</label>
					<input 
						type="number" 
						id="quantity4" 
						value=""
						min="0"
						placeholder="0"
						label="write your number"
					>															
				</quantity>		
				
				<price>
					<label for="price4">Price</label>
					<input 
						type="number" 
						id="price4" 
						value=""
						step= '0.01'
						min='0'
						placeholder="0.00"
					>														
				</price>
			</div>
		</div>

		<button type="reset" class="clearAll">Clear All</button>
	</div>

	<tax>
		<p class="normal-voice">The Washington State sales tax rate is <span id='taxRate'></span>%.</p>
	</tax>

	<button type="submit" name="submitted">Submit</button>

</form>

<output></output>

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
	const $selfCheckout = document.querySelector("[class='self-checkout']");

	const $quantity1 = document.querySelector("[id='quantity']");
	const $price1 = document.querySelector("[id='price']");

	const $quantity2 = document.querySelector("[id='quantity2']");
	const $price2 = document.querySelector("[id='price2']");

	const $quantity3 = document.querySelector("[id='quantity3']");
	const $price3 = document.querySelector("[id='price3']");

	const $quantity4 = document.querySelector("[id='quantity4']");
	const $price4 = document.querySelector("[id='price4']");

	const $output = document.querySelector('.js-exercise output');
	$output.hidden = true;

	const taxRate = .1025;
	const taxPretty = taxRate*100;
	document.getElementById('taxRate').textContent = taxPretty;

	$selfCheckout.addEventListener('submit', function(myEvent) {
		myEvent.preventDefault();
		$output.hidden = false;

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

		const taxTotal = (subTotal * taxRate).toFixed(2).toLocaleString('en-US');
		const taxTotalFormatted = taxTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		const grandTotal = parseFloat(subTotal) + parseFloat(taxTotal);
		const grandTotalFormatted = grandTotal.toLocaleString('en-US');

		$output.innerHTML = 
			`<p class="normal-voice">Sub-total: <span class="special">$${subTotalFormatted}</span></p> 
			 <p class="normal-voice">Tax total: <span class="special">$${taxTotalFormatted}</span></p> 
			 <p class="normal-voice">Grand total: <span class="special">$${grandTotalFormatted}</span></p> 
			`;

		if((quantity1 == "" || quantity1 == 0) || (price1 == "" || price1 == 0)) {
			if((quantity2 == "" || quantity2 == 0) || (price2 == "" || price2 == 0)) {
				if((quantity3 == "" || quantity3 == 0) || (price3 == "" || price3 == 0)){
					if ((quantity4 == "" || quantity4 == 0) || (price4 == "" || price4 == 0)) {
						$output.innerHTML = `<p class="normal-voice">Nothing of nothing is...well...nothing.</p>`
					}
				}
			}			
		}

		// let allBlankOrZero = true;
		// const sets = [
		//   { quantity: quantity1, price: price1 },
		//   { quantity: quantity2, price: price2 },
		//   { quantity: quantity3, price: price3 },
		//   { quantity: quantity4, price: price4 }
		// ];

		// for (const set of sets) {
		//   if (set.quantity !== "" || set.quantity != 0) {
		//     allBlankOrZero = false;
		//     break;
		//   }
		//   if (set.price !== "" || set.price != 0) {
		//     allBlankOrZero = false;
		//     break;
		//   }
		// }

		// if (allBlankOrZero) {
		//   $output.innerHTML = `<p class="normal-voice">Nothing of nothing is...well...nothing.</p>`;
		// }
	
	});
</script>