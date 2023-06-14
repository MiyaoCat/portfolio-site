<?php 
	$moduleName = $_GET["slug"]; 
?>

<section class="<?=$page?> <?=$moduleName?>">
	<?php 
		include("modules/$moduleName/$moduleName.php");
	?>
</section>

<a class="back-button" href="?page=style-guide">Back</a>