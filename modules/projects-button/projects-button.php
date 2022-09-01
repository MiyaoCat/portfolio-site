<?php 
	if ($sections["module"] == "projects-button") {
		$buttonText = $sections["content"];
	}
?>

<a href="?page=projects" class="<?=$module?>">
	<div class="button">
		<p class="normal-voice"><?=$buttonText?></p>
	</div>
</a>
