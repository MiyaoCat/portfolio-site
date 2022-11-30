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
	$total = 0;
	$order = 0;
	$tax = 0;
	$message = "";
	$orderMessage = "";
	$submitted = isset($_POST["submitted"]);

	if ( $submitted ) {
		$order = $_POST["order-amount"];
		$state = $_POST["state-selected"];

		if ($state == "CA") {
			$tax = .0725;
		};

		if ($state == "FL") {
			$tax = .06;
		};

		if ($state == "HI") {
			$tax = .04;
		};

		if ($state == "NY") {
			$tax = .04;
		};

		if ($state == "OR") {
			$tax = 0;
		};

		if ($state == "WA") {
			$tax = .065;
		};

		if ($state == "WI") {
			$tax = .05;
		};

		if ($state == "WY") {
			$tax = .04;
		} 
	} 
	
	$total = number_format($order * (1 + $tax), 2);

	if ($submitted) {
		if ($state == "") {
			$message = "<p class='calm-voice warning'>You didn't select a state!</p>";
		}
	}	

	if ($submitted) {
		if ($order <= 0) {
			$orderMessage = "<p class='calm-voice warning'>Either you're stealing or it's free</p>";
		}
	}
?>

<form method="POST">
	<p class="normal-voice">Enter the price of your item.</p>	
	<input 
		type="number"
		name="order-amount"
		value = "<?=$order?>"
		step=".01"
		placeholder="Enter a number"
	>
	<?php if($orderMessage) { ?>
		<error>
			<p class="error calm-voice"><?=$orderMessage?></p>
		</error>
	<?php } ?>

	<label for="state-selected" class="normal-voice">Please select a state:</label>

	<select name="state-selected" id="state">
		<option value="">--Select a State--</option>

		<option value="CA">CA</option>
		<option value="FL">FL</option>
		<option value="HI">HI</option>
		<option value="NY">NY</option>
		<option value="OR">OR</option>
		<option value="WA">WA</option>
		<option value="WI">WI</option>
		<option value="WY">WY</option>
	</select>

	
		<error>
			<?php if($message) { ?>
			<p class="error calm-voice"><?=$message?></p>
			<?php } ?>
		</error>
	

	<button type="submit" name="submitted">Submit</button>
</form>

<?php  
	if ( $submitted ) {

		if ($order > 0) {
		if ($state !== "") {
?>
	<output>
		<p class="normal-voice"><?=$state?> has a tax rate of <?=100*$tax?>%</p>
		<p class="normal-voice">Your tax amount is: $<?=$total - $order?></p>
		<p class="normal-voice">Your grand total is: $<?=$total?> </p>
	</output>
	<?php } ?>
	<?php } ?>
<?php } ?>