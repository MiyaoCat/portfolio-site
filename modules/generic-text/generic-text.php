<?php  
	$content = $module["content"] ?? "<p>This is generic content text for the generic-text module. Hope you enjoyed reading!</p>
	
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores, fugiat repellendus explicabo perferendis, omnis beatae expedita accusantium tempora laborum.</p>";
?>

<generic-text class="<?=$page?>">
	<p class="normal-voice"><?=$content?></p>
</generic-text>


