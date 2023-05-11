
<?php include ('data/articles.php'); ?>

<articles-intro>
	<header>
		<h2 class='attention-voice'>Shop the Latest Trends</h2>

		<p>All the clothes you never needed, maybe  wanted, and always desired.</p>
	</header>
</articles-intro>

<article-grid>
	<ul class='article-list'>

		<?php foreach ($articles as $article) { ?>
			<li class='article'>
				<?php include('modules/article-card/template.php'); ?>
			</li>
		<?php } ?>

	</ul>
</article-grid>

