<?php 
	$json = file_get_contents("data/page-data/goals.json");
	$goalsData = json_decode($json, true);

	$sections = $goalsData["sections"];
?>

<?php 
	foreach ($sections as $section) {
		$heading = $section["heading"];
		$class = $section["class"];
?>
			
		<div class="goals-section <?=$class?>">
			<sub-header class="goals">
				<h2 class="attention-voice"><?=$heading;?></h2>
			</sub-header>
			
			<ol class="goals">
				<?php foreach ($section["goals"] as $goals) { ?>
					<li><p class="normal-voice"><?=$goals?></p></li>		
				<?php } ?>
			</ol>

		</div>
<?php } ?>

