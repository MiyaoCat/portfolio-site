<?php 
	$json = file_get_contents('data/layout1.json');
	$pageData = json_decode($json, true);

	function getPageDataByType ($items, $type) {

		$filtered = [];

		foreach ($items as $item) {
			if($item['type'] == $type) {
				array_push($filtered, $item);
			}
		} return $filtered;
	}
 
	$articleCard = '';
	$imageCard = '';

	$articleCard = getPageDataByType($pageData, 'article');
	$introCard = getPageDataByType($pageData, 'header');
	$imageCard = getPageDataByType($pageData, 'image');
?>

<div class='header'>
	<h1 class="screaming-voice">Article Grid Layout 1</h1>
</div>

<intro>
	<?php foreach ($introCard as $item) { ?>	
	 	<h2 class="loud-voice"><?=$item['heading'];?></h2>
	 	<p class="quiet-voice"><?=$item['text'];?></p>
	 <?php } ?>
</intro>

<article>
	<?php foreach ($articleCard as $item) {
	 ?>	

	<ul class="article-list">
	 	<h2 class="attention-voice"><?=$item['heading'];?></h2>
	 	<p class="quiet-voice"><?=$item['text'];?></p>
	</ul>

	<?php } ?>
</article>

<image-grid>
	<picture>

		<?php foreach ($imageCard as $item){ ?>
			<img class='images' src="<?=$item['img'];?>">
		<?php	} ?>

	</picture>
</image-grid>

	
