<?php
	$languageType = "php";

	function isChecked($type, $name) {
		if ($type == $name) {
			return "checked";
		} 
	};

	if ( isset($_POST["language"]) ) {
		$languageType = $_POST["language"];
	};
	
	if ($languageType == 'php') {
		$json = file_get_contents("data/exercises.json");
		$exercises = json_decode($json, true);

		$page = "exercises";
	};

	if ($languageType == 'javascript') {
		$pageSetup = file_get_contents("data/js-exercises.json");
		$jsExercises = json_decode($json, true);

		$page = "js-exercises";
	};

	if ($languageType == 'vue') {
		$json = file_get_contents("data/v-exercises.json");
		$exercises = json_decode($json, true);

		$page = "v-exercises";
	};

?>

<?php 
	$json = file_get_contents("data/v-exercises.json");
	$exercises = json_decode($json, true);
?>

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
							<a href="?page=v-exercise&slug=<?=$slug?>" class="normal-voice">
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