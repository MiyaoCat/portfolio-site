<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	
	<meta property="og:image" content="./assets/images/figma.png">
	<meta name="description" content="Figma-to-Code">
	<title>Figma to Code</title>

	<link rel="stylesheet" href="styles/site.css">
</head>

<?php  
	$page = "template-1";
		if ( isset($_GET["page"]) ) {
			$page = $_GET["page"];
		}
?>

<body class=<?=$page?>>
	<header class="site-header">
		<inner-column>
			<mast-head>
				<?php 
					if ($page == "template-1") {
						include("./modules/site-header.php"); 
					}

					if ($page == "template-2") {
						include("./modules/site-header2.php"); 
					}
					
					if ($page == "template-3") {
						include("./modules/site-header3.php"); 
					}
				?>
					
			</mast-head>
		</inner-column>
	</header>
