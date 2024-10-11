<?php
clearstatcache();

	if ($_POST['request'] == "get-wingbits-name") {
		
		$file = '/etc/flyt/data/wingbits';
		if (file_exists($file)) {
			echo file_get_contents('/etc/flyt/data/wingbits');
		};
		
	}

	if ($_POST['request'] == "get-location") {
		
		$file = '/etc/flyt/data/location';
		if (file_exists($file)) {
			echo file_get_contents('/etc/flyt/data/location');
		};
		
	}
	
?>