<?php
	$languageType = "javascript";

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
		<label>
			<input type="radio" name="language" value="php" id="php" <?=isChecked($languageType, "php")?> > PHP
		</label>
		<label>
			<input type="radio" name="language" value="javascript" id="javascript" <?=isChecked($languageType, "javascript")?>> JavaScript
		</label>
		<label>
			<input type="radio" name="language" value="vue" id="vue" <?=isChecked($languageType, "vue")?>> Vue
		</label>

		<button type="submit" name="submitted">Submit</button>
	</form>