<?php 

	$pageDataFilePath = "data/pages/$page.json";
	$pageData = null;

	if ( file_exists($pageDataFilePath) ) {
		$jsonData = file_get_contents($pageDataFilePath);
		$pageData = json_decode($jsonData, true);
	}

	if ($pageData) {
		$siteHeader = $pageData["site-header"];
	}

	$json = file_get_contents($siteHeader);
	$headerComponents = json_decode($json, true);
?>
	
	<?php 
		foreach ($headerComponents as $component) {
			$type = $component["type"];
			
			if($type == "logo") { 
				$link = $component["link"];
				$source = $component["source"];
	?>
		<div class=<?=$type?>>
			<a href="<?=$link?>"><?php include($source); ?></a>
		</div>
			<?php } ?>
 		<?php } ?>

 	<?php 
 		foreach ($headerComponents as $component) {	
 			if($component["type"] == "navigation") { ?>

 		<nav>
 			<ul>
 				<?php 
 					foreach($component["listItems"] as $item) { 
 						$link = $item["link"];
 						$page = $item["page"];
 						$slug = $item["slug"];
 				?>
 					<li>
 						<a class="<?php if ( $page == $slug ) { echo 'active'; } ?>" href="<?=$link?>"><?=$page?></a>
 					</li>
 				<?php } ?>	
 			</ul>
		</nav>

 		<?php } ?>
 	<?php } ?>

 	<div class="menu">
 		<?php include("./assets/icons/hamburger-menu.svg"); ?>
 	</div>

	<?php 
		foreach ($headerComponents as $component) {
			// $type = $component["type"];

			if($component["type"] == "icon") { 	
				$text = $component["text"]; 
				$source = $component["source"]; 
		?>

			<div class="login">
				<?php include($source); ?>
				<span><?=$text?></span>

	<?php } 
			elseif ($component["type"] == "button") { 
		 		include("components/$type.php"); ?>
			</div>

			<?php } ?>
		<?php } ?>

