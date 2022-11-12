<?php 
	$json = file_get_contents("data/page-data/style-guide.json");
	$styleGuideData = json_decode($json, true);

	foreach ($styleGuideData["sections"] as $sections) {
		$module = $sections["module"];
		$title1 = $sections["title1"];
		$title2 = $sections["title2"];		
?>

	<section class="<?=$page?> <?=$module?>">
		<h2 class="style-header loud-voice"><?=$title1?> <?=$title2?></h2>
		
		<?php include("modules/$module/$module.php"); ?>
		<detail-link><?php styleGuideDetailLink($module, $pageData["slug"]); ?></detail-link>
	</section>

<?php } ?>
	

<section class="typography">
	<h2 class="style-header loud-voice">Typography</h2>
	<div class="typography-examples">
		<h3 class="alert-voice">Font Family: Rubik</h3>
		<p class="normal-voice">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
		<p class="normal-voice">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
		<p class="normal-voice">1 2 3 4 5 6 7 8 9 0</p>
		<p class="normal-voice">! @ # $ % ^ & * ( ) _ + = , . / < > ? ; ' : " [ ] { } \ | ~ `</p>
	</div>
</section>

<section class="voices">
	<h2 class="style-header loud-voice">Type Voices</h2>
	<div class="voice-examples">
		<h1 class="screaming-voice">Shout Voice</h1>
		<h2 class="loud-voice">Loud Voice</h2>
		<h3 class="attention-voice">Attention Voice</h3>
		<h4 class="alert-voice">Alert Voice</h3>
		<p class="normal-voice">Normal Voice</p>
		<p class="calm-voice">Calm Voice</p>
		<p class="quiet-voice">Quiet Voice</p>
	</div>
</section>

<section class="colors">
	<h3 class="style-header loud-voice">Color Schemes</h3>
	<div class="light-scheme">
		<h4 class="attention-voice">Light Mode</h3>
		
		<ul class="light-mode">
			<li>
				<p class="alert-voice">Background</p>
				<p class="normal-voice">hsla(50, 100%, 86%, 1)</p>
			</li>
		
			<li>
				<p class="alert-voice">Standout</p>
				<p class="normal-voice">hsla(360, 100%, 39%, 1)</p>
			</li>
		
			<li>
				<p class="alert-voice">Trim</p>
				<p class="normal-voice">hsla(38, 10%, 15%, 1)</p>
			</li>

			<li>
				<p class="alert-voice">Paper</p>
				<p class="normal-voice">hsla(0, 0%, 100%, 1.00)</p>
			</li>			
		</ul>
	</div>

	<div class="dark-scheme">
		<h4 class="attention-voice">Dark Mode</h3>

		<ul class="dark-mode">
			<li>
				<p class="alert-voice">Background</p>
				<p class="normal-voice">hsla(189, 20%, 12%, 1)</p>
			</li>
		
			<li>
				<p class="alert-voice">Standout</p>
				<p class="normal-voice">hsla(170, 56%, 49%, 1)</p>
			</li>
		
			<li>
				<p class="alert-voice">Trim</p>
				<p class="normal-voice">hsla(60, 7%, 40%, 1)</p>
			</li>
		
			<li>
				<p class="alert-voice">Paper</p>
				<p class="normal-voice">hsla(0, 0%, 4%, 1)</p>
			</li>	
		</ul>
	</div>
</section>