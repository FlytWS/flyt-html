<?php

	if ($_POST['request'] == "get-flyt-stats") {
		
		$file = 'D:/xampp/htdocs/flyt-data/flyt-stats.json';
		if (file_exists($file)) {
			echo file_get_contents('D:/xampp/htdocs/flyt-data/flyt-stats.json');
		};
		
	}

	
?>