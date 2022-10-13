<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta property="og:image" content="[IMAGE URL]">
	<meta name="description" content="Hello, friend. Enter your name.">
	<title></title>

	<link rel="stylesheet" href="../../css/style.css">
</head>
<body>
	<header>
		<section class='inner-column'>
			
		</section>
	</header>

	<main>
		<section class="inner-column">
			<h1 class='loud-voice'>Say Hello!</h1>
				
			<div class="intro">
				<form method="POST">

				<p>Hey stranger, what's your name?</p>
				<div class="instructions">
					
					<input type="text" 
					name="name" 
					value="<?=$name?>" 
					placeholder="Enter name">
					<button name='feedback'>Enter</button>
				</div>
			</div>
			<?php  

				$scarface = "./images/scarface-puppy.jpg";
				$lionel = "./images/lionel-richie.jpg";
				$adelle = "./images/adelle.jpg";
				$sAndG = "./images/simon-garfunkel.jpg";
				
				$images =[$scarface, $lionel, $adelle, $sAndG];
				$imagesRand = $images[rand(0,3)];

				$name = "";

				if ( isset($_POST["name"]) ) {
				$name = $_POST["name"]; 
				$images = $images[rand(0,2)];
			?>	

				<p class='entered-name'>Hi, <span><?=$name?></span>. Here's your random quote. </p>
				<picture><img src='<?=$imagesRand?>'></picture>
				
			<?php } ?>


			</form>
				
		</section>

	</main>

	<footer>
		<section class="inner-column">
			
		</section>
	</footer>
	
</body>


</html>