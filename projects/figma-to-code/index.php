<?php include("partials/header.php"); ?>

<main>
<!-- <inner-column> -->
	<?php
		$page = "home";
		if ( isset($_GET["page"]) ) {
			$page = $_GET["page"];
		}

		$pageDataFilePath = "data/pages/$page.json";
		$pageData = null;

		if ( file_exists($pageDataFilePath) ) {
			$jsonData = file_get_contents($pageDataFilePath);
			$pageData = json_decode($jsonData, true);
		}

		if ($pageData) {
			foreach ($pageData['modules'] as $module) {
				$type = $module['type'];
				$header = $module['header'];
				$subHeader = $module['sub-header'];
				$components = $module['components'];
	?>	
		<section class="<?=$type?>">
			<inner-column>
				<?php include("modules/$type.php"); ?>
			</inner-column>
		</section>
<?php } ?>
	<?php } ?>
<!-- </inner-column> -->
</main>


<?php include("partials/footer.php"); ?> 