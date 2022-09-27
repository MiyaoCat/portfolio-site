<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);

	foreach ($projects as $caseStudies) {
		if ($caseStudies["slug"] == $_GET["slug"]) {
			$caseStudy = $caseStudies;
		}
	}

	$title = $caseStudy["title1"];
	$intro = $caseStudy["intro"];
	$url = $caseStudy["url"];
?>



<header class="<?=$page?> page-header">
	<h1 class="screaming-voice"><?=$title?></h1>
</header>

<section class="<?=$page?> page-intro">
	<p class="normal-voice"><?=$intro?></p>
</section>



	<?php 
		$caseStudyModules = $caseStudy["sections"];
		
		foreach ($caseStudyModules as $CaseStudymodule) {
		$module = $CaseStudymodule["module"];
	?>
		<section class="<?=$module?>">
		<?php include("modules/$module/$module.php"); ?>
		</section>
	<?php } ?>


<section class="project-url">
	<a href="<?=$url?>" target="_blank">See the Live Project</a>
</section>