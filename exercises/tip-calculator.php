<?php



//initialize & check if form submitted
$subtotal = 0;
$state = "";
$tax = 0;
$taxOutput="";
$total = 0;
$totalOutput = "";

$submittedPOST = isset($_POST['submitted']);

if ($submittedPOST) {

// Get the order amount and the state from the form below)
$subtotal = round($_POST['subtotal'], 2);
$state = $_POST['state'];


//if the state is WI
if ($state == "WI") {
	// echo "<p>The subtotal is \$$subtotal.</p>";
	//add 5.5% tax
	$tax = number_format(.055 * $subtotal,2);
	// echo "<p>The tax is \$$tax.</p>";
	$taxOutput = "<p>The subtotal is \$" . number_format($subtotal,2) . ".</p> <p>The tax is \$" . number_format($tax,2) . ".</p>";
}

//display subtotal and tax

//for all states
	//show total

$total = $tax + $subtotal;
$totalOutput = "$taxOutput <p>The total is \$" . number_format($total, 2) . ".</p>";
}
?>





<form method="POST">
<h1 class="loud-voice">Exercise- Tax Calculator</h1>
<h2>Let us know the amount of your order, and what state you live in. We'll let you know the amount of state sales tax (WI only) and your grand total.</h2>
	<div class="field">
		<label for="">What is the order amount?</label>
		<input type="number" name="subtotal" value="<?=$subtotal?>" min=0 required>
	</div>
	
	<div class="field">
		<label for="">What is the state?</label>
		<input type="text" name="state" value="<?=$state?>"required>
	</div>

	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<output>
	<?=$totalOutput?>
</output>



<div class="array">
	<?php
	
		//array checker to monitor inputs
		function format($variable) {
			echo "<pre>";
				echo "<code>";
					print_r( $variable );
				echo "</code>";
			echo "</pre>";
		}
	
		format( $_POST );
	
	?>
</div>