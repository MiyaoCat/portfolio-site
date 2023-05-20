<?php  
	$page = $_GET["page"];

	if($page == "exercise") {
?>
	<a href='?page=exercises' class='alert-voice'>Back</a>
<?php } 
	if($page == "js-exercise") {
?>
	<a href='?page=js-exercises' class='alert-voice'>Back</a>
<?php } 
	if($page == "v-exercise") {
?>
	<a href='?page=v-exercises' class='alert-voice'>Back</a>
<?php } ?>