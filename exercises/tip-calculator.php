<?php
//initialize & check if form submitted

$subTotal = 0;
$total = 0;
$tip = "";
$tipTotal = 0;
$grandTotal = "";
$tipPercent = 0;

$submittedPOST = isset($_POST["submitted"]);

if ($submittedPOST) {

	// Get the order amount and the state from the form below
	$subTotal = round($_POST["subtotal"], 2);
	
	//get the tip percentage
	if ( isset($_POST["tip"]) ) {
		$tip = $_POST["tip"];

		if ($tip == 0.10) {
			$tipPercent = 1.1;
		}

		if ($tip == 0.15) {
			$tipPercent = 1.15;
		}

		if ($tip == .20) {
			$tipPercent = 1.20;
		}
	} 

	if ( !isset($_POST["tip"]) ) {
		// $tipPercent = 1;
		$message = "<p class='calm-voice warning'>No tip? Service was that bad?</p>";
	}

	$grandTotal = number_format($subTotal * $tipPercent, 2);
	$tipAmount = number_format($subTotal*$tipPercent - $subTotal, 2);

}	



?>

<form method="POST">
	<div class="instructions">
		<p class="normal-voice">Let us know the amount of your order and the tip percentage you'd like to leave. We'll provide the grand total.</p>
	</div>

	<div class="input-one">
		<label for="subtotal">What is the order amount?</label>
		<input type="number" name="subtotal" value="<?=$subTotal?>" step="0.01" min=0 required>
	</div>
	
	<div class="tip-select">
		<p class="normal-voice">How much would you like to tip?</p>
		<div class="ten">
			<label for="ten-percent">10 Percent</label>
			<input type="radio" name="tip" class="percent" value=0.10>
		</div>

		<div class="fifteen">
			<label for="fifteen-percent">15 Percent</label>
			<input type="radio" name="tip" class="percent" value=0.15>
		</div>

		<div class="twenty">
			<label for="twenty-percent">20 Percent</label>
			<input type="radio" name="tip" class="percent" value=.20>
		</div>

		<?php 
		if ( isset($_POST["submitted"]) ) {
			if ( !isset($_POST["tip"]) ) { 
				$message = "<p class='calm-voice warning'>No tip? Service was that bad?</p>";
		?>
				<p class="calm-voice warning"><?=$message?></p>
			<?php } ?>		
		<?php } ?>	

	</div>
	
	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<?php if ($submittedPOST) { ?>

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
					<p><b>$<?=$grandTotal?></b></p>
				</td>
			</tr>
		</table>
	</output>

<?php } ?>
