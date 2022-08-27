<?php 
	$json = file_get_contents("data/projects.json");
	$projects = json_decode($json, true);



	
?>

<projects-spotlight class="home">
	<?php foreach ($projects as $project) { ?>
	<ul>
		<?php 
				if ($project["feature"])  {
				$title = $project["title"]; 
		?>
			<li>
				<h2 class="loud-voice"><?=$title?></h2>
			</li>
		<?php } ?>
	</ul>
<?php } ?>
</projects-spotlight>
