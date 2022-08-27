
<?php 
	$json = file_get_contents("data/page-data/resume.json");
	$resumeData = json_decode($json, true);

	$sections = $resumeData["sections"];
?>

<header class="resume page-header">
	<?php  
		include("modules/page-header/page-header.php");
	?>
</header>

<?php 
	foreach($sections as $section) {
		if ( $section["type"] == "experience" ) {
?>
	<section class="experience">

			<h2 class="loud-voice"><?=$section["heading"];?></h2>
			
			<ol>
				<?php foreach($section["jobs"] as $job) { ?>
					<li class="job">
						<div class="job-details">
							<h3 class="company"><?=$job["company"]?></h3>
							<h3 class="role"><?=$job["role"]?></h3>
							<h4 class="location"><?=$job["location"]?></h4>
							<p class="dates"><?=$job["startDate"]?> - <?=$job["endDate"]?></p>
						</div>
						<ul>
							<?php foreach($job["highlights"] as $highlight) { ?>
							<li><?=$highlight?></li>
							<?php } ?>
						</ul>
					</li>
				<?php } ?>
			</ol>

		<?php } ?>
	<?php } ?>

	</section>

	<section class="skill">
		<?php foreach($sections as $section) { ?>

		<ol>
		<?php 
			if ( $section["type"] == "skills" ) {
				echo "<h2 class='loud-voice'>" . $section["heading"] . "</h2>";
				foreach ($section["programs"] as $programs) {
		?>
			<li><?=$programs?></li>
				<?php } ?>
			<?php } ?>
		</ol>

		<?php } ?>

		

		<ol>
	</section>


	<section class="school">
		<?php foreach($sections as $section) { ?>
		<?php 
			if ( $section["type"] == "education" ) {
		?>
			<h2 class="loud-voice"><?= $section["heading"]?></h2>
			<li><?=$section["school"]?></li>
			<li><?=$section["major"]?></li>
			<?php } ?>
		</ol>
		
		<?php } ?>
	</section>


	

