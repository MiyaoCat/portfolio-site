
<?php 
	if($type == "hero") { 
		$background = $module['background'];
?>

	<h1 class="header screaming-voice"><?=ucwords($header)?></h1>
	<p class="teaser alert-voice"><?=$subHeader?></p>

	<?php 
		foreach($components as $component) { 
			$type = $component["type"];
	?>

		<div class=<?=$type?>>	
			<?php include("components/$type.php"); ?>
		<?php } ?>
		</div>

<?php } ?>






	