<?php
clearstatcache();
		
	
	if ($_POST['request'] == "get-flyt-gnss") {
		
		$file = '/etc/flyt/data/flyt-gnss.json';
		if (file_exists($file)) {
			echo file_get_contents($file);
		};
		
	}
	
	
	
	
	
?>