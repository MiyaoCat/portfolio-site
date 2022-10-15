<?php foreach ($pageData["sections"] as $sections) {
	$module = $sections["module"];
	$link = "?page=module&slug=$sections[module]";
?>

	<section class="<?=$module?>">
		<?php styleGuideDetailLink($module, $pageData["slug"]); ?>
		<?php include("modules/$module/$module.php"); ?>
	</section>

<?php } ?>

<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);
?>	

<!-- <section class="project-card"> -->
	<?php 

		foreach ($projects as $project) { 
			
			// if ( !isset($project["url"]) ) {	
				include("modules/project-card/project-card.php"); 
			}
		// }
	?>
<!-- </section> -->








































