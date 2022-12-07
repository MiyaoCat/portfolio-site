<?php  
		$state = "";
		$total = 0;
		$order = 0;
		$tax = 0;
		$message = "";
		$orderMessage = "";
		$submitted = isset($_POST["submitted"]);
		
		if ( $submitted ) {
			$order = $_POST["order-amount"];
			$state = $_POST["state-selected"];
		
			if ($state == "CA") {
				$tax = .0725;
			};
		
			if ($state == "FL") {
				$tax = .06;
			};
		
			if ($state == "HI") {
				$tax = .04;
			};
		
			if ($state == "NY") {
				$tax = .04;
			};
		
			if ($state == "OR") {
				$tax = 0;
			};
		
			if ($state == "WA") {
				$tax = .065;
			};
		
			if ($state == "WI") {
				$tax = .05;
			};
		
			if ($state == "WY") {
				$tax = .04;
			} 
		} 
		
		$total = number_format($order * (1 + $tax), 2);
		
		if ($submitted) {
			if ($state == "") {
				$message = "<p class='calm-voice warning'>You didn't select a state!</p>";
			}
		}	
		
		if ($submitted) {
			if ($order <= 0) {
				$orderMessage = "<p class='calm-voice warning'>Either you're stealing or it's free</p>";
			}
		}
	?>