<?php 

function queryString() {
	return $_SERVER['QUERY_STRING'];
}

function styleGuideDetailLink($type, $page) {
	if ($page == "style-guide") {
		$link = "?page=module&slug=$type";
		echo "<a href='$link' target='$type'>Detail</a>";
	}
}

function pageClass($page) {
	return "$page";
}

function pageTemplateClass($page) {
	if ( isset($page["template"]) ) {
		return "$page[template]-template";
	} else {
		return "default-template";
	}
}
?>