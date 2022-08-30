<header class="<?=$page?> page-header">
	<?php 
		include("modules/page-header/page-header.php"); 
	?>
</header>

<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
?>

	<section class="<?=$page?> <?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>


<?php include("partials/footer/footer.php"); ?>