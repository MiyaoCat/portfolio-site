<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>

	<link href="https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@800,201,401,301,501,400,601,500,600,700,300,200&display=swap" rel="stylesheet">

	<link rel="icon" type="image/x-icon" href="./assets/nike-logo.svg">
	<link rel='stylesheet' href='styles/site.css'>
	<title>Shoe Animation Page</title>
</head>

<body>
	<header class='site-header'>
	<inner-column>

		<div class="left-side">
			<div class='logo'>
				<?php include('./assets/nike-logo.svg'); ?>
			</div>
			
			<nav>
				<ul>
					<li class="normal-voice">
						<a href="#">Men</a>
					</li>
					<li class="normal-voice">
						<a href="#">Women</a>
					</li>
					<li class="normal-voice">
						<a href="#">Kids</a>
					</li>
					<li class="normal-voice">
						<a href="#">Customize</a>
					</li>
				</ul>		
			</nav>
		</div>

		<div class="right-side">
			<div class='model normal-voice'>Model: CK5828-400</div>
			
			<div class='bag-icon'>
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
						<a href="#"><?php include('./assets/filter-icon.svg'); ?>		</a>		
					</button>
				</form>
			
				<div class='savings'>
					<p class='attention-voice'>60%</p>

					<div class="line">
						<?php include('./assets/line-long.svg'); ?>
					</div>

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
							<img src='./assets/airmax-red-rotated.png' alt=''>
						</picture>

						<div class="shoe-info">		
							<button class='add'>
								<?php include('./assets/plus-red.svg'); ?>	
							</button>	

							<div class="shoe-info-wrap">
								<h3 class='attention-voice'>Nike Air Max</h3>
								<p class='calm-voice'>3 Colors</p>
								<p class='alert-voice'>$230</p>
							</div>
						</div>						
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-yellow-rotated.png' alt=''>
						</picture>
						
						<div class="shoe-info">			
							<button class='add'>
								<?php include('./assets/plus-yellow.svg'); ?>	
							</button>

							<h3 class='attention-voice'>Nike Air Max</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-orange-white-rotated.png' alt=''>
						</picture>
					
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-orange.svg'); ?>	
							</button>

							<h3 class='attention-voice'>Nike Air Max</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-chocolate-rotated.png' alt=''>
						</picture>
					
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-chocolate.svg'); ?>	
							</button>

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
				<picture>
					<img src='./assets/airmax-orange-rotated.png' alt=''>
				</picture>

				<div class='pop-up'>
					<p class='alert-voice'>99%</p>
					<p class='calm-voice'>Comfortable</p>
				</div>

				<div class='beacon one'>
					<?php include('./assets/beacon.svg'); ?>	
				</div>

				<div class='pop-up-two'>
					<p class='calm-voice'>Visible air pocket!</p>
				</div>

				<div class='beacon two'>
					<?php include('./assets/beacon.svg'); ?>	
				</div>
			</div>
			
			<div class='color-palette'>
				<ul>
					<li> <?php include('./assets/dot-yellow.svg'); ?> </li>
					<li> <?php include('./assets/dot-red.svg'); ?> </li>
					<li> <?php include('./assets/dot-grey.svg'); ?> </li>
				</ul>
			</div>
			
			<div class='shoe-detail'>
				<div class="shoe-detail-wrap">
					<ol class='size'>
						<li><p class='alert-voice'>8</p></li>			
						<li><p class='alert-voice'>9</p></li>
						<li>
							<p class='alert-voice'>10</p>
							<p class='calm-voice'>Size</p>
						</li>
					
						<li><p class='alert-voice'>11</p></li>
						<li><p class='alert-voice'>12</p></li>
					</ol>
								
					<div class="shoe-detail-bottom">
						<p class='shoe-name loud-voice'>Nike Blazer Low</p>
									
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

			</div>

		</div>
		</inner-column>

	</main>	
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src='animation.js'></script>			
</body>

</html>