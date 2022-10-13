<?php  

// What is the order amount? 10
// What is the state? WI
// The subtotal is $10.00.
// The tax is $0.55.
// The total is $10.55.

// Or

// What is the order amount? 10
// What is the state? MN
// The total is $10.00

// Prompt for the order amount 
// Prompt for the state
// If the sate is WI then the tax is 5.5.
// Output is order amount * tax + order amount

// If the state is NOT WI 
// Then only supply the order amount. 

	$state = "";
	$taxAmount = 0;
	$taxTotal = 0;
	$subTotal = 0;
	$taxOutput = 0;
	$totalWI = 0;
	$order = 0;

	if ( isset($_POST["submitted"]) ) {
		$order = $_POST["order-amount"];
		$state = $_POST["state-selected"];

		if ($state == "wi") {
			$totalWI = $order * 1.055;

			echo $totalWI;
		}

		if ($state !== "wi") {
			echo "Your total is " . $order;
		}
}

?>

<form method="POST">
	<input 
		type="number"
		name="order-amount"
		value = "<?=$order?>"
		step=".01"
		placeholder="Enter a number"

	>

	<input 
		type="text"
		name="state-selected"
		value="<?=$state?>"
		placeholder="Enter a state"

	>

	<button type="submit" name="submitted">Submit</button>
</form>

<output>

</output>




