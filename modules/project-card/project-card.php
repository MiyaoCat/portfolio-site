<?php 
	//Variable sets carried over from projects.php page
	$title = $project["title"];
	$slug = $project["slug"];
	$intro = $project["intro"];
	$image = $project["image"];
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
				<img src="<?=$image?>" alt="image for <?=$title?>">
			</picture>
		</div>

</project-card>


