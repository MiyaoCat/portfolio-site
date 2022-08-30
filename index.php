<?php include("partials/header/header.php"); ?>
<?php include("functions.php"); ?>

<?php 
	$page = "home";
	if ( isset($_GET["page"]) ) {
		$page = $_GET["page"];
	}

	$pageDataFilePath = "data/page-data/$page.json";
	$pageData = null;

	if ( file_exists($pageDataFilePath) ) {
		$thePageDataJson = file_get_contents("data/page-data/$page.json");
		$pageData = json_decode($thePageDataJson, true);
	}
?>

<?php if ($pageData) { ?>
	<?php foreach ($pageData["sections"] as $sections) {
		$module = $sections["module"];
	?>

		<section class="<?=$page?> <?=$module?>">
			<?php include("modules/$module/$module.php"); ?>
		</section>

	<?php } ?>
<?php } ?>

<?php include("partials/footer/footer.php"); ?>








































