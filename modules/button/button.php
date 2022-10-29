<?php 
	if ($sections["module"] == "button") {
		$buttonText = $sections["content"];
		$class = $sections["class"];
	}
?>
<a href="?page=<?=$class?>">
	<button class="<?=$class?>">
		<?=$buttonText?>	
	</button>
</a>