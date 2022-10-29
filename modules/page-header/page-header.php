<?php 
	if ($page == "home" or $page == "contact" or $page == "projects" or $page == "about" or $page == "resume" or $page == "style-guide" or $page == "module" or $page == "404") {

		$title1 = $pageData["title1"] ?? "Hello,"; 
		$title2 = $pageData["title2"] ?? "World!"; 
		$slug = $pageData["slug"];
	} 

	elseif ($page == "project") {
		$json = file_get_contents("data/projects.json");
		$projects = json_decode($json, true);
	
		foreach ($projects as $caseStudies) {
			if ($caseStudies["slug"] == $_GET["slug"]) {
				$title1 = $caseStudies["title1"];
				$title2 = $caseStudies["title2"];
				$slug = $caseStudies["slug"];
			}
		}
	}	

	elseif ($page == "exercises") {
		$json = file_get_contents("data/page-data/exercises.json");
		$exercises = json_decode($json, true);

		$title1 = $exercises["title1"];
		$title2 = $exercises["title2"];
		$slug = $exercises["slug"];
	} 

	elseif ($page == "exercise") {
		$json = file_get_contents("data/exercises.json");
		$formExercises = json_decode($json, true);

		foreach ($formExercises as $forms) {
			if ($forms["type"] !== "generic-text") {
				foreach ($forms["forms"] as $form) {
					if ($form["slug"] == $_GET["slug"]) {
						
						$title1 = $form["title1"];
						$title2 = $form["title2"];
						$slug = $form["slug"];
					}
				}
			}	
		}
	} 

	else {
		$page == "404";
		$errorPage = file_get_contents("data/page-data/404.json");
		$errorPageData = json_decode($errorPage, true);
		
		$title1 = $errorPageData["title1"];
		$title2 = $errorPageData["title2"];
		$slug = $errorPageData["slug"];
	}
	



	
?>

<div class="<?=$slug?> heading">

	<div class="title1">
		<h1 class="screaming-voice"><?=$title1?></h1>
	</div>

	<div class="title2">
		<h1 class="screaming-voice"><?=$title2?></h1>
	</div>

</div>

