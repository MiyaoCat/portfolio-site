<?php 
	$title1 = $title1 ?? "Hello,"; 
	$title2 = $title2 ?? "World!";
?>

<div class="heading">
	<!-- <div class='heading-wrap'> -->
		<div class="<?=$title1?> title1">
			<h1 class="screaming-voice"><?=$title1?></h1>
		</div>
		<div class="<?=$title1?> title2">
			<h1 class="screaming-voice"><?=$title2?></h1>
		</div>
	<!-- </div> -->
</div>