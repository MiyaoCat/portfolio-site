<?php 
	if ($sections["module"] == "button") {
		$buttonText = $sections["content"];
		$class = $sections["class"];
	}
?>

<button class="<?=$class?>">
	<a href="?page=projects">
		<p class="normal-voice"><?=$buttonText?></p>
	</a>
</button>
