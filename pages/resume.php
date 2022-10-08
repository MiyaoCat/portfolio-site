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
	<section class="experience">

			<h2 class="loud-voice"><?=$section["heading"];?></h2>
			
			<ol>
				<?php foreach($section["jobs"] as $job) { 
					$company = $job["company"];
					$role = $job["role"];
					$location = $job["location"];
					$startDate = $job["startDate"];
					$endDate = $job["endDate"];
				?>
					<li class="job">
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
					</li>
				<?php } ?>
			</ol>

		<?php } ?>
	<?php } ?>

	</section>

	
		<?php 
			foreach($sections as $section) { 
				if ( $section["type"] == "skills" ) {
		?>

			<section class="skill">
				<ol>
					<?php 
						echo "<h2 class='loud-voice'>" . $section["heading"] . "</h2>";
						foreach ($section["programs"] as $programs) {
					?>
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
			<ol>	
				<h2 class="loud-voice"><?= $section["heading"]?></h2>
				<li><?=$section["school"]?></li>
				<li><?=$section["major"]?></li>
			</ol>
				<?php } ?>
			<?php } ?>
		</section>
	

	

