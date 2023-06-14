<?php 
	//This is for the separate figure page (after clicking 'detail') within the style guide
	if ($page == "module") {
		if ($moduleName == "figure") {
			$json = file_get_contents("data/page-data/style-guide.json");
			$styleGuideData = json_decode($json, true);

			foreach ($styleGuideData["sections"] as $modules) {
				if ($modules["module"] == "figure") {
					$filePath = $modules["filePath"];
					$altText = $modules["altText"];
				}
			}
		}		
?>
	<figure>
		<picture>
			<img src="<?=$filePath?>" alt="<?=$altText?>">
		</picture>
	</figure>	
<?php } ?>

<?php 
	if ($page !== "project" && $page !== "module") {

		$filePath = $sections["filePath"];
		$altText = $sections["altText"];
?>
	<figure>
		<picture>
			<img src="<?=$filePath?>" alt="<?=$altText?>">
		</picture>
	</figure>	
<?php } ?>

<?php 
	if ($page == "project") {

		$filePath = $CaseStudyModule["filePath"];
		$altText = $CaseStudyModule["altText"];
		$caption = $CaseStudyModule["caption"];
?>

	<figure>
		<picture>
			<img src="<?=$filePath?>" alt="<?=$altText?>">
		</picture>

		<image-caption>
			<p class="calm-voice"><?=$caption?></p>
		</image-caption>
	</figure>	

<?php } ?>