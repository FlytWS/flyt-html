<?php
clearstatcache();

/*
	if ($_POST['request'] == "get-aircraft") {
		
		$file = '/run/readsb/aircraft.json';
		if (file_exists($file)) {
			echo file_get_contents('/run/readsb/aircraft.json');
		} else {
			echo "No File";
		};
		
	}
*/
	
	if ($_POST['request'] == "get-location") {
		
		$location = null;
		$wingbitsantennaid = null;
		
		$file = '/etc/flyt/data/location';
		if (file_exists($file)) {
			$location = file_get_contents('/etc/flyt/data/location');
		};
		$file = '/etc/flyt/data/wingbits';
		if (file_exists($file)) {
			$wingbitsantennaid = str_replace(PHP_EOL, '', file_get_contents('/etc/flyt/data/wingbits'));
		};
		echo '{"location":'.$location.',"name":"'.$wingbitsantennaid.'"}';
		
		
	}


?>