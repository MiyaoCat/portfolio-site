<?php 
	$json = file_get_contents("data/form-exercises.json");
	$exercises = json_decode($json, true);
 
	foreach ($exercises as $exercise) {
		if ($exercise["slug"] == $_GET["slug"]) { 
			
			$title = $exercise["title1"];
			$intro = $exercise["intro"];
			$slug = $exercise["slug"];	
		}	
	}
?>

<?php include("modules/page-header/page-header.php"); ?>


<section>
	<?php include("form-exercises/$slug.php"); ?>
</section>
