<?php  
	foreach ($errorPageData["sections"] as $sections) {
		$module =$sections["module"];
	}	

	include("modules/$module/$module.php");
?>