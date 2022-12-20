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

<!-- -- -- -- -- -- SIMPLE MATH -- -- -- -- -- -- -->

<?php 
	$number1 = "";
	$number2 = "";

	if ( isset ($_POST["number1"]) ) {
		$number1 = $_POST["number1"];
	}

	if ( isset ($_POST["number2"]) ) {
		$number2 = $_POST["number2"];

		$add = number_format($number1 + $number2, 2, '.', ',');
		$subtract = number_format($number1 - $number2, 2, '.', ',');
		$multiply = number_format($number1 * $number2, 2, '.', ',');
		$divide = number_format($number1 / $number2, 2, '.', ',');
	}			
?>
		
<form method="POST">
	<h1 class="loud-voice">Let's do Math!</h1>

	<div class="instructions">
		<p class="regular-voice">Just type in your numbers and watch the magic happen!</p>
	</div>
	
	<input 
		type="number" 
		name="number1" 
		value="<?=$number1?>"
		step="any"
		placeholder="Enter your first number"
		required>
	<p class="calm-voice warning"></p>

	<input 
		type="number" 
		name="number2" 
		value="<?=$number2?>"
		step="any"
		placeholder="Enter your second number"
		required>
	<p class="calm-voice warning"></p>
	
	<button type="submit" name="submitted">Submit</button>
</form>

<?php if ( isset($_POST["submitted"]) ) { ?>	
	<output>
		<p class="normal-voice">You entered <?=$number1?> & <?=$number2?>.</p>
		<p>Addition: <span class="special"><?=$add?></span></p>
		<p>Subtraction: <span class="special"><?=$subtract?></span></p>
		<p>Multiplication: <span class="special"><?=$multiply?></span></p>
		<p>Division: <span class="special"><?=$divide?></span></p>
<?php } ?>	
	</output>





<!-- -- -- -- -- -- TAX CALCULATOR -- -- -- -- -- -- -->


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
			echo $state; // the whole chunk of data for that state
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


?>

<?php 
function isAnagram($word1, $word2) {
  // First, make sure that both words are the same length
  if (strlen($word1) != strlen($word2)) {
    return false;
  }

  // Then, convert the words to lowercase and sort the characters
  $word1 = strtolower($word1);
  $word1 = str_split($word1);
  sort($word1);
  $word1 = implode($word1);

  $word2 = strtolower($word2);
  $word2 = str_split($word2);
  sort($word2);
  $word2 = implode($word2);

  // Finally, compare the sorted words to see if they are the same
  if ($word1 == $word2) {
    return true;
  } else {
    return false;
  }
}
 ?>



<!-- -- -- -- -- -- TAX CALC -- -- -- -- -- -- -->

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

function totalTax($taxData, $choice) {
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




<!-- -- -- -- -- -- PASSWORD -- -- -- -- -- -- -->

<?php  
	$fruit = "";
	$number = "";
	$password = $fruit . $number;
	$submitted = isset($_POST["submitted"]);

?>

<form method="POST" class="password">

	<?php  
		// $hide = "";
		// $unHide = "";

		// if ( isset($_POST["fruit"]) AND isset($_POST["number"]) ) {
		// 	$hide = "style='display:none;'"; 
		// }

		// elseif ( isset($_POST["password"]) ) {
		// 	if ($_POST["password"] !== $_POST["createdPassword"]) {
		// 		$unHide = "style='display:flex'";
		// 	}
		// }	

	?>
		<div class="password-create">
			<label for="fruit">What is your favorite fruit?</label>
			<input type="text" name="fruit" value="<?=$fruit?>">
			
			<label for="number">What is your favorite number?</label>
			<input type="number" name="number" value="<?=$number?>">
		</div>


	<?php  
	if ($submitted) {
		$fruit = $_POST["fruit"];
		$number = $_POST["number"];
		$password = $fruit . $number;
		$passwordEnter = "";

		if ( isset($_POST["password"]) ) {
			if ($_POST["password"] == $password) {
				echo "correct";
			}
		};

	?>
		<output>
			<p class="normal-voice">You entered:</p>
			<?php  $password = $fruit . $number; ?>		
			<?=$password?>	
			
			<p class="normal-voice">This will be your password</p>
		</output>

		<form-wrap>
			<label for="password">Please enter your password</label>
			<input type="text" name="password" value="<?=$passwordEnter?>">
			<input class="hidden" type="text" name="createdPassword" value="<?=$password?>">
		</form-wrap>


	<?php } ?>
	<button type="submit" name="submitted">Submit</button>

</form>






