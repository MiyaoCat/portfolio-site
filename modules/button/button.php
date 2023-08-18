<?php 
	if ($page !== "module") {
		if ($sections["module"] == "button") {
			$buttonText = $sections["content"];
			$class = $sections["class"];
?>
			<a href="?page=<?=$class?>">
				<button class="<?=$class?>">
					<?=$buttonText?>	
				</button>
			</a>
		<?php } ?>	
	
<?php 
		if ($CaseStudyModule["module"] == "button") {
			$buttonText = $CaseStudyModule["content"];
			$link = $CaseStudyModule["link"];
		?>
			<a href="<?=$link?>" target="_blank">
				<button class="<?=$class?>">
					<?=$buttonText?>	
				</button>
			</a>
	<?php } ?>
<?php } ?>




<?php 
	//This is the for the button detail page
	if ($page == "module") {
		$json = file_get_contents("data/page-data/style-guide.json");
		$styleGuideData = json_decode($json, true);

		foreach ($styleGuideData["sections"] as $modules) {
			if ($modules["module"] == "button") {
				$buttonText = $modules["content"];
			}
		}	
?>
	<a href="?page=<?=$class?>">
		<button class="<?=$class?>">
			<?=$buttonText?>	
		</button>
	</a>

<?php }  ?>