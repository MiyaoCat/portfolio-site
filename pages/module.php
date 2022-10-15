<?php 
	$moduleName = $_GET["slug"]; 
?>

<section class="<?=$page?> <?=$moduleName?>">
	<?php 
		include("modules/$moduleName/$moduleName.php");
	?>
</section>
