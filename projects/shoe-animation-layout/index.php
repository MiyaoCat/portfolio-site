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
		<div class='logo'>
			<?php include('./assets/nike-logo.svg'); ?>
		</div>

		<nav>
			<ul>
				<li>Man</li>
				<li>Woman</li>
				<li>Kids</li>
				<li>Customize</li>
			</ul>		
		</nav>

		<div class='model'>Model: CK5828-400</div>

		<div class='icon'>
			<?php include('./assets/bag-icon.svg'); ?>
		</div>
	</inner-column>
</header>	

<main>
	<inner-column>
		<div class="left-side">
			<div class="grid-wrap">
				<div class='search'>
					<form>
						<input type='text'>
						<button type='submit'></button>
					</form>
				</div>
				
				<div class='savings'>
					<p class='attention-voice'>50%</p>
					<p class='calm-voice'>save up to</p>
				</div>
				
				<header>
					<h1 class='screaming-voice'>Stylish Sneakers</h1>
					<button class='explore'>Graphic</button>
				</header>
				
				<div class='page-buttons'>
					<button class='back'><img src='' alt=''>Back</button>
					<button class='forward'><img src='' alt=''>Forward</button>
				</div>
			</div>
			
			<div class='shoe-grid'>
				<ul>
					<li>
						<div class='shoe-card'>
							<picture><img src='' alt=''></picture>
							<button></button>
							<h3 class='attention-voice'>Nike Air Force</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
					<li>
						<div class='shoe-card'>
							<picture><img src='' alt=''></picture>
							<button></button>
							<h3 class='attention-voice'>Nike Air Force</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
					<li>
						<div class='shoe-card'>
							<picture><img src='' alt=''></picture>
							<button>Plus</button>
							<h3 class='attention-voice'>Nike Air Force</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
					<li>
						<div class='shoe-card'>
							<picture><img src='' alt=''></picture>
							<button></button>
							<h3 class='attention-voice'>Nike Air Force</h3>
							<p class='calm-voice'>3 Colors</p>
							<p class='alert-voice'>$230</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="right-side">
			<div class='main-image'>
				<img src='' alt=''>
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