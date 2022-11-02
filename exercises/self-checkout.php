<?php 
//prompt for the prices and quatities of 3 items
	$quantity = ""; //number provided by user
	$price = ""; //number provided by user

	$quantity2 = ""; 
	$price2 = "";

	$quantity3 = ""; 
	$price3 = "";
	
	$quantity4 = ""; 
	$price4 = "";

	$taxRate = .1025; //tax rate 10.25% = .1025
	$total = "";

	$subTotal = "";
	$grandTotal = "";
	
	$valueError = "";
	$valueError2 = "";
	$valueError3 = "";
	$valueError4 = "";

	$priceValueError = "";
	$priceValueError2 = "";
	$priceValueError3 = "";
	$priceValueError4 = "";
//calculate the subtotal of the items

//calculate the tax with tax rate of 10.25

//get the quantity and price posted by the user

if ( isset($_POST['submitted']) ) {	

	if ( isset($_POST['quantity']) ) {
		$quantity = $_POST['quantity'];
		
		if ( empty($quantity) ) {
			$quantity = 0;
		}
		
		if ($quantity > 0 ) {
			$hasQuantity = true;
		} else {
			$valueError = "<p class='calm-voice warning'>If you don't buy anything, you don't owe anything. Enter a quantity!</p>";
		}
	}

	if ( isset($_POST['price']) ) {
		$price = $_POST['price'];

		if ( empty($price) ) {
			$price = 0;
		}

		if ($price > 0) {
			$hasPrice = true;
		} else {
			$priceValueError = "<p class='calm-voice warning'>If it doesn't have a price, then it's free!</p>";
		}
		
	}

	if ( isset($_POST['quantity2']) ) {
		$quantity2 = $_POST['quantity2'];
		

		if ( empty($quantity2) ) {
			$quantity2 = 0;
		}

		if ($quantity2 > 0 ) {
			$hasQuantity2 = true;
		} else {
			$valueError2 = "<p class='calm-voice warning'>If you don't buy anything, you don't owe anything. Enter a quantity!</p>";
		}
	}

	if ( isset($_POST['price2']) ) {
		$price2 = $_POST['price2'];


		if ( empty($price2) ) {
			$price2 = 0;
		}

		if ($price2 > 0) {
			$hasPrice2 = true;
		} else {
			$priceValueError2 = "<p class='calm-voice warning'>If it doesn't have a price, then it's free!</p>";
		}					
	}

	if ( isset($_POST['quantity3']) ) {
		$quantity3 = $_POST['quantity3'];
		

		if ( empty($quantity3) ) {
			$quantity3 = 0;
		}

		if ($quantity3 > 0 ) {
			$hasquantity3 = true;
		} else {
			$valueError3 = "<p class='calm-voice warning'>If you don't buy anything, you don't owe anything. Enter a quantity!</p>";
		}
	}

	if ( isset($_POST['price3']) ) {
		$price3 = $_POST['price3'];

		if ( empty($price3) ) {
			$price3 = 0;
		}

		if ($price3 > 0) {
			$hasprice3 = true;
		} else {
			$priceValueError3 = "<p class='calm-voice warning'>If it doesn't have a price, then it's free!</p>";
		}	
	}

	if ( isset($_POST['quantity4']) ) {
		$quantity4 = $_POST['quantity4'];
		

		if ( empty($quantity4) ) {
			$quantity4 = 0;
		}

		if ($quantity4 > 0 ) {
			$hasquantity4 = true;
		} else {
			$valueError4 = "<p class='calm-voice warning'>If you don't buy anything, you don't owe anything. Enter a quantity!</p>";
		}
	}

	if ( isset($_POST['price4']) ) {
		$price4 = $_POST['price4'];

		if ( empty($price4) ) {
			$price4 = 0;
		}

		if ($price4 > 0) {
			$hasprice4 = true;
		} else {
			$priceValueError4 = "<p class='calm-voice warning'>If it doesn't have a price, then it's free!</p>";
		}
	}
		
	//subtotal (add all quantities)
	$subTotal = ($quantity * $price) + ($quantity2 * $price2) + ($quantity3 * $price3) + ($quantity4 * $price4);

	//tax (subtotal * rate)
	$tax = $subTotal * $taxRate;

	//total (subtotal + tax)
	$total = $subTotal + $tax;

	//formatted tax total
	$tax = number_format($subTotal * $taxRate, 2);

	//formatted subtotal
	$formattedSubTotal = number_format($subTotal, 2);

	//formatted tax
	$formattedTax = ($taxRate * 100);

	//grand total
	$grandTotal= number_format($subTotal + $tax, 2);
}	
?>

