<?php if($type == "faqs") { ?>

	<div class="heading">
		<h2 class="header attention-voice"><?=ucwords($header)?></h2>
		<p class="teaser alert-voice"><?=$subHeader?></p>
	</div>	

	<?php  
		foreach($components as $component) {
			if($component["type"] == "accordion") {
				include("components/$component[type].php");
			}
		}
	?>

<?php } ?>