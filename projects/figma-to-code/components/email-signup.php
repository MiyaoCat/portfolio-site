<email-signup>

	<?php  
		if($component["type"] == "email-signup") {
			$placeholder = $component["placeholder-text"];
			$icon = $component["icon"];
	?>
			<div class="svg"> <?php include($icon) ?> </div>

			<input type="email" placeholder=" <?=$placeholder?>"> 

	<?php } ?>

</email-signup>