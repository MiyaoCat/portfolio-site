<?php  
function isSelected($chosen, $current) {
	if ($chosen == $current) {
		return "selected";
	}
}

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

// USER INPUT 
$submitted = isset($_POST["submitted"]);
var_dump($_POST);

if ($submitted) {


	if ( isset($_POST["state-selected"]) ) { 

		//variable to reuse state user selected
		$stateSelected = $_POST["state-selected"];
	}

	if ($stateSelected == "") {
			$StateMessage = "<p class='calm-voice warning'>You didn't select a state!</p>";
	}

	if ( isset($_POST["county-selected"]) ) { 

		//variable to resuse county user selected
		$countySelected = $_POST["county-selected"];

		if ($countySelected == "") {
			$countyMessage = "<p class='calm-voice warning'>You didn't select a state!</p>";
		}
	}
}	

// DATA
function findStateTaxData($statesData, $stateId) {
	foreach ($statesData as $state) {
		if ($stateId == $state["abbr"]) {
			return $state;
		}
	}
}

?>

<h3 class="attention-voice"><a href="#">Reset</a></h3>
<form method="POST">
	<p class="normal-voice">Enter the price of your item.</p>	
	<input 
		type="number"
		name="order-amount"
		value=""
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
			<option value="<?=$id?>" <?=isSelected($stateSelected, $id)?>><?=$id?>
				
			</option>
		<?php } ?>

		<?php if($stateMessage) { ?>
			<p class="warning calm-voice"><?=$stateMessage?></p>
		<?php } ?>
	</select>

	<label for="county-selected" class="normal-voice">Please select a county:</label>

	<select name="county-selected" id="county">
		<option value="">--Select a State--</option>

		<?php 
			foreach($statesData as $state) {
				$county = $state["counties"];

				
					// foreach($county as $county) {
		?>
			<option value="<?=$county?>" <?=isSelected($countySelected, $id)?>><?=$id?>
				
			</option>
					
			<?php } ?>
	</select>
		
	<p class="warning calm-voice"></p>
	

	<button type="submit" name="submitted">Submit</button>
</form>

	<output>
		<p class="normal-voice"><?=$_POST["state-selected"]?> has a tax rate of <?=$tax?>%</p>
		<p class="normal-voice">Your tax amount is: $<?=total($taxData, $_POST)?></p>
		<p class="normal-voice">Your grand total is: $<?=total($taxData, $_POST) + $order?> </p>
	</output>








