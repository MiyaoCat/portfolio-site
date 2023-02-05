<?php if($type == "center-content") { ?>

		<div class="icon">
			<?php  
				 foreach($components as $component) {
						if($component["type"] == "icon") {
							include("$component[source]");
						}
					}
			?>
		</div>

		<?php if ( isset($module['sub-header2']) ) { ?>
			<p class="alert-voice"><?=$module['sub-header2']?></p>
		<?php } ?>

		<h2 class="sub-header attention-voice"><?=ucwords($header)?></h2>
		<p class="info alert-voice"><?=$subHeader?></p>
		
			<?php 
				foreach($components as $component) {
					if($component["type"] == "video-placeholder") {
				?>		
					<div class="video">
						<?php include("components/$component[type].php");?>
					</div>
					<?php } ?>
				<?php } ?>
			
			<?php 
				foreach($components as $component) {
					if($component["type"] == "feature-list") {
			?>
					<?php include("components/$component[type].php"); ?>	
				
					<?php } ?>
				<?php } ?>
				
			<?php 
				foreach($components as $component) {
					if($component["type"] == "button") {
			?>
					<?php include("components/$component[type].php"); ?>	
				
					<?php } ?>
				<?php } ?>
			
<?php } ?>	