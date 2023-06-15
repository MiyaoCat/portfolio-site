<?php 
	$moduleName = $_GET["slug"]; 
?>

<section class="<?=$page?> <?=$moduleName?>">
	<h2 class="loud-voice"><?= ucwords($moduleName) ?> Module</h2>
	<?php 
		include("modules/$moduleName/$moduleName.php");
	?>
</section>

<a class="back-button" href="?page=style-guide">Back</a>