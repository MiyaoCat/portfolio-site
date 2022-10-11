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


<?php 
	$caseStudyModules = $caseStudy["sections"];
	
	foreach ($caseStudyModules as $CaseStudyModule) {
	$module = $CaseStudyModule["module"];
	// $content = $CaseStudymodule["content"];
?>
	<section class="<?=$module?>">
	<?php include("modules/$module/$module.php"); ?>
	</section>
<?php } ?>


<section class="project-url">
	<a href="<?=$url?>" target="_blank">See the Live Project</a>
</section>