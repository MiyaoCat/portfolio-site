
<?php  
	$page = "home";
		if ( isset($_GET["page"]) ) {
			$page = $_GET["page"];
		}
?>


<footer class="site-footer">
	<inner-column>
		<site-footer> 

			<?php 
				if ($page == "template-1" or $page == "template-3") {
					include("modules/site-footer.php"); 
				}

				if ($page == "template-2") {
					include("modules/site-footer2.php"); 
				}
			?>

		</site-footer>
	</inner-column>
</footer>

</body>

</html>