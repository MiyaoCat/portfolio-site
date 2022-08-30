
<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);
?>	

<header class="<?=$page?> page-header">
		<?php include("modules/page-header/page-header.php"); ?>
</header>	

<!-- <section class="intro">
		<p><?=$pageData["intro"]?></p>
</section>
 -->
<section class="<?=$page?> project-card">
	<?php 

		foreach ($projects as $project) { 

			// if ( !isset($project["url"]) ) {	
				include("modules/project-card/project-card.php"); 
			}
		// }
	?>
</section>








































