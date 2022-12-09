<?php  
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

<?php  
	$tax = $state["tax"];
	if ( $submitted ) {
		if ($order > 0) {
			if ($_POST["state-selected"] !== "") {
?>
	<output>
		<p class="normal-voice"><?=$_POST["state-selected"]?> has a tax rate of <?=$tax?>%</p>
		<p class="normal-voice">Your tax amount is: $<?=total($taxData, $_POST)?></p>
		<p class="normal-voice">Your grand total is: $<?=total($taxData, $_POST) + $order?> </p>
	</output>
		<?php } ?>
	<?php } ?>
<?php } ?>



<!-- -- -- -- -- -- HELLO FORM -- -- -- -- -- -- -- -- -->
<?php  

	$scarface = "./images/forms/scarface-puppy.jpg";
	$lionel = "./images/forms/lionel-richie.jpg";
	$adelle = "./images/forms/adelle.jpg";
	$sAndG = "./images/forms/simon-garfunkel.jpg";
	$jerryMaguire = "./images/forms/jerry-maguire.png";

	$images =[$scarface, $lionel, $adelle, $sAndG, $jerryMaguire ];
	$imagesRand = $images[rand(0,4)];

	$name = "";
	$message = "";
	
	function randomMessage($imageData, $inputName) {
		//Get the input name
		if ( isset($_POST["submitted"]) && isset($inputName) && !empty($inputName) ) {

			//Return a message and include a random image from the array
			return "Hi , " . $inputName . "! It's nice to meet you. Here is your random quote." . "<picture><img src='" . $imageData . "'></picture>";
	
		} 
	}
	
	//If the input is blank, send an error message
	function blankMessage($inputName) {
		if( empty($inputName) ) {
			return "You didn't enter anything!";
		}
	}
?>

<form method="POST">
	<h1 class='loud-voice'>Say Hello!</h1>
	
	<p class="normal-voice">Hey stranger, what's your name?</p>

	<input type="text" 
		name="name" 
		value="" 
		placeholder="Enter your government name"
	>
	<warning><?=blankMessage($_POST["name"])?></warning>

	<button type="submit" name="submitted">
		Submit
	</button>

</form>


<output>
	<?=randomMessage($imagesRand, $_POST["name"]);?>
</output>

<!-- -- -- -- -- -- COUNT CHARACTER -- -- -- -- -- -- -- -->
<form method="POST">
<h1 class="loud-voice">Character Count</h1>

 	
	<div class="instructions">
		<p class="regular-voice">Type in a string of text and I'll count how many characters you entered. </p>
	</div>

	<input 
		type="text" 
		name="string" 
		value="" 
		placeholder="Type whatever you want">

	<button type="submit" name="enter">Submit</button>
 </form>


 	
<output>
<?php 
	//setup. Establish variables
	$string = "";
	$length = "";
	$lengthWithSpaces = "";

	//If there's a form submission. Reassign values
	if ( isset($_POST["string"]) ) {
		 $string = $_POST["string"];

		 if ($string == "") {
		 	echo "<output> <p class='regular-voice'> Please type something in the text prompt. Otherwise, what's the point? You can't count to zero.</p></output>";
		 } else {
	//calculations
	$length = strlen($string) - substr_count($string, ' ');
	$lengthWithSpaces = strlen($string);
	$word = str_word_count($string, 0);

	//Return message
	$message = "You entered \"<span>$string</span>\". It is <span class='length'>$length</span> characters long without spaces";

 ?>

	<p class="regular-voice"><?=$message?></p><br>

	<p class="regular-voice">Or it's <?=$lengthWithSpaces?> characters WITH spaces.</p>
	<br>
	<p class="regular-voice">Or it's <?=$word?> word(s).</p>

		<?php } ?>	
<?php } ?>
</output>









/// BEFORE RETURN ARRAY OUTPUT

<?php
// GOALS: 	caculate tax
// 			based on state and possibly county

// USER input
// price (the value of the item/purchase) Number
// state (the chosen state) String

// CALCULATED in the program
// taxRate (based on choice) Number
// total (calculated total) Number

// States data
// include('states.php'); // $states = [];
$states = [
	[
		"id" => "WA",
		"name" => "Washington",
		"taxRate" => 0.07,
		"counties" => [
			[
				"name" => "one",
				"taxRate" => 0.05,
			],
			[
				"name" => "two",
				"taxRate" => 0.02,
			],
		],
	],
	[
		"id" => "CA",
		"name" => "California",
		"taxRate" => 0.11,
	],
	[
		"id" => "AZ",
		"name" => "Arizona",
		"taxRate" => 0.05,
	],
];

// example USER INPUT (like the temporary HTML forms)
$purchasePrice = 100;
$chosenState = "WA"; // like a form input...
	// weird user choice - (if has counties) (for example)
	$chosenCounty = "one";

// the data for the state the user chose
$chosenState = findStateTaxData($states, $chosenState);

// DATA
function findStateTaxData($statesData, $stateId) {
	foreach ($statesData as $state) {
		if ( $stateId == $state["id"] ) {
			return $state; // the whole chunk of data for that state
		}
	}
}

function hasCounties($state) {
	if ( isset($state["counties"]) ) {
		return true;
	}
}

// CALCULATIONS
function total($purchase, $state, $selectedCounty) {
	
	if ( hasCounties($state) ) {

		$countyData = null; // default - in case it doesn't find one

		foreach ( $state["counties"] as $county ) {
			if ( $county["name"] == $selectedCounty ) {
				$countyData = $county;
			}
		}	

		if ($countyData) {

			$stateTax = $purchase * $state["taxRate"];
			$countyTax = $purchase * $countyData["taxRate"];

			return $purchase + $stateTax + $countyTax;

		} else {
			// error -- no matching county found... 
		}

	} else {

		return $purchase + ($purchase * $state["taxRate"]);

	}
	
}

function tax($purchase, $state) {
	return $purchase * $state["taxRate"];
}

// cleaning up for output
$prettyTotal = "$" . total($purchasePrice, $chosenState, $chosenCounty);
$prettyTax = tax($purchasePrice, $chosenState);

// OUTPUT
echo "<ul>";
echo "<li>State: $chosenState[name]</li>";
if ( hasCounties($chosenState) ) {
	echo "<li>County: $chosenCounty</li>";
}

echo "<li>Purchase: $purchasePrice</li>";
echo "<li>Tax: $prettyTax</li>";
echo "<li>Total: $prettyTotal</li>";
echo "</ul>";







