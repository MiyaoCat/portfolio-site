<div class="subscribe-box">
<?php 
	if($component["type"] == "subscribe-box") { 
		$heading = $component["heading"];
		$placeHolder = $component["placeholder-text"];
		$text = $component["text"];
?>
	
		<h4 class="calm-voice-bold"><?=$heading?></h4>

		<div class="email-input">
			<input type="email" placeholder="<?=ucfirst($placeHolder)?>">

			<button>
				<?php include("./assets/icons/arrow-right-small.svg") ?>	
			</button>
		</div>
		
		<p class="blurb whisper-voice"><?=$text?></p>
<?php } ?>
</div>