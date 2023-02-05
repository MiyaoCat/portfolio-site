<?php 
	if($component["type"] == "client-review-card") { 
			$rating = $component['rating'];
			$review = $component['review'];
			$name = $component['name'];
?>

	<review-card>
		
		<?php if ($rating) { ?>
		<star-rating>
			<?php 
				foreach( [1, 2, 3, 4, 5] as $stars) {
					include($rating); 
				}
			 ?>
		</star-rating>
		<?php } ?>

		<div class="image-review-wrap">
			<?php if ( isset($component['image']) ) { ?>		
				<div class="image">
					<img src="<?=$component['image']?>" alt="">
				</div>
			<?php } ?>	
			
			<div class="client-flex">
				<p class="review normal-voice"><?=$review?></p>
			
				<client-details>
					<?php if( isset($component['avatar']) ) { ?>
						<img src="<?=$component['avatar']?>" alt="picture of client">
					<?php	} ?>
					
					<div class="contact">
						<p class="calm-voice-bold"><?=$name?></p>
						<?php if ( isset($component['role']) ) { ?>
						<p class="whisper-voice"><?=$component['role']?></p>
								<?php	} ?>
					</div>
				</client-details>
			</div>

		</div>

	</review-card>

<?php } ?>

