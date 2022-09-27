<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
	$link = "?page=module&slug=$sections[module]";
?>


	<section class="<?=$page?> <?=$module?>">
		<a href="<?=$link?>" target="<?=$module?>">Detail</a>

		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
