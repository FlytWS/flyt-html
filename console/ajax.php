<?php

	if ($_POST['request'] == "get-wingbits-name") {
		
		$file = '/etc/flyt/wingbits';
		if (file_exists($file)) {
			echo file_get_contents('/etc/flyt/wingbits');
		};
		
	}

	if ($_POST['request'] == "get-location") {
		
		$file = '/etc/flyt/data/location';
		if (file_exists($file)) {
			echo file_get_contents('/etc/flyt/data/location');
		};
		
	}
	
?>