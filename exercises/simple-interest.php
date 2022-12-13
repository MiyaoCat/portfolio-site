<!DOCTYPE html>
<html>

<?php 
//answer = principal(1 + annual interest rate * years)

//prompt principial amount, annaul interest rate as percent, number of years to invest
$intMessage = "";
$priMessage = "";
$yrMessage = "";

$principal = 0;
$interest = 0;
$years = 0;

//get the numbers
if ( isset($_POST['submitted']) ) {
	
	if ( isset($_POST['principal']) ) {
		$principal = $_POST['principal'];
	} if ($principal > 0) {
		$hasPrincipal = true;
	} else {
		$priMessage = "<p class='calm-voice warning'>You're broke!";
	}

	if ( isset($_POST['interest']) ) {
		$interest = $_POST['interest'];
	} if ($interest > 0) {
		$hasinterest = true;
	} if ($interest <= 3 AND $interest > 0) {
		$intMessage = "<p class='calm-voice warning'>Put your money elsewhere.</p>";
	} if ($interest > 3 AND $interest < 7)	{
		$intMessage = "Y<p class='calm-voice warning'>You better live a long time!</p>";
	} if ($interest >= 7 AND $interest < 10) {
		$intMessage = "<p class='calm-voice warning'>Niiice! Your Dad will be proud!</p>";
	}  elseif ($interest >= 10) {
		$intMessage = "<p class='calm-voice warning'>Sounds fishy...</p>";
	}

	if ( isset($_POST['years']) ) {
		$years = $_POST['years'];
	} if ($years > 0) {
		$hasYears = true;
	} if ($years <= 5) {
		$yrMessage = "<p class='calm-voice warning'>What's the point?</p>";
	} if ($years > 5 AND $years <= 10) {
		$yrMessage = "<p class='calm-voice warning'>Not bad, that's a decent amount of time.</p>";
	} if ($years > 10 AND $years <= 20) {
		$yrMessage = "<p class='calm-voice warning'>You'll see some returns.</p>";
	} if ($years > 20 AND $years <= 30) {
		$yrMessage = "<p class='calm-voice warning'>You'll be able buy somethin' big!</p>";
	} elseif ($years > 30) {
		$yrMessage = "<p class='calm-voice warning'>That'll be a nice egg nest.</p>";
	}
}
//answer = principal(1 + annual interest rate * years)
$percentInterest = $interest * .01;
$answer = $principal * (1 + ($percentInterest * $years));
$answerFormatted = number_format($answer, 2);
?>

<div class="instructions">
	<p class="normal-voice">Let's see how much your money can grow over time. Follow the instructions below. Note, this is not calculating compound growth. Only *simple* growth.</p>
</div>

	<form method="POST">

		<div class="entry principal">
			<p class="normal-voice">Enter the principal amount you'll invest.</p>
			<input type="number" 
				name='principal' 
				value="<?=$principal?>" 
				placeholder ="0" 
				min = "1">
			
			<return-message style="display: block">	
				<?php if ( isset($_POST['principal']) ) { ?>	
				<p class='returnMessage normal-voice'><?=$priMessage?></p>
				<?php } ?>	
			</return-message>
		</div>
			

		<div class="entry interest">
			<p class="normal-voice">Now enter the interest rate. Standard interest is 7% APY.</p>
			
			<input type="number" 
				name='interest' 
				value="<?=$interest?>" 
				placeholder ="7%" 
				min = "1"
				step = "0.01">	
				
			
			<return-message style="display: block">	
				<?php if ( isset($_POST['interest']) ) { ?>
				<p class='returnMessage normal-voice'><?=$intMessage?></p>
				<?php } ?>	
			</return-message>
		</div>

		<div class="entry years">
			<p class="normal-voice">Enter the number of years you wish to invest.</p>
			
			<input type="number" 
				name='years' 
				value="<?=$years?>" 
				placeholder ="0" 
				min = "1">	
			
			<return-message style="display: block">	
				<?php if ( isset($_POST['years']) ) { ?>
				<p class='returnMessage normal-voice'><?=$yrMessage?></p>
				<?php } ?>	
			</return-message>
		</div>

		
		<button type="submit" name="submitted">Submit</button>

	</form>

	<?php if( isset($_POST['submitted']) ) { ?>
	<output>
		<p class="normal-voice">You'll earn <span class="int-total">$<?=$answerFormatted?></span> after <?=$years?> years at a <?=$interest?>% interest rate.</p>
	</output>
	<?php } ?>




