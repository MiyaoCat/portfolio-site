<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta property="og:image" content="[IMAGE URL]">
	<meta name="description" content="How many characters did you type?">
	<title></title>

	<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<header>
		<section class='inner-column'>
			
		</section>
	</header>

	<main>
		<section class="inner-column">
			<form method="POST">
				<h1 class="loud-voice">Character Count</h1>
				<div class="instructions">
				
				<p class="regular-voice">Type in a string of text and I'll count how many characters you entered. </p>

				<input 
					type="text" 
					name="string" 
					value="<?=$string?>" 
					placeholder="Type whatever you want">
				<button type="submit" name="enter">Submit</button>
			</div>

		 	<?php 
			//setup. Establish variables
			$string = "";

			//If there's a form submission. Reassign values
			if ( isset($_POST["string"]) ) {
				 $string = $_POST["string"];
				 $message = "The $string is $length long";
			

			//calculations
			$length = strlen($string);

			$message = "You entered <span>$string</span>. It is <span class='length'>$length</span> characters long.";

		 ?>
		 	
		 	<p class="regular-voice"><?=$message?></p>
		 	

		 </form>
		 <?php } ?>

		</section>

	</main>

	<footer>
		<section class="inner-column">
			
		</section>
	</footer>
	
</body>
</html>