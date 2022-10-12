<?php 
	$json = file_get_contents("data/page-data/resume.json");
	$resumeData = json_decode($json, true);

	$sections = $resumeData["sections"];
?>

<header class="<?=$page?> page-header">
	<?php include("modules/page-header/page-header.php");?>
</header>


<?php 
	foreach($sections as $section) {
		if ( $section["type"] == "experience" ) {
?>

	<sub-header class="experience">
		<h2 class="loud-voice"><?=$section["heading"];?></h2>
	</sub-header>
	
		<?php
			foreach($section["jobs"] as $job) { 
				$company = $job["company"];
				$slug = $job["slug"];
				$role = $job["role"];
				$location = $job["location"];
				$startDate = $job["startDate"];
				$endDate = $job["endDate"];
		?>
				
				<section class="job <?=$slug?>">

					<div class="job-details">
						<h3 class="company"><?=$company?></h3>
						<h3 class="role"><?=$role?></h3>
						<h4 class="location"><?=$location?></h4>
						<p class="dates"><?=$startDate?> - <?=$endDate?></p>
					</div>

					<ul>
						<?php foreach($job["highlights"] as $highlight) { ?>
						<li class="highlights"><?=$highlight?></li>
						<?php } ?>
					</ul>

				</section>

			<?php } ?>

		<?php } ?>
	<?php } ?>


	
<?php 
	foreach($sections as $section) { 
		if ( $section["type"] == "skills" ) {
?>
			<sub-header class="skill">
				<h2 class="loud-voice"><?=$section["heading"]?></h2>
			</sub-header>
			
			<section class="skill">
				<ol>					
					<?php foreach ($section["programs"] as $programs) { ?>
						
						<li><?=$programs?></li>

					<?php } ?>	
				</ol>

		<?php } ?>
	<?php } ?>
			
			</section>


<?php 
	foreach($sections as $section) { 
		if ( $section["type"] == "education" ) {
?>
	<section class="school">
		<h2 class="loud-voice"><?=$section["heading"]?></h2>

		<ol>	
			<li class="uni"><?=$section["school"]?></li>
			<li><?=$section["major"]?></li>
		</ol>
		
		<ol>	
			<li class="uni"><?=$section["school2"]?></li>
			<li><?=$section["major2"]?></li>
		</ol>

		<?php } ?>
	<?php } ?>

	</section>
	
<?php 
	foreach($sections as $section) { 
		if ( $section["type"] == "languages" ) {
?>	
			
			<section class="languages">
				<h2 class="loud-voice"><?=$section["heading"]?></h2>
				<ol>					
					<?php foreach ($section["languages"] as $language) { ?>
						
						<li><?=$language?></li>

					<?php } ?>	
				</ol>

		<?php } ?>
	<?php } ?>
			
			</section>

