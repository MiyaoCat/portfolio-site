<?php 
	if ($page == "home" or $page == "contact" or $page == "projects" or $page == "about" or $page == "resume" or $page == "style-guide" or $page == "module") {

		$title1 = $pageData["title1"] ?? "Hello,"; 
		$title2 = $pageData["title2"] ?? "World!"; 

	} elseif ($page == "project") {
			$json = file_get_contents("data/projects.json");
			$projects = json_decode($json, true);
		
			foreach ($projects as $caseStudies) {
				if ($caseStudies["slug"] == $_GET["slug"]) {
					$title1 = $caseStudies["title1"];
					$title2 = $caseStudies["title2"];
				}
			}
		}	

		elseif ($page == "exercises") {
			$json = file_get_contents("data/page-data/exercises.json");
			$exercises = json_decode($json, true);

			$title1 = $exercises["title1"];
			$title2 = $exercises["title2"];
		} 

		elseif ($page == "exercise") {
			$json = file_get_contents("data/exercises.json");
			$formExercises = json_decode($json, true);

			foreach ($formExercises as $forms) {
				foreach ($forms["forms"] as $form) {
					if ($form["slug"] == $_GET["slug"]) {
						$title1 = $form["title1"];
						$title2 = $form["title2"];
					}
				}	
			}
		}
?>

<div class="heading">

	<div class="title1">
		<h1 class="screaming-voice"><?=$title1?></h1>
	</div>

	<div class="title2">
		<h1 class="screaming-voice"><?=$title2?></h1>
	</div>

</div>

