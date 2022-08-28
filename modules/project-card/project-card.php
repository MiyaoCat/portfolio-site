<?php 
	$title = $project["title"];
	$slug = $project["slug"];
	$intro = $project["intro"];
	$url = $project["url"];
?>

<project-card>
	
		<div class="project-title">
			<a href="?page=project&slug=<?=$slug?>">
				<h2 class="loud-voice"><?=$title?></h2>
			</a>
		</div>

		<ul class="languages">
			<?php foreach ($project["languages"] as $languages) { ?>
				<li><?=$languages?></li>
			<?php } ?>
		</ul>

		<p class="normal-voice"><?=$intro?></p>

		<div class="project-images">
			<picture class="project-image">
				<img src="https://peprojects.dev/images/landscape.jpg" alt="">
			</picture>
		</div>

</project-card>


