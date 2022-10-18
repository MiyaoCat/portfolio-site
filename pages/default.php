<?php foreach ($pageData["sections"] as $sections) {

	$module = $sections["module"];
	$link = "?page=module&slug=$sections[module]";
?>


	<section class="<?=$module?>">
		<div class="link"><?php styleGuideDetailLink($module, $pageData["slug"]); ?></div>

		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
