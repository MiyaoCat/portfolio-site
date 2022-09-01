<?php 
	if ($sections["module"] == "contact-button") {
		$buttonText = $sections["content"];
	}
?>

<a href="?page=contact" class="<?=$module?>">
	<div class="button">
		<p class="normal-voice"><?=$buttonText?></p>
	</div>
</a>
