
<?php 
	if($component["type"] == "button") { 
		$buttonStyle = $component["style"];
		$buttonText = $component["text"];
		$buttonSize = $component["size"];
		$buttoncorners = $component["corners"];
		$buttonArrow = $component["arrow"];

		
			$arrowDirection = $component["arrow-direction"];
?>
	<button class="<?=$buttonStyle?> <?=$buttonSize?> <?=$buttoncorners?> <?=$arrowDirection?>">
	
			<div class="button-text"><?=$buttonText?></div>
			
		<?php if( $component["arrow"] != "" ) {?>	
			<div class="arrow">	
				<?php	include($component["arrow"]); ?>
			</div>	
		<?php } ?>

	</button>

<?php } ?>