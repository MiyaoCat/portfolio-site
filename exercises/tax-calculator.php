<?php  
//test
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
	$totalWI = 0;
	$order = 0;

	if ( isset($_POST["submitted"]) ) {
		$order = $_POST["order-amount"];
		$state = $_POST["state-selected"];

		if ($state == "wi" OR "WI" OR "Wi" OR "iW" OR "Wisconsin" OR "wisconsin" OR "WISCONSIN") ;

// 		if ($state !== "wi" OR "WI" OR "Wi" OR "iW" OR "Wisconsin" OR "wisconsin" OR "WISCONSIN") {
// 			echo "<output> Your total is " . $order . "</output>";
// 		}
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

<?php  
	if ( isset($_POST["submitted"]) ) {
?>
	<output>
		<?=$totalWI?>
	</output>

<?php } ?>


