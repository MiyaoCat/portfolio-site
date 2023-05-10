<?php 
	// $json = file_get_contents("data/php-exercises.json");
	// $formExercises = json_decode($json, true);
 	
	foreach ($formExercises as $forms) {
		if ($forms["type"] !== "generic-text" and $forms["type"] !== "language") {
			foreach ($forms["forms"] as $form) {
				if ($form["slug"] == $_GET["slug"]) { 
					
					$title1 = $form["title1"];
					$title2 = $form["title2"];
					$slug = $form["slug"];	
				}	
			}	
		}	
	}
?>

<?php include("form-exercises/php-forms/$slug.php"); ?>
