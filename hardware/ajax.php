<?php

	
	if ($_POST['request'] == "get-flyt-stats-2") {
		
		$file = '/etc/flyt/data/flyt-stats-2.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}


	if ($_POST['request'] == "get-flyt-stats-1") {
		
		$file = '/etc/flyt/data/flyt-stats-1.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	if ($_POST['request'] == "get-flyt-model") {
		
		$file = '/etc/flyt/model';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	
?>