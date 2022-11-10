<?php foreach ($pageData["sections"] as $sections) {

	$module = $sections["module"];
	// $link = "?page=module&slug=$sections[module]";
?>


	<section class="<?=$module?>">
		<?php styleGuideDetailLink($module, $pageData["slug"]); ?>

		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>

<?php 
	//This is for the separate figure page (after clicking 'detail') within the style guide
	if ($page == "module") {
		$json = file_get_contents("data/page-data/style-guide.json");
		$styleGuideData = json_decode($json, true);

		foreach ($styleGuideData["sections"] as $modules) {
			if ($modules["module"] == "figure") {
				$filePath = $modules["filePath"];
				$altText = $modules["altText"];
			}
		}
?>
	
	<section class="<?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>