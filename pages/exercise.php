<?php 
	$json = file_get_contents("data/exercises.json");
	$exercises = json_decode($json, true);
 
	foreach ($exercises as $exercise) {
		if ($exercise["slug"] == $_GET["slug"]) { 
			
			$title1 = $exercise["title1"];
			$title2 = $exercise["title2"];
			$intro = $exercise["intro"];
			$slug = $exercise["slug"];	
		}	
	}
?>

<?php 
	$title1 = $exercise["title1"];
	include("modules/page-header/page-header.php"); ?>


<section>
	<?php include("exercises/$slug.php"); ?>
</section>
