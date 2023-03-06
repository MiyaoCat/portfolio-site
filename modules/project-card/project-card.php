<?php 
	if ($page == "projects") {

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
					//Takes you to individual project page  
					if ($slug !== "exercises" && $slug !== "v-exercises") { ?>

						<a href="?page=project&slug=<?=$slug?>">
							<h2 class="loud-voice"><?=$title1?> <?=$title2?></h2>
						</a>

				<?php } ?>
			
				<?php  
					//Takes you to form exercises page, which does not have a slug
					if ($slug == "exercises") { ?>
						
						<a href="?page=exercises">
							<h2 class="loud-voice"><?=$title1?> <?=$title2?></h2>
						</a>

				<?php } ?>

				<?php  
					//Takes you to form v-exercises page, which does not have a slug
					if ($slug == "v-exercises") { ?>
						
						<a href="?page=v-exercises">
							<h2 class="loud-voice"><?=$title1?> <?=$title2?></h2>
						</a>

				<?php } ?>
			</div>
			
			<ul class="languages">
				<?php 
					if ($page == "projects") {
						foreach ($project["languages"] as $languages) { 
					?>
					<li class="calm-voice"><?=$languages?></li>
				<?php } } ?>
			</ul>
			
			<div class="intro">
				<p class="normal-voice"><?=$intro?></p>
			</div>
		</div>

		<div class="project-images">
			<picture class="project-image">

				<?php  
					if ($slug !== "exercises" && $slug !== "v-exercises") { ?>

					<a href="?page=project&slug=<?=$slug?>">
						<img src="<?=$image?>" alt="image for <?=$title1?> <?=$title2?>">
					</a>
				<?php } ?>	

				<?php  
					if ($slug == "exercises") { ?>

					<a href="?page=exercises">
						<img src="<?=$image?>" alt="image for <?=$title1?> <?=$title2?>">
					</a>
				<?php } ?>	

				<?php  
					if ($slug == "v-exercises") { ?>

					<a href="?page=v-exercises">
						<img src="<?=$image?>" alt="image for <?=$title1?> <?=$title2?>">
					</a>
				<?php } ?>	

			</picture>
		</div>
	</project-card>
<?php } ?>

<?php 
	if ($page == "style-guide" OR $page == "module") {
		$json = file_get_contents("data/page-data/style-guide.json");
		$styleGuideData = json_decode($json, true);

		foreach ($styleGuideData["sections"] as $modules) {
			if ($modules["module"] == "project-card") {
				
				$title1 = $modules["title1"];
				$title2 = $modules["title2"];
				$slug = $modules["slug"];
				$intro = $modules["intro"];
				$image = $modules["image"];
			}
		}
?>

	<project-card>
		<div class="project-details">
			<div class="project-title">	
				<a href="?page=module&slug=<?=$slug?>">
					<h2 class="loud-voice"><?=$title1?> <?=$title2?></h2>
				</a>
			</div>

			<ul class="languages">
				<?php 
						foreach ($modules["languages"] as $languages) { 
					?>
					<li class="calm-voice"><?=$languages?></li>
				<?php }  ?>
			</ul>
			
			<div class="intro">
				<p class="normal-voice"><?=$intro?></p>
			</div>
		</div>	

		<div class="project-images">
			<picture class="project-image">
				<a href="?page=module&slug=<?=$slug?>">
					<img src="<?=$image?>" alt="image for <?=$title1?> <?=$title2?>">
				</a>
			</picture>
		</div>
	</project-card>

<?php } ?>