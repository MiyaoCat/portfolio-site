<?php 
	if ($sections["module"] == "contact-button") {
		$buttonText = $sections["content"];
	}
?>

<button>
	<a href="?page=contact">
		<p class="normal-voice"><?=$buttonText?></p>
	</a>
</button>