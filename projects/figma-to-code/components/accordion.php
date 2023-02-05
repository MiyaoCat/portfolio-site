<ul class="faqs-accordion">
	<?php  if($component["type"] == "accordion") { ?>
		<?php
			foreach($component["listItems"] as $item) {
				$question = $item["question"];
				$answer = $item["answer"];
				$open = $item["state"];
		?>
				<li class="faq-card">
					<details <?php if($open == true) {echo 'open';} ?> >
						<summary>
							<div class="question"><?=$question?></div>

							<div class="arrow">
								<?php include("./assets/icons/arrow-right-faq.svg") ?>
							</div>	

						</summary>
							<p class=" answer normal-voice"><?=$answer?></p>
					</details>
				</li>
		<?php }  ?>
	<?php } ?>
</ul>

