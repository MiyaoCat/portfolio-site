<?php 
	$heading = $heading ?? "Check out my latest projects";
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);
	
?>

<projects-spotlight class="home">
	<h2 class="loud-voice"><?=$heading?></h2>
	<?php foreach ($projects as $project) { ?>
		<ul>
			<?php 
					if ($project["featured"])  {
					
					$title = $project["title"]; 
					$intro = $project["intro"];
					
			?>
				<li>
					<h3 class="attention-voice"><?=$title?></h2>
				</li>
				<li>
					<p class="normal-voice"><?=$intro?></p>
				</li>
			<?php } ?>
		</ul>
	<?php } ?>
</projects-spotlight>
