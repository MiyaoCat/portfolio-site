<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);
?>

<project-card>

	<?php foreach ($projects as $project) { 
		$title = $project["title"];
		$slug = $project["slug"];
		$teaser = $project["teaser"];
		$url = $project["url"];
	?>
	<div class="project-title">
		<a href="<?=$url?>">
			<h2 class="loud-voice"><?=$title?></h2>
			<!-- <h2 class="loud-voice">Exercises</h2> -->
		</a>
	</div>

	<ul class="languages">
		<?php foreach ($project["languages"] as $languages) { ?>
			<li><?=$languages?></li>
	<?php } ?>
	</ul>
	 
	<p class="normal-voice"><?=$teaser?></p>

	<?php } ?>
		
</project-card>

<picture class="project-image">
		<img src="https://peprojects.dev/images/landscape.jpg" alt="">
</picture>
