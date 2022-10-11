<?php 
	if ($page !== "project") {
		$content = $sections["content"] ?? "<p>This is generic content text for the generic-text module. Hope you enjoyed reading!</p>";
?>

		<generic-text>
			<p class="normal-voice"><?=$content?></p>
		</generic-text>



<?php
	} elseif ($page == "project") { 
		$content = $CaseStudyModule["content"] ?? "<p>This is generic text for the individual project pages. Hope you enjoyed reading!</p>";
		$subHeader = $CaseStudyModule["subHeader"] ?? "Section Header";

?>
		<sub-header>
			<p class="loud-voice"><?=$subHeader?></p>
		</sub-header>
		<generic-text>
			<p class="normal-voice"><?=$content?></p>
		</generic-text>

<?php } ?>

