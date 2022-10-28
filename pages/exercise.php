<?php 
	$json = file_get_contents("data/exercises.json");
	$formExercises = json_decode($json, true);
 	
	foreach ($formExercises as $forms) {
		if ($forms["type"] !== "generic-text") {
			foreach ($forms["forms"] as $form) {
				if ($form["slug"] == $_GET["slug"]) { 
					
					$title1 = $form["title1"];
					$title2 = $form["title2"];
					$intro = $form["intro"];
					$slug = $form["slug"];	
				}	
			}	
		}	
	}
?>

<?php include("exercises/$slug.php"); ?>
