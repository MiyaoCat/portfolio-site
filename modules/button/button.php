<?php 
	if ($sections["module"] == "button") {
		$buttonText = $sections["content"];
		$class = $sections["class"];
	}
?>

<button class="<?=$class?>">
	<a href="?page=<?=$class?>">
		<?=$buttonText?>
	</a>
</button>
