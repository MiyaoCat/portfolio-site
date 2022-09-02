<?php 
	$json = file_get_contents("data/exercises.json");
	$formExercises = json_decode($json, true);
 
	foreach ($formExercises as $form) {
		if ($form["slug"] == $_GET["slug"]) { 
			
			$title1 = $form["title1"];
			$title2 = $form["title2"];
			$intro = $form["intro"];
			$slug = $form["slug"];	
		}	
	}
?>


<section>
	<?php include("exercises/$slug.php"); ?>
</section>
