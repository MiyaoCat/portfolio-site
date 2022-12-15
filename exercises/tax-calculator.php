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

		$itemPrice = $_POST["order-amount"];
	}

	
}	

function getState() {

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
	if ( !empty($_POST["order-amount"]) ) {
		if ($_POST["state-selected"] != null) {
			return number_format($item * $stateTax / 100 + $item * $countyTax / 100, 2, '.', ',');
		}
	}
}

$taxAmount = taxTotal($itemPrice, $stateTax, $countyTax);

function grandTotal($item, $taxTotal) {
	return number_format($item + $taxTotal, 2, '.', ',');
}

// $totalTax = taxAmount($itemPrice, $, $countyTax);

function errorMessageOrder() {
	if ( isset($_POST["order-amount"]) && ($_POST["order-amount"] == null) ) {
		return $message = "Please enter a number";
	}
}

function errorMessageState() {
	if ( isset($_POST["state-selected"]) && ($_POST["state-selected"] == null) ) {
		return $message = "Please select a state";
	}
}

function errorMessageCounty() {
	if ( isset($_POST["county-selected"]) && ($_POST["county-selected"] == null) ) {
		return $message = "Please select a county";
	}
}
?>


<form method="POST">
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
			<p class="warning calm-voice"><?php echo errorMessageState() ?></p>
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
		<p class="warning calm-voice"><?php echo errorMessageCounty() ?></p>

		<p class="normal-voice">Enter the price of your item.</p>	

		<input 
			type="number"
			name="order-amount"
			step=".01"
			autocomplete="off"
		>

		<p class="warning calm-voice"><?php echo errorMessageOrder() ?></p>
	<?php } ?>
	<p class="warning calm-voice"><?php echo errorMessageState() ?></p>

	<button type="submit" name="submitted">Submit</button>
</form>

<?php 
	$taxAmount = taxTotal($itemPrice, $stateTax, $countyTax);

	if ( isset($_POST["order-amount"]) && isset($_POST["state-selected"]) && isset($_POST["county-selected"]) ) { 

		if ($_POST["order-amount"] != null && $_POST["state-selected"] != null) {
			if ($_POST["county-selected"] != null) {
?>
	<output>
		<p class="normal-voice">You selected <?=$countySelected?> county in <?=$selectedState["state"]?>.</p>
		
		<p class="normal-voice">State sales tax rate: <?=$selectedState["tax"]?>%</p>

		<p class="normal-voice">County sales tax rate: <?=$countyTax?>% </p>
		
		<p class="normal-voice">Your subtotal is: $<?=$_POST["order-amount"]?>.</p>

		<p class="normal-voice">Your total tax amount is: $<?=taxTotal($_POST["order-amount"], $selectedState["tax"],$countyTax )?></p>
		<p class="normal-voice">Your grand total is: $<?=grandTotal($_POST["order-amount"], $taxAmount)?></p>


	</output>
			<?php } ?>
		<?php } ?>
<?php } ?>





