<?php 
	$json = file_get_contents("data/exercises.json");
	$exercises = json_decode($json, true);
?>


<?php 
	foreach ($exercises as $exercise) { 
		if ($exercise["type"] == "calculations") {
			$type = $exercise["type"];
			
?>
			<section class="<?=$type?>">

				<?php foreach ($exercise["forms"] as $form) {
						$slug = $form["slug"];
				?>
					<a href="?page=exercise&slug=<?=$slug?>">slug</a>
					<h2><?=$form["title1"]?> <?=$form["title2"]?></h2>

				<?php } ?>	

			</section>

		<?php } ?>
	<?php } ?>