<?php 
	$title1 = $pageData["title1"] ?? "Hello,"; 
	$title2 = $pageData["title2"] ?? "World!"; 
?>

<div class="<?=$page?> heading">

	<div class="<?=$page?> title1">
		<h1 class="screaming-voice"><?=$title1?></h1>
	</div>

	<div class="<?=$page?> title2">
		<h1 class="screaming-voice"><?=$title2?></h1>
	</div>

</div>