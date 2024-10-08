<?php

	
	if ($_POST['request'] == "get-flyt-stats") {
		
		$file = '/etc/flyt/data/flyt-stats.json';
		if (file_exists($file)) {
			echo file_get_contents('/etc/flyt/data/flyt-stats.json');
		};
		
	}

	
?>