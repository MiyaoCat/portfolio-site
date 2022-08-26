<?php include("partials/header/header.php"); ?>
<?php include("functions.php"); ?>
<!-- PAGE HEADER -->
<?php echo "?" . queryString(); ?>


<div class="router">
	<?php 
		$page = "home";
		if ( isset($_GET["page"]) ) {
			$page = $_GET["page"];
		}
	
		if ($page == "home") {
			echo "home";
		}
	
		if ($page == "contact") {
			echo "contact";
		}
	
		if ($page == "about") {
			echo "about";
		}
	
		if ($page == "projects") {
			echo "projects";
		}
	?>
</div>


<?php include("partials/footer/footer.php"); ?>








































