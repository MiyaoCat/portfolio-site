<?php 
	$json = file_get_contents("data/form-exercises.json");
	$exercises = json_decode($json, true);
?>

<?php  
	$title = "My Form Exercises";
	include("modules/page-header/page-header.php");
?>

<section class="exercises-grid">
	<ul class="project-list">
		<?php foreach ($exercises as $exercise) { 
			$title1 = $exercise["title1"];
			$intro = $exercise["intro"];
			$conclusion = $exercise["conclusion"];
			$slug = $exercise["slug"];
		?>
			<li class="exercise">
				<h2 class="attention-voice"><a href="?page=exercise&slug=<?=$slug?>"><?=$title1?></a></h2>
				<h3></h3>
				<p class="quiet-voice"><?=$intro?></p>
				<p><?=$conclusion?></p>
				<a href="?page=exercise&slug=<?=$slug?>">See it!</a>
			
			</li>
		<?php } ?>
	</ul>
</section>
