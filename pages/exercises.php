<?php 
	$json = file_get_contents("data/exercises.json");
	$exercises = json_decode($json, true);
?>


<?php 
	foreach ($exercises as $exercise) { 
		// if ($exercise["type"] == "calculations") {
			$type = $exercise["type"];
			$title = $exercise["title"];
?>
			<form-exercise class="<?=$type?>">
				<h2 class="attention-voice"><?=$title?></h2>

				<?php foreach ($exercise["forms"] as $form) {
						$slug = $form["slug"];
				?>
					<ol class="exercises">
						<li>
							<a href="?page=exercise&slug=<?=$slug?>">
								<h3 class="normal-voice"><?=$form["title1"]?> <?=$form["title2"]?></h2>
							</a>
						</li>
					</ol>

				<?php } ?>	

			</form-exercise>
	
	<?php } ?>