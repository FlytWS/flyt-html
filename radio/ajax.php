<?php


	if ($_POST['request'] == "get-stats") {
		
		$file = '/run/readsb/stats.json';
		if (file_exists($file)) {
			echo file_get_contents('/run/readsb/stats.json');
		} else {
			echo "No File";
		};
		
	}
	
	if ($_POST['request'] == "get-status") {
		
		$file = '/run/readsb/status.json';
		if (file_exists($file)) {
			echo file_get_contents('/run/readsb/status.json');
		} else {
			echo "No File";
		};
		
	}


?>