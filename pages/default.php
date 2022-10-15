<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
	$content = $sections["content"];
	
	$link = "?page=module&slug=$sections[module]";
?>


	<section class="<?=$module?>">
		<?php styleGuideDetailLink($module, $pageData["slug"]); ?>

		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
