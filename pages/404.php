<?php  
	$errorPage = file_get_contents("data/page-data/404.json");
	$errorPageData = json_decode($errorPage, true);
		$title1 = $errorPageData["title1"];
		$title2 = $errorPageData["title2"];
		$slug = $errorPageData["slug"];

	// include("modules/generic-text/generic-text.php");
?>