<div class="instructions">
	<p class="normal-voice">Let's see how much you'll owe if you purchase up to 4 items in the state of Washington.</p>
</div>
			
<form class="self-checkout" method="POST">
	<div class="item one">
		<h3 class="attention-voice">Item 1</h3>
	 	
	 	<div class="item-wrap">
	 		<quantity>	
			 	<p class="calm-voice">Quantity</p>
				<input 
					type="number" 
					name="quantity" 
					value="<?=$quantity?>"
					min="0"
					placeholder="0"
					label="write your number"
				>
	
				<?php if($valueError) {?>
					<error>
						<p class="error calm-voice"><?=$valueError?></p>
					</error>
				<?php } ?>	
			</quantity>		
	
			<price>
				<p class="calm-voice">Price</p>	
				<input 
					type="number" 
					name="price" 
					value="<?=$price?>"
					step= '0.01'
					min='0'
					placeholder="0.00">
	
				<?php if($priceValueError) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$priceValueError?></p> -->
				</error>
				<?php } ?>	
	
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
					value="<?=$quantity2?>"
					min="0"
					placeholder="0"
					label="write your number">
	
				<?php if($valueError2) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$valueError2?></p> -->
				</error>
				<?php } ?>	
			</quantity>		
	
			<price>
				<p class="calm-voice">Price</p>	
				<input 
					type="number" 
					name="price2" 
					value="<?=$price2?>"
					step= '0.01'
					min='0'
					placeholder="0.00">
	
				<?php if($priceValueError2) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$priceValueError2?></p> -->
				</error>
				<?php } ?>	
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
					value="<?=$quantity3?>"
					min="0"
					placeholder="0"
					label="write your number">
	
				<?php if($valueError3) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$valueError3?></p> -->
				</error>
				<?php } ?>	
			</quantity>		
	
			<price>
				<p class="calm-voice">Price</p>	
				<input 
					type="number" 
					name="price3" 
					value="<?=$price3?>"
					step= '0.01'
					min='0'
					placeholder="0.00">
	
				<?php if($priceValueError3) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$priceValueError3?></p> -->
				</error>
				<?php } ?>	
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
					value="<?=$quantity4?>"
					min="0"
					placeholder="0"
					label="write your number">
			
				<?php if($valueError4) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$valueError4?></p> -->
				</error>
				<?php } ?>	
			</quantity>		
			
			<price>
				<p class="calm-voice">Price</p>	
				<input 
					type="number" 
					name="price4" 
					value="<?=$price4?>"
					step= '0.01'
					min='0'
					placeholder="0.00">
			
				<?php if($priceValueError4) {?>
				<error>
					<!-- <p class="error calm-voice"><?=$priceValueError4?></p> -->
				</error>
				<?php } ?>	
			</price>
		</div>
	</div>

	<?php 
		$formattedTax = $taxRate * 100;
		$formattedGrandTotal = 0;
	 ?>

	<tax>
		<p class="normal-voice">The Washington State sales tax rate is <?=$formattedTax?>%						
		</p>
	</tax>

	<button type="submit" name="submitted">Submit</button>

</form>

<?php if ( isset($_POST['submitted']) ) { ?>
<output>
	<sub-total>
		<?php if($subTotal){ ?>
			<p class="calm-voice">Your Sub-total is: <b>$<?=$formattedSubTotal?></b></p>
		<?php } ?>
	</sub-total>

	<?php if( isset($_POST['submitted']) ) { ?>
		<tax-total>
			<p class="calm-voice">You total tax amount is: <b>$<?=$tax?></b></p>
		</tax-total>
	<?php } ?>	

	<grand-total>
		<?php if($grandTotal > 0){ ?>
			<p class="calm-voice">Your grand total is: <b>$<?=$grandTotal?></b></p>
		<?php } ?>
	</grand-total>
</output>
<?php } ?>
