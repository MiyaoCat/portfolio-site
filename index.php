<?php include("partials/header/header.php"); ?>
<?php include("functions.php"); ?>
<!-- PAGE HEADER -->




	<?php 
		$page = "home";
		if ( isset($_GET["page"]) ) {
			$page = $_GET["page"];
		}
		
		if ($page = $_GET["page"]) {
			include("pages/$page.php");
		}
		
		// if ($page == "home") {
		// 	include("pages/home.php");
		// }
	
		// if ($page == "contact") {
		// 	include("pages/contact.php");
		// }
	
		// if ($page == "about") {
		// 	include("pages/about.php");
		// }
	
		// if ($page == "projects") {
		// 	include("pages/projects.php");
		// }

		// if ($page == "style-guide") {
		// 	include("pages/style-guide.php");
		// }

		// if ($page == "resume") {
		// 	include("pages/resume.php");
		// }
	?>



<?php include("partials/footer/footer.php"); ?>








































