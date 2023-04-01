<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link rel='stylesheet' href='styles/site.css'>
	<title>Shoe Animation Page</title>
</head>

<body>
	<header>
	<inner-column>

		<div class="left-side">
			<div class='logo'>
				<?php include('./assets/nike-logo.svg'); ?>
			</div>
			
			<nav>
				<ul>
					<li class="normal-voice">Man</li>
					<li class="normal-voice">Woman</li>
					<li class="normal-voice">Kids</li>
					<li class="normal-voice">Customize</li>
				</ul>		
			</nav>
		</div>

		<div class="right-side">
			<div class='model normal-voice'>Model: CK5828-400</div>
			
			<div class='icon'>
				<?php include('./assets/bag-icon.svg'); ?>
			</div>
		</div>

	</inner-column>
	</header>	

<main>
	<inner-column>
		<div class="left-side">
			<div class="grid-wrap">

				<form class="search">
					<input type='text' placeholder='Search here... '>

					<button class='filter' type='submit'>
						<?php include('./assets/filter-icon.svg'); ?>				
					</button>
				</form>
			
				<div class='savings'>
					<p class='attention-voice'>60%</p>
					<p class='calm-voice'>save up to</p>
				</div>
				
				<div class='heading'>
					<h1 class='title1 screaming-voice'>Stylish</h1>
					<h1 class='title2 screaming-voice'>Sneakers</h1>
					<button class='explore'>
						<?php include('./assets/explore-icon.svg'); ?>	
					</button>
				</div>
				
				<div class='page-buttons'>
					<button class='back'>
						<?php include('./assets/left-arrow.svg'); ?>	
					</button>

					<button class='forward'>
						<?php include('./assets/right-arrow.svg'); ?>	
					</button>
				</div>
			</div>
			
			<div class='shoe-grid'>
				<ul>
					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-red.png' alt=''>
						</picture>

						<button class='add'>
							<?php include('./assets/plus-orange.svg'); ?>	
						</button>

						<div class="shoe-info">					
							<h3 class='attention-voice'>Nike Air Max</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-brown.png' alt=''>
						</picture>

						<button class='add'>
							<?php include('./assets/plus-pink.svg'); ?>	
						</button>

						<div class="shoe-info">						
							<h3 class='attention-voice'>Nike Air Max</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-eggplant.png' alt=''>
						</picture>
						
						<button class='add'>
							<?php include('./assets/plus-circle-purple.svg'); ?>	
						</button>
					
						<div class="shoe-info">						
							<h3 class='attention-voice'>Nike Air Max </h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-yellow.png' alt=''>
						</picture>

						<button class='add'>
							<?php include('./assets/plus-orange.svg'); ?>	
						</button>

						<div class="shoe-info">
							
							
							<h3 class='attention-voice'>Nike Air Max</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="right-side">
			<div class='main-image'>
				<img src='./assets/airmax-orange-rotated.png' alt=''>

				<div class='pop-up'>
					<p class='alert-voice'>99%</p>
					<p class='calm-voice'>Comfortable</p>
				</div>

				<div class='beacon one'>
					<?php include('./assets/beacon.svg'); ?>	
				</div>

				<div class='beacon two'>
					<?php include('./assets/beacon.svg'); ?>	
				</div>
			</div>
			
			<div class='color-palette'>
				<ul>
					<li><?php include('./assets/dot-red.svg'); ?></li>
					<li><?php include('./assets/dot-grey.svg'); ?></li>
					<li><?php include('./assets/dot-yellow.svg'); ?></li>
				</ul>
			</div>
			
			<div class='shoe-detail'>
				<ol class='size'>
					<li><p class='alert-voice'>39</p></li>

					<li><p class='alert-voice'>40</p></li>

					<li>
						<p class='alert-voice'>41</p>
						<p class='calm-voice'>Size</p>
					</li>

					<li><p class='alert-voice'>42</p></li>
					<li><p class='alert-voice'>43</p></li>
				</ol>
			
				<p class='loud-voice'>Nike Blazer Low</p>
			
				<div class='review'>
					<p class='normal-voice'>Review 1k+</p>

					<div class='rating'>
						<ul>
							<li><?php include('./assets/star-yellow.svg'); ?></li>
							<li><?php include('./assets/star-yellow.svg'); ?></li>
							<li><?php include('./assets/star-yellow.svg'); ?></li>
							<li><?php include('./assets/star-yellow.svg'); ?></li>
							<li><?php include('./assets/star-grey.svg'); ?></li>
						</ul>
					</div>
				</div>

			</div>

		</div>
		</inner-column>

	</main>			
</body>

</html>