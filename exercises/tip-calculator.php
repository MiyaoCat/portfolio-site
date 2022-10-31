<?php
//initialize & check if form submitted

$subTotal = 0;
$total = 0;
$tip = "";
$tipTotal = 0;
$totalOutput = "";
$tipPercent = 0;

$submittedPOST = isset($_POST["submitted"]);

if ($submittedPOST) {

	// Get the order amount and the state from the form below
	$subTotal = round($_POST["subtotal"], 2);
	
	//get the tip percentage
	if ( isset($_POST["tip"]) ) {
		$tip = $_POST["tip"];

		if ($tip == "ten") {
			$tipPercent = 1.1;
		}

		if ($tip == "fifteen") {
			$tipPercent = 1.15;
		}

		if ($tip == "twenty") {
			$tipPercent = 1.20;
		}
	}
}

$totalOutput = $subTotal * $tipPercent;
$tipAmount = $totalOutput - $subTotal;

?>

<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Let us know the amount of your order and the tip percentage you'd like to leave. We'll provide the grand total.</p>
	</div>

	<div class="input-one">
		<label for="subtotal">What is the order amount?</label>
		<input type="number" name="subtotal" value="<?=$subTotal?>" min=0 required>
	</div>
	
	<div class="tip-select">
		<div class="ten">
			<label for="ten-percent">10 Percent</label>
			<input type="radio" name="tip" class="percent" value="ten">
		</div>

		<div class="fifteen">
			<label for="fifteen-percent">15 Percent</label>
			<input type="radio" name="tip" class="percent" value="fifteen">
		</div>

		<div class="twenty">
			<label for="twenty-percent">20 Percent</label>
			<input type="radio" name="tip" class="percent" value="twenty">
		</div>
	</div>

	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<?php if ($submittedPOST) {?>

	<output>
		<table>
			<tr>
				<td>
					<p class="normal-voice">Your subtotal is:</p>
				</td>
				<td><p><b>$<?=$subTotal?></b></p></td>
			</tr>

			<tr>
				<td>
					<p class="normal-voice">Your tip amount is:</p>
				</td>
				<td><p><b>$<?=$tipAmount?></b></p></td>
			</tr>
			<tr>
				<td>
					<p class="normal-voice">Your grand total is:</p>
				</td>
				<td>
					<p><b>$<?=$totalOutput?></b></p>
				</td>
			</tr>
		</table>
	</output>

<?php } ?>
