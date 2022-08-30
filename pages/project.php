<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);

	foreach ($projects as $caseStudies) {
		if ($caseStudies["slug"] == $_GET["slug"]) {
			$caseStudy = $caseStudies;
		}
	}

	$title = $caseStudy["title"];
	$intro = $caseStudy["intro"];
	$url = $caseStudy["url"];
	
?>


<header class="project page-header">
	<h1 class="loud-voice"><?=$title?></h1>
</header>

<section class="project page-intro">

	<p class="normal-voice"><?=$intro?></p>
</section>


<section class="project module-intro">
	<?php 
		$caseStudyModules = $caseStudy["sections"];
		
		foreach ($caseStudyModules as $CaseStudymodule) {
		$module = $CaseStudymodule["module"];
	?>
		<?php include("modules/$module/$module.php"); ?>
	
	<?php } ?>
</section>