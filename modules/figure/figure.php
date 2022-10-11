<?php 
	if ($page !== "project") {

		$filePath = $sections["filePath"];
		$altText = $sections["altText"];
?>

<figure>
	<picture>
		<img src="<?=$filePath?>" alt="<?=$altText?>">
	</picture>
</figure>	

<?php 
	} elseif ($page == "project") {

	$filePath = $CaseStudyModule["filePath"];
	$altText = $CaseStudyModule["altText"];
	$caption = $CaseStudyModule["caption"];
	$figureHeading = $CaseStudyModule["figureHeading"];

?>

<figure>
	<!-- <h4 class="attention-voice"><?=$figureHeading?></h4> -->
	
	<picture>
		<img src="<?=$filePath?>" alt="<?=$altText?>">
	</picture>

	<image-caption>
		<p class="calm-voice"><?=$caption?></p>
	</image-caption>
</figure>	

<?php } ?>