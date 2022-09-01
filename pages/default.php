<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
	$link = "?page=module&slug=$sections[module]";
?>

	<section class="<?=$page?> <?=$module?>">
		<?php styleGuideDetailLink($module, $pageData["slug"]); ?>
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
