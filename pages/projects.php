
<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);
?>

<header class="projects page-header">
	<?php 
		$title1 = "Projects";
		$title2 = "";
		include("modules/page-header/page-header.php"); 
	?>
</header>

<section class="projects page-intro">
	<?php 
		$content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, inventore!";
		include("modules/generic-text/generic-text.php"); ?>

</section>
	
	
<section class="projects">
	<?php 

		foreach ($projects as $project) { 
			if ( isset($project["url"]) ) {	
				include("modules/project-card/project-card.php"); 
			}
		}
	?>
</section>








































