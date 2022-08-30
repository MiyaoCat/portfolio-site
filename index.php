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

	if ($pageData) {
		if ( !isset($pageData["template"]) )  {
			 include("pages/default.php");
		}
	} else {
		include("pages/404.php");
	}
?>




<?php include("partials/footer/footer.php"); ?>








































