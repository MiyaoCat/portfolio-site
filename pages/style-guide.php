<?php 
	$json = file_get_contents("data/page-data/style-guide.json");
	$pageData = json_decode($json, true);

	foreach ($pageData["sections"] as $sections) {
		$module = $sections["module"];
?>

<section class="<?=$page?> <?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>
	

