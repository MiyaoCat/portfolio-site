<?php if($type == "clients") { ?>

	<h2 class="header attention-voice"><?=ucwords($header)?></h2>
	<p class="teaser alert-voice"><?=$subHeader?></p>		

	<div class="review-card-wrap">

		<?php  
			foreach($components as $component) {
				if( $component["type"] == "icon" && $component["name"] == "arrow-left") {
		?>
				<left-arrow>
					<?php 
						include("./assets/icons/arrow-left.svg");
					?>
				</left-arrow>

				<?php } ?>
		<?php } ?>
			
			<?php  
				foreach($components as $component) {
					if($component["type"] == "client-review-card") {
						include("components/$component[type].php");
					}
				}
			?>
		
		<?php  
			foreach($components as $component) {
				if( $component["type"] == "icon" && $component["name"] == "arrow-right") {
		?>
				<right-arrow>
					<?php 
						include("./assets/icons/arrow-right.svg");
					?>
				</right-arrow>

				<?php } ?>
		<?php } ?>
			

	</div>

<?php } ?>