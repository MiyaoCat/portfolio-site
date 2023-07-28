<?php  
	$page = $_GET["page"];

	if($page == "exercise") {
?>
	<a href='?page=exercises'>Back</a>
<?php } 
	if($page == "js-exercise") {
?>
	<a href='?page=js-exercises'>Back</a>
<?php } 
	if($page == "v-exercise") {
?>
	<a href='?page=v-exercises'>Back</a>
<?php } ?>