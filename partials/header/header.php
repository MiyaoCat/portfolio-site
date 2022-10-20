<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	 <link rel="icon" type="image/x-icon" href="./images/icons/logo.svg">
	 
	<meta property="og:image" content="[IMAGE URL]">
	<meta name="description" content="John Miyao's Portfolio">

	<title>JM's Portoflio</title>

	<link rel="stylesheet" href="styles/site.css">
</head>

<body class="<?=$page?> <?=pageTemplateClass($pageData)?>">
	<div class="background"></div>

	<header class="site-header">
		<div class="logo">
			<a href="?page=home">
				<?php include("images/icons/logo.svg"); ?>
			</a>
		</div>

		<nav>
			<ul>
				<li>
					<a href="?page=contact" 
						class="<?php if ($page == 'contact') { echo 'active'; } ?>">Contact Me
					</a>
				</li>

				<li>
					<a href="?page=about"
						class="<?php if ($page == 'about') { echo 'active'; } ?>">About Me
					</a>
				</li>
				
				<li>
					<a href="?page=projects"
						class="<?php if ($page == 'projects') { echo 'active'; } ?>">Projects
					</a>
				</li>
			</ul>
		</nav>
	</header>
