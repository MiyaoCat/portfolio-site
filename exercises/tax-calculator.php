<?php  


$stateMessage = "";

// GOALS: Calculate tax based on state and county

// USER input
// price (the value of item) = number
// state (the chosen state)

// CALCULATED in the program
// taxRate (based on state choice) = number
// total (calculated total) = number

// state data
$json = file_get_contents("data/exercises/tax-calculator.json");
$statesData = json_decode($json, true);

$stateMessage = "";
$selectedStateAbbr = null;
$selectedState = null;
$stateTax = null;
$countySelected = null;
$countyTax = null;

$itemPrice = null;

$state = null;
// USER INPUT 
$submitted = isset($_POST["submitted"]);

if ($submitted) {

	if ( isset($_POST["state-selected"]) ) { 
		$selectedStateAbbr = $_POST["state-selected"]; 

		foreach($statesData as $state) {
			if ($selectedStateAbbr == $state["abbr"]) {
				$selectedState = $state;
				$stateTax = $selectedState["tax"];
			}
		}
	}

	if ( isset($_POST["county-selected"]) ) { 
		$countySelected = $_POST["county-selected"];
	}

	$itemPrice = $_POST["order-amount"];
}	

// DATA
function findStateTaxData($statesData, $stateId) {
	foreach ($statesData as $state) {
		if ($stateId == $state["abbr"]) {
			return $state;
		}
	}
}

$stateData = findStateTaxData($statesData, $selectedStateAbbr);

function isSelected($chosen, $current) {
	if ($chosen == $current) {
		return "selected";
	}
}

function taxTotal($item, $stateTax, $countyTax) {
	return number_format($item * $stateTax / 100 + $item * $countyTax / 100, 2, '.', ',');
}

$taxAmount = taxTotal($itemPrice, $stateTax, $countyTax);

function grandTotal($item, $taxTotal) {
	return number_format($item + $taxTotal, 2, '.', ',');
}

// $totalTax = taxAmount($itemPrice, $, $countyTax);
?>

<form method="POST">
	<p class="normal-voice">Enter the price of your item.</p>	

	<input 
		type="number"
		name="order-amount"
		value="10"
		step=".01"
		placeholder="Enter a number"
		autocomplete="off"
	>

	<p class="warning calm-voice"></p>


	<label for="state-selected" class="normal-voice">Please select a state:</label>

	<select name="state-selected" id="state">
		<option value="">--Select a State--</option>

		<?php 
			foreach($statesData as $state) {
				$id = $state["abbr"];		
		?>
			<option value="<?=$id?>" <?=isSelected($selectedStateAbbr, $id)?>>	<?=$id?>
			</option>
		<?php } ?>

		<?php if($message) { ?>
			<p class="warning calm-voice"><?=$message?></p>
		<?php } ?>
	</select>


	<?php 
		if ($selectedStateAbbr) {
	?>
		<label for="county-selected" class="normal-voice">Please select a county:</label>

		<select name="county-selected" id="county">
			<option value="">--Select a County--</option>

			<?php  
				foreach($selectedState["counties"] as $county) {
					if ($countySelected == $county["name"]) {
						$countyTax = $county["tax"];
				}
			?>	
					<option value="<?=$county["name"]?>" <?=isSelected($countySelected, $county["name"])?>>

						<?=$county["name"]?>

					</option>
			<?php } ?>
		</select>

	<?php } ?>
	<p class="warning calm-voice"></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php 
	$taxAmount = taxTotal($itemPrice, $stateTax, $countyTax);

	if($submitted) { 
		if($_POST["state-selected"] != null && $_POST["order-amount"] != null) {
?>
	<output>
		<p class="normal-voice">You selected <?=$countySelected?> county in <?=$selectedState["state"]?>.</p>
		
		<p class="normal-voice">State sales tax rate: <?=$selectedState["tax"]?>%</p>

		<p class="normal-voice">County sales tax rate: <?=$countyTax?>% </p>
		
		<p class="normal-voice">Your subtotal is: $<?=$_POST["order-amount"]?>.</p>

		<p class="normal-voice">Your tax amount is: $<?=taxTotal($_POST["order-amount"], $selectedState["tax"],$countyTax )?></p>
		<p class="normal-voice">Your grand total is: $<?=grandTotal($_POST["order-amount"], $taxAmount)?></p>


	</output>
<?php } ?>

<?php } ?>





