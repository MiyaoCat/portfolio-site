<?php 
	if ($page !== "project") {
		$content = $sections["content"] ?? "<p class='normal-voice'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit deserunt eius dicta suscipit, ea, amet quidem laboriosam accusamus. Minus odit ratione iure architecto aperiam inventore? Laudantium optio eligendi esse necessitatibus molestiae debitis, tenetur odio nostrum ea quos, ipsam, laborum sint, natus temporibus officiis consequuntur corrupti veritatis nihil sequi neque!</p>";
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

