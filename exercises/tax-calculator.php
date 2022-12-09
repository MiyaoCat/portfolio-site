<?php  
$json = file_get_contents("data/exercises/tax-calculator.json");
$taxData = json_decode($json, true);

$submitted = isset($_POST["submitted"]);
$stateSelected = "";
$order = 10;
$orderMessage = "";
$message = "";
$tax = 0;
var_dump($_POST);

function total($taxData, $choice) {
	if( isset($choice["submitted"]) ) {
		$order = isset($choice["order-amount"]);
		$stateSelected = $choice["state-selected"];

		foreach($taxData as $state) {
			$id = $state["id"];
		
			if ($stateSelected == $id) {
				$tax = $state["tax"] / 100;
			}
		}

		return number_format($order * (1 + $tax), 2);
	}
}

echo total($taxData, $_POST);

if ($submitted) {
	if ( isset($_POST["state-selected"]) ) { 
		$stateSelected = $_POST["state-selected"];
	}
	if ($stateSelected == "") {
		$message = "<p class='calm-voice warning'>You didn't select a state!</p>";
	}
}	

if ($submitted) {
	if ($_POST["order-amount"] <= 0) {
		$orderMessage = "<p class='calm-voice warning'>Either you're stealing or it's free</p>";
	}
}

function isSelected($chosen, $current) {
	if ($chosen == $current) {
		return "selected";
	}
}



?>

<h3 class="attention-voice"><a href="#">Reset</a></h3>
<form method="POST">
	<p class="normal-voice">Enter the price of your item.</p>	
	<input 
		type="number"
		name="order-amount"
		value="<?=$order?>"
		step=".01"
		placeholder="Enter a number"
		autocomplete="off"
	>
	<?php if($orderMessage) { ?>
		<error>
			<p class="error calm-voice"><?=$orderMessage?></p>
		</error>
	<?php } ?>

	<label for="state-selected" class="normal-voice">Please select a state:</label>

	<select name="state-selected" id="state">
		<option value="">--Select a State--</option>

		<?php 
			foreach($taxData as $state) {
				$id = $state["id"];		
		?>
			<option value="<?=$id?>" <?=isSelected($stateSelected, $id)?>><?=$id?>
				
			</option>
		<?php } ?>
	</select>

		
		<error>
			<?php if($message) { ?>
			<p class="error calm-voice"><?=$message?></p>
			<?php } ?>
		</error>
	

	<button type="submit" name="submitted">Submit</button>
</form>

	<output>
		<p class="normal-voice"><?=$_POST["state-selected"]?> has a tax rate of <?=$tax?>%</p>
		<p class="normal-voice">Your tax amount is: $<?=total($taxData, $_POST)?></p>
		<p class="normal-voice">Your grand total is: $<?=total($taxData, $_POST) + $order?> </p>
	</output>








