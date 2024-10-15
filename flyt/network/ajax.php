<?php
clearstatcache();

	if ($_POST['request'] == "get-flyt-stats") {
		
		$file = '/etc/flyt/data/flyt-stats-1.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	
?>