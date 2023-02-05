<?php  
	$json = file_get_contents("data/site-footer.json");
	$footerData = json_decode($json, true);
?>

<div class="footer-top">
	
	<div class="site-map">
		<?php  
			foreach ($footerData as $component) { 
				if($component["type"] == "site-map") { 
					$heading = $component["heading"]; ?>
						
						<ul class=<?=$heading?>>
							<h4 class="calm-voice-bold">
								<?=ucfirst($heading)?>			
							</h4>

							<?php  
								foreach($component["items"] as $item) {
									$text = $item['text'];
							?>
								<li>
									<p class="quiet-voice"><?=$text;?></p>
								</li>
							<?php } ?>
						</ul>
		
				<?php } ?>
		<?php } ?>

		<!-- SUBSCRIBE-BOX -->
		<?php  
			foreach ($footerData as $component) { 
				if($component["type"] == "subscribe-box") { 
					include("components/$component[type].php");
				}	
			} 
		?>
	</div>

</div>

<div class="footer-bottom">

	<div class="logo">
		<?php  
			foreach ($footerData as $component) { 
				if($component["type"] == "logo") { 
					include($component["source"]);
				}
			}	
		?>
	</div>

	<ul class="legal">
		<?php  
			foreach ($footerData as $component) { 
				if($component["type"] == "legal") { 
					foreach($component["items"] as $item) { 
						$text = $item['text'];
		?>
				<li>
					<p class="calm-voice"><?=$text?></p>
				</li>
					<?php } ?>
				<?php } ?>
			<?php } ?>			
	</ul>

	<ul class="socials">
		<?php	foreach($component["items"] as $social) { ?>
			<li>
				<?php include($social['source']) ?>
			</li>
		<?php } ?>
	</ul>

</div>


















