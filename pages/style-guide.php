<?php 
	$json = file_get_contents("data/page-data/style-guide.json");
	$pageData = json_decode($json, true);

	foreach ($pageData["sections"] as $sections) {
		$module = $sections["module"];
		$title1 = $sections["title1"];
		$title2 = $sections["title2"];		
?>

	<section class="<?=$page?> <?=$module?>">
		<h2 class="loud-voice"><?=$title1?> <?=$title2?></h2>
		
		<?php include("modules/$module/$module.php"); ?>
		<?php styleGuideDetailLink($module, $pageData["slug"]); ?>
	</section>

<?php } ?>
	

<section class="typography">
	<h2 class="loud-voice">Typography</h2>
	<p class="normal-voice">aA bB cC dD eE fF gG hH iI jJ kK lL  mM nN oO pP qQ rR sS tT uU vV wW xX yY zZ</p>
	<p class="normal-voice">1234567890  !@#$%^&*()_-+=>?/</p>
</section>
