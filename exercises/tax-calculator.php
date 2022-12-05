<?php  
$json = file_get_contents("data/exercises/tax-calculator.json");
$taxData = json_decode($json, true);

$submitted = isset($_POST["submitted"]);
$stateSelected = "";
$order = "";
$orderMessage = "";
$message = "";
// $tax = 0;


if($submitted) {
	$order = $_POST["order-amount"];

	foreach($taxData as $states) {
		$state = $states["state"];

		
	
		if ($_POST["state-selected"] == $state) {
			$tax = $states["tax"] / 100;
		}
	}

	$total = number_format($order * (1 + $tax), 2);
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
		<option value="OR">OR</option>
		<option value="WA">WA</option>
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
		if ($_POST["state-selected"] !== "") {
?>
	<output>
		<p class="normal-voice"><?=$_POST["state-selected"]?> has a tax rate of <?=100*$tax?>%</p>
		<p class="normal-voice">Your tax amount is: $<?=$total - $order?></p>
		<p class="normal-voice">Your grand total is: $<?=$total?> </p>
	</output>
	<?php } ?>
	<?php } ?>
<?php } ?>