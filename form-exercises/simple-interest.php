<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta property="og:image" content="[IMAGE URL]">
	<meta name="description" content="Stash Your Keesh">
	<title></title>

	<link rel="stylesheet" href="../css/style.css">
</head>

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
		$priMessage = "You're broke!";
	}

	if ( isset($_POST['interest']) ) {
		$interest = $_POST['interest'];
	} if ($interest > 0) {
		$hasinterest = true;
	} if ($interest <= 3 AND $interest > 0) {
		$intMessage = "Put your money elsewhere";
	} if ($interest > 3 AND $interest < 7)	{
		$intMessage = "You better live a long time!";
	} if ($interest >= 7 AND $interest < 10) {
		$intMessage = "Niiice! Your Dad will be proud!";
	}  elseif ($interest >= 10) {
		$intMessage = "Sounds fishy...";
	}

	if ( isset($_POST['years']) ) {
		$years = $_POST['years'];
	} if ($years > 0) {
		$hasYears = true;
	} if ($years <= 5) {
		$yrMessage = "What's the point?";
	} if ($years > 5 AND $years <= 10) {
		$yrMessage = "That might work";
	} if ($years > 10 AND $years <= 20) {
		$yrMessage = "You'll see some returns";
	} if ($years > 20 AND $years <= 30) {
		$yrMessage = "You'll be able buy somethin' big!";
	} elseif ($years > 30) {
		$yrMessage = "That'll be a nice egg nest";
	}
}
//answer = principal(1 + annual interest rate * years)
$percentInterest = $interest * .01;
$percentFormatted = number_format($percentInterest, 2);
$answer = $principal * (1 + $percentFormatted * $years);
$answerFormatted = number_format($answer, 2);
?>

<body>
	<header>
		<section class='inner-column'>
			
		</section>
	</header>

	<main>
		<heading style="display: block">
			<h1 class="loud-voice"><a href="?">Invest Your Moolah! DEPLOYBOT</a></h1>
		</heading>


		<inner-column class='interest'>
			<div class="instructions">
				<p class="normal-voice">Let's see how much your money can grow over time. Follow the instructions below.</p>
			</div>

			<form method="POST">
				<form-wrap>
					<p class="normal-voice">Enter the principal amount you'll invest</p>
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
						

					<p class="normal-voice">Now enter the interst rate. Standard interest is 7% APY.</p>
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

					
					<button type="submit" name="submitted">Submit</button>
				

				</form-wrap>

			</form>
			
			<div class="answer">
				
			</div>	

			<?php if( isset($_POST['submitted']) ) { ?>
			<output>
				<p class="normal-voice">You'll earn <span class="int-total">$<?=$answerFormatted?></span> after <?=$years?> years at a <?=$interest?>% interest rate.</p>
			</output>
			<?php } ?>

		</inner-column>

	</main>

	<footer>
		<section class="inner-column">
			
		</section>
	</footer>
	
</body>
</html>