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
						
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-orange.svg'); ?>	
							</button>
							
							<h3 class='attention-voice'>Nike Air Max 1</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-brown.png' alt=''>
						</picture>
						
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-pink.svg'); ?>	
							</button>
							
							<h3 class='attention-voice'>Nike Air Max 1</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-eggplant.png' alt=''>
						</picture>
						
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-purple.svg'); ?>	
							</button>
							
							<h3 class='attention-voice'>Nike Airmax </h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>

					<li class='shoe-card'>
						<picture>
							<img src='./assets/airmax-yellow.png' alt=''>
						</picture>
						
						<div class="shoe-info">
							<button class='add'>
								<?php include('./assets/plus-orange.svg'); ?>	
							</button>
							
							<h3 class='attention-voice'>Nike Air Max 1</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="right-side">
			<div class='main-image'>
				<img src='./assets/airmax-orange.png' alt=''>
				<div class='beacon'>svg</div>
				<div class='pop-up'>
					<p class='alert-voice'>99%</p>
					<p class='calm-voiec'>Comfortable</p>
				</div>
				<div class='beacon'>svg</div>
			</div>
			
			<div class='color-palette'>
				<ul>
					<li>red</li>
					<li>green</li>
					<li>white</li>
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
							<li>star</li>
							<li>star</li>
							<li>star</li>
							<li>star</li>
							<li>star</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</inner-column>

	</main>			
</body>

</html>