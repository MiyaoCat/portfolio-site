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
<form method="POST">
	<h1 class='loud-voice'>Say Hello!</h1>
	
	<p class="normal-voice">Hey stranger, what's your name?</p>

	<?php  

		$scarface = "./images/forms/scarface-puppy.jpg";
		$lionel = "./images/forms/lionel-richie.jpg";
		$adelle = "./images/forms/adelle.jpg";
		$sAndG = "./images/forms/simon-garfunkel.jpg";
		$jerryMaguire = "./images/forms/jerry-maguire.png";

		$images =[$scarface, $lionel, $adelle, $sAndG, $jerryMaguire ];
		$imagesRand = $images[rand(0,4)];

		$name = "";

		
	?>

	<input type="text" 
		name="name" 
		value="<?=$name?>" 
		placeholder="Enter your government name"
	>
	
	<button type="submit" name="submitted">
		Submit
	</button>

</form>

<?php 
	if ( isset($_POST["name"]) ) {
		$name = $_POST["name"]; 
		$images = $images[rand(0,4)];

		if ($name == "") {
			echo "<output>Fine, enter your nickname then. </output>";
		} 

		elseif ($name == " " OR $name == "  ") {
			echo "<output>Sorry, a blank space isn't going to do it. </output>";
		}
		else {

?>
<output>
	<p class='normal-voice'>Hi, <span><?=$name?></span>. Here's your random quote. </p>
	
	<picture><img src='<?=$imagesRand?>'></picture>
</output>
	<?php } ?>
<?php } ?>