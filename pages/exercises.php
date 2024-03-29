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

		$page = "exercise";
	};

	if ($languageType == 'javascript') {
		$json = file_get_contents("data/js-exercises.json");
		$exercises = json_decode($json, true);

		$page = "js-exercise";
	};

	if ($languageType == 'vue') {
		$json = file_get_contents("data/v-exercises.json");
		$exercises = json_decode($json, true);

		$page = "v-exercise";
	};
?>

<div id="languages">
	<form method="POST">
		<label class="alert-voice">
			<input 
				type="radio" 
				name="language" 
				value="php" 
				id="php" 
				<?=isChecked($languageType, "php")?> 
				> PHP
		</label>
		<label class="alert-voice">
			<input 
				type="radio" 
				name="language" 
				value="javascript" 
				id="javascript" 
				<?=isChecked($languageType, "javascript")?>
				> JavaScript
		</label>
		<label class="alert-voice">
			<input 
				type="radio"
				name="language" 
				value="vue" 
				id="vue" 
				<?=isChecked($languageType, "vue")?>
				> Vue
		</label>

		<button type="submit" name="submitted">Select</button>
	</form>
</div>


<?php 
	foreach ($exercises as $exercise) { 
		if ($exercise["type"] !== "generic-text" and $exercise["type"] !== "language") {
			$type = $exercise["type"];
			$header = $exercise["header"];
?>
			<form-exercise class="<?=$type?>">
				<h2 class="attention-voice"><?=$header?></h2>
				
				<ol class="exercises">
					<?php foreach ($exercise["forms"] as $form) {
						$slug = $form["slug"];
					?>
						<li>
							<a href="?page=<?=$page?>&slug=<?=$slug?>">
								<h3 class="normal-voice">
									<?=$form["title1"]?> <?=$form["title2"]?>
								</h3>
							</a>
						</li>	
					<?php } ?>	
				</ol>

			</form-exercise>
		<?php } 
			elseif ($exercise["type"] == "generic-text") {

		?>
			<section class="generic-text"><?=$exercise["content"]?></section>
			<?php } ?>
	<?php } ?>




