<?php 
	if ( $page == "home" or $page == "contact" or $page == "projects" or $page == "about" or $page == "resume") {

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
?>

<div class="heading">

	<div class="title1">
		<h1 class="screaming-voice"><?=$title1?></h1>
	</div>

	<div class="title2">
		<h1 class="screaming-voice"><?=$title2?></h1>
	</div>

</div>

