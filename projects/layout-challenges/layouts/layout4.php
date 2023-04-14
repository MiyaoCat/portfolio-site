<div class='header'>
	<h1 class="screaming-voice">FAQs</h1>
</div>

<intro>
	<div class="teaser">
		<p class="normal-voice">Learn Something</p>
	</div>
	
	<h2 class="loud-voice">Find What You're Looking For?</h2>

	<p class="intro normal-voice">You may find this module in an FAQs, Knowledge Base or Features section, where you have lists of information.</p>
</intro>

<article>
	<ul class="article-list">
	 	<li class="teaser">
				<p class="teaser normal-voice">Little teaser</p>
		</li>


	 	<li class="article-card">
	 		<details>
	 			<summary><h3 class="attention-voice">Heading level 3 large</h3></summary>

    			<p class="quiet-voice">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Nobis, veniam, sit! Architecto ipsa, blanditiis fugit.</p>
			</details>
	 	</li>

	 	<li class="article-card">
	 		<details open>
	 			<summary><h3 class="attention-voice">Heading level 3 large</h3></summary>

    			<p class="quiet-voice">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Nobis, veniam, sit! Architecto ipsa, blanditiis fugit.</p>
			</details>
	 	</li>

	 	<li class="article-card">
	 		<details>
	 			<summary><h3 class="attention-voice">Heading level 3 large</h3></summary>

    			<p class="quiet-voice">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Nobis, veniam, sit! Architecto ipsa, blanditiis fugit.</p>
			</details>
	 	</li>

	 	<li class="teaser">
			<p class="teaser normal-voice">Little teaser</p>
		</li>

		<?php foreach ( [1, 2, 3, 4, 5, 6, 7] as $article) { ?>

			<li class="article-card">
		 		<details>
		 			<summary><h3 class="attention-voice">Heading level 3 large</h3></summary>

	    			<p class="quiet-voice">Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Nobis, veniam, sit! Architecto ipsa, blanditiis fugit.</p>
				</details>
		 	</li>

		<?php } ?>
	</ul>
</article>
