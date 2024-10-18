<?php
clearstatcache();

	if ($_POST['request'] == "get-stats") {
		
		$file = '/run/readsb/stats.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		} else {
			echo "No File";
		};
		
	}
	
	if ($_POST['request'] == "get-status") {
		
		$file = '/run/readsb/status.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		} else {
			echo "No File";
		};
		
	}


	if ($_POST['request'] == "get-usb") {
		
		$file = '/etc/flyt/data/flyt-usb-parse.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		} else {
			echo "No File";
		};
		
	}

?>


