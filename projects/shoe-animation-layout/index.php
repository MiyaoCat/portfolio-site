<?php include "components/header.php" ?>

<main>
	<inner-column>
		<div class="left-side">
			<?php include("components/quadrants.php"); ?>

			<?php include("components/shoe-grid.php"); ?>
			
		</div>
		
		<div class="right-side">
			<?php include("components/main-image.php"); ?>
			
			<?php include("components/color-palette.php"); ?>
			
			<?php include("components/shoe-detail.php"); ?>
		</div>
	</inner-column>
</main>	

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

<script src='animation.js'></script>			
</body>

</html>