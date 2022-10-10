
<div class="instructions">
	<p class="normal-voice">Enter the number of people and pizzas at the party and we'll tell you how many slices each person gets! test</p>
</div>
	<?php 
	//prompt number of pizza
	//pizza / 8
	//prompt nubmer of people
	//people
	//prompt number of slices per pizza

	//pizza = 8 slices. 
	//ensure number of pieces comes out even//display nmber of pieces per person. 
	//show leftover slices
	$pizza = 1;
	$people = 1;
	
	$valueError = "";

	if ( isset($_POST['submitted']) ) {

		if ( isset($_POST['pizza']) ) {
			$pizza = $_POST['pizza'];

			// if ( empty($pizza) ) {
			// 		$pizza = 0;
			// 	} else {
			// 		$valueError = "If you don't buy anything, you don't owe anything. Enter a pizza!";
			// 	}
		}

		if ( isset($_POST['people']) ) {
			$people = $_POST['people'];

			// if ( empty($people) ) {
			// 		$people = 0;
			// 	}
				
			// 	if ($people > 0 ) {
			// 		$haspeople = true;

			// 	} else {
			// 		$valueError = "If you don't buy anything, you don't owe anything. Enter a people!";
		// 		}
		} 
		$leftOverSlices = "";
		$totalSlices = "";
		$slicesPerPerson = "";

		$totalSlices = $pizza * 8;
		$leftOverSlices = $totalSlices % $people;

		$slicesPerPerson = ($totalSlices - $leftOverSlices) / $people;
		$message = "There are $slicesPerPerson slices per person and $leftOverSlices slices left over. Go party!";
	}
?>
<form method="POST">

	<div class="entry people">
	 	<p class="normal-voice">How many people will be attending?</p>
		<input 
			type="number" 
			name="people" 
			value="<?=$people?>"
			min=1
			placeholder="0"
			label=""
			required
			>

		<?php if($valueError) {?>
		<error>
			<p class="error normal-voice"><?=$valueError?></p>
		</error>
		<?php } ?>	
	</div>	

	<div class="entry pizza">
	 	<p class="normal-voice">How many pizzas do you think you'll purchase?</p>
		<input 
			type="number" 
			name="pizza" 
			value="<?=$pizza?>"
			min=1
			placeholder="0"
			required
			>

		<?php if($valueError) {?>
		<error>
			<p class="error normal-voice"><?=$valueError?></p>
		</error>
		<?php } ?>	
		
	</div>	

	
	<button type="submit" name="submitted">Submit</button>
</form>
				
			
<output>
	<?php if ( isset($_POST['submitted']) ) { ?>
	
		<p><?=$message?></p>		
			
	<?php } ?>
</output>
			
			
			