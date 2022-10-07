<?php 
	//Variable sets carried over from projects.php page
	$title1 = $project["title1"];
	$title2 = $project["title2"];
	$slug = $project["slug"];
	$intro = $project["intro"];
	$image = $project["image"];
?>

<project-card class="<?=$slug?>">
	
		<div class="project-details">
			<div class="project-title">
			
				<?php  
					if ($slug !== "exercises") { ?>
			
						<a href="?page=project&slug=<?=$slug?>">
							<h2 class="loud-voice"><?=$title1?></h2>
						</a>
				<?php } ?>
			
				<?php  
					if ($slug == "exercises") { ?>
						
						<a href="?page=exercises">
							<h2 class="loud-voice"><?=$title1?></h2>
						</a>
				<?php } ?>
			
			</div>
			
			<ul class="languages">
			
				<?php foreach ($project["languages"] as $languages) { ?>
					<li class="calm-voice"><?=$languages?></li>
				<?php } ?>
			
			</ul>
			
			<div class="intro">
				<p class="normal-voice"><?=$intro?></p>
			</div>
		</div>

		<div class="project-images">
			<picture class="project-image">
				<img src="<?=$image?>" alt="image for <?=$title1?> <?=$title2?>">
			</picture>
		</div>

</project-card>


