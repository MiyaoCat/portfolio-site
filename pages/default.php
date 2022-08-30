<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
?>

	<section class="<?=$page?> <?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
