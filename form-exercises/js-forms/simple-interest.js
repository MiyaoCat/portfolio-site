<form id="simple-interest" method="POST">

	<div class="instructions">
		<p class="normal-voice">Let's see how much your money can grow over time. Follow the instructions below. Note, this is not calculating compound growth. Only *simple* growth.</p>
	</div>

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

<div class='return'>
	<?php include('components/back-to-exercises.php'); ?>
</div>

<script>
var $form = document.querySelector("#simple-interest");

var $principalInput = document.querySelector("[name='principal']");
var $interestInput = document.querySelector("[name='interest']");
var $yearsInput = document.querySelector("[name='years']");

$form.addEventListener('submit', function(event) {
	event.preventDefault();

	let principal = $principalInput.value;
	let interest = $interestInput.value;
	let years = $yearsInput.value;

	let totalEarned = (principal * (1 + (interest * .01 * years))).toFixed(2);

	var $output = document.createElement("output");
	document.body.appendChild($output);

	$output.innerHTML = `<p class="normal-voice">You'll earn $${totalEarned} after ${years} at a ${interest}% interest rate.`;

	console.log(totalEarned);
});
</script>