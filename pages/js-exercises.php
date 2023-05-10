<?php 
	foreach ($exercises as $exercise) { 
		if ($exercise["type"] !== "generic-text" and $exercise["type"] !== "language") {
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
							<a href="?page=js-exercise&slug=<?=$slug?>" class="normal-voice">
								<h3 class="normal-voice"><?=$form["title1"]?> <?=$form["title2"]?></h3>
							</a>
						</li>
					</ol>

				<?php } ?>	

			</form-exercise>
		<?php } 
			elseif ($exercise["type"] == "generic-text") {
		?>
			<section class="generic-text"><?=$exercise["content"]?></section>
			<?php } ?>
<?php } ?>