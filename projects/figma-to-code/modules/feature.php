<?php if($type == "feature") { ?>
	
	<div class="main-content">
		
		<?php if ( isset($module['sub-header2']) ) { ?>
			<p class="alert-voice"><?=$module['sub-header2']?></p>
		<?php } ?>

		<h2 class="sub-header attention-voice"><?=ucwords($header)?></h2>
		<p class="info alert-voice"><?=$subHeader?></p>
		

		
			<?php 
				foreach($components as $component) {
					if($component["type"] == "image-placeholder") {
			?>
						<div class="image-placeholder">
							<?php include("components/$component[type].php"); ?>		
						</div>	

					<?php } ?>
				<?php } ?>
		
	</div>

	<div class="feature-cards">
		<?php 
			foreach($components as $component) {
				if($component["type"] == "feature-list") {
					include("components/$component[type].php");
				}
			} 
		?>
	</div>

<?php } ?>