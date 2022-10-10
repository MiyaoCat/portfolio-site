<?php
	if ($page == "project") { 
	$content = $CaseStudymodule["content"] ?? "<p>This is generic content text for the generic-text module. Hope you enjoyed reading!</p>";
?>

<generic-text>
	<p class="normal-voice"><?=$content?></p>
</generic-text>


<?php } ?>

