<?php
clearstatcache();

	if ($_POST['request'] == "get-wingbits-name") {
		
		$file = '/etc/flyt/wingbits';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	if ($_POST['request'] == "get-location") {
		
		$file = '/etc/flyt/data/flyt-location.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	if ($_POST['request'] == "get-gnss") {
		
		$file = '/etc/flyt/data/flyt-gnss.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	
	if ($_POST['request'] == "get-flyt-stats-0") {
		
		$file = '/etc/flyt/data/flyt-stats-0.json';
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



	if ($_POST['request'] == "get-flyt-stats-2") {
		
		$file = '/etc/flyt/data/flyt-stats-2.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}

	
	
	
?>