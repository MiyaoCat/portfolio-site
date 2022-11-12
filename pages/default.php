<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
?>

	<section class="<?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
