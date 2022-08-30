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

<?php
	if ($pageData) {
		if ( !isset($pageData["template"]) )  {
			 include("pages/default.php");
?>

	<header class="<?=$page?> page-header">
		<?php include("modules/page-header/page-header.php"); ?>
	</header>

<?php
		} else {
			include("pages/$pageData[template].php");
			}
	} else {
		include("pages/404.php");
		}
?>

<?php include("partials/footer/footer.php"); ?>








<!-- <section class="<?=$page?> intro">
		<p><?=$pageData["intro"]?></p>
</section> -->






